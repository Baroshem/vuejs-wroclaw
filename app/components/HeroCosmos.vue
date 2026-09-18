<script setup lang="ts">
import type { Frame } from 'vgpu'

const el = ref<HTMLCanvasElement | null>(null)
const ready = ref(false)

const SHADER = `
struct Params {
  time: f32,
  mouse: vec2f,
  resolution: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn noise2(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = hash21(i);
  let b = hash21(i + vec2f(1.0, 0.0));
  let c = hash21(i + vec2f(0.0, 1.0));
  let d = hash21(i + vec2f(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

fn fbm(p0: vec2f) -> f32 {
  var p = p0;
  var v = 0.0;
  var amp = 0.55;
  for (var i = 0; i < 4; i++) {
    v += amp * noise2(p);
    p = p * 2.07 + vec2f(13.7, 9.1);
    amp = amp * 0.5;
  }
  return v;
}

fn starLayer(sp0: vec2f, t: f32, grid: f32, keep: f32) -> f32 {
  let sp = sp0 * grid;
  let cell = floor(sp);
  let f = fract(sp);
  let rnd = hash21(cell);
  if (rnd > keep) {
    return 0.0;
  }
  let pos = vec2f(hash21(cell + vec2f(19.19, 7.7)), hash21(cell + vec2f(3.1, 27.7))) * 0.72 + vec2f(0.14, 0.14);
  let d = distance(f, pos);
  let twinkle = 0.5 + 0.5 * sin(t * (0.5 + rnd * 2.2) + rnd * 61.0);
  let core = smoothstep(0.12, 0.0, d);
  return pow(core, 3.5) * (0.3 + 0.7 * twinkle) * (0.35 + 0.65 * rnd);
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let t = params.time;
  let aspect = params.resolution.x / max(params.resolution.y, 1.0);
  let p = vec2f(uv.x * aspect, uv.y);

  let q = p * 1.7 + vec2f(t * 0.014, t * -0.009);
  let w1 = fbm(q + vec2f(0.0, t * 0.021));
  let w2 = fbm(q + vec2f(4.7, 2.3) - vec2f(t * 0.017, 0.0));
  let n = fbm(q + vec2f(w1, w2) * 1.55);
  let neb = pow(smoothstep(0.38, 0.86, n), 1.7);

  let maskRight = smoothstep(0.04, 0.78, uv.x);
  let maskTop = 1.0 - smoothstep(0.3, 1.0, uv.y);
  let region = maskRight * mix(0.45, 1.0, maskTop);

  let crimson = vec3f(0.863, 0.078, 0.235);
  let ember = vec3f(0.937, 0.278, 0.427);
  let violet = vec3f(0.486, 0.424, 1.0);
  let nebCol = mix(crimson, ember, w2 * 0.6) * neb * region * 0.34
    + violet * pow(neb, 2.2) * (1.0 - region) * 0.10;

  let drift = vec2f(t * 0.0045, t * -0.002);
  let par = (params.mouse - vec2f(0.5, 0.5)) * 2.0;
  let s1 = starLayer(p * 0.9 + drift * 0.6 - par * 0.012, t, 15.0, 0.55);
  let s2 = starLayer(p * 1.35 + drift * 1.1 - par * 0.028, t, 27.0, 0.52);
  let s3 = starLayer(p * 1.9 + drift * 1.7 - par * 0.05, t, 46.0, 0.48);

  let m = vec2f(params.mouse.x * aspect, params.mouse.y);
  let md = distance(p, m);
  let glow = exp(md * md * -3.2) * 0.16 * (0.35 + 0.65 * maskRight);

  var col = nebCol + glow * vec3f(0.95, 0.3, 0.45);
  col += vec3f(1.0, 0.93, 0.88) * s1 * 0.8 + vec3f(1.0) * s2 * 0.95 + vec3f(0.82, 0.88, 1.0) * s3 * 1.05;

  let a = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
  return vec4f(col * a, a);
}
`

let cleanup: (() => void) | null = null

onMounted(async () => {
  const canvas = el.value
  if (!canvas || !('gpu' in navigator)) {
    return
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const pointer = { x: 0.62, y: 0.35 }
  const pointerTarget = { ...pointer }
  let disposed = false
  let gpuContext: { dispose(): void } | null = null
  let stopLoop: (() => void) | null = null
  let observer: IntersectionObserver | null = null

  const onPointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) {
      return
    }
    pointerTarget.x = (event.clientX - rect.left) / rect.width
    pointerTarget.y = (event.clientY - rect.top) / rect.height
  }

  try {
    const { init, effect, frame, frameLoop, surface } = await import('vgpu')
    const gpu = await init({ powerPreference: 'low-power' })
    if (disposed) {
      gpu.dispose()
      return
    }
    gpuContext = gpu

    const canvasSurface = surface(gpu, canvas, {
      dpr: [1, 1.75],
      clearColor: [0, 0, 0, 0]
    })

    const cosmos = effect(gpu, SHADER, {
      label: 'hero-cosmos',
      set: {
        params: { time: 0, mouse: [pointer.x, pointer.y], resolution: canvasSurface.size }
      }
    })

    const advance = (frameCtx: Frame, time: number) => {
      const ease = 1 - Math.exp(-0.016 * 2.5)
      pointer.x += (pointerTarget.x - pointer.x) * ease
      pointer.y += (pointerTarget.y - pointer.y) * ease
      cosmos.set({
        params: { time, mouse: [pointer.x, pointer.y], resolution: canvasSurface.size }
      })
      frameCtx.pass(canvasSurface, cosmos)
    }

    if (reduced) {
      frame(gpu, frameCtx => advance(frameCtx, 0))
    } else {
      let last = performance.now()
      let time = 0

      const startLoop = () => {
        if (stopLoop || disposed) {
          return
        }
        last = performance.now()
        const handle = frameLoop(gpu, (frameCtx) => {
          const now = performance.now()
          time += Math.min((now - last) / 1000, 0.05)
          last = now
          advance(frameCtx, time)
        }, { fps: 60 })
        stopLoop = () => {
          stopLoop = null
          handle.stop()
        }
      }

      observer = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
          startLoop()
        } else {
          stopLoop?.()
        }
      })
      observer.observe(canvas)
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    ready.value = true
  } catch (error) {
    // WebGPU unavailable or init failed — the CSS star layer in main.css stays as the fallback.
    console.error('[HeroCosmos] WebGPU init failed:', error)
  }

  cleanup = () => {
    disposed = true
    observer?.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    stopLoop?.()
    gpuContext?.dispose()
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <canvas
    ref="el"
    data-hero-cosmos
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-[1] size-full transition-opacity duration-1000"
    :class="ready ? 'opacity-100' : 'opacity-0'"
  />
</template>
