<template>
  <div class="flex items-center justify-center">
    <div class="relative size-[240px] md:size-[380px]">
      <div class="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(220,20,60,0.22),transparent_70%)] blur-[10px]" />

      <div class="absolute inset-0 animate-[spin_26s_linear_infinite] rounded-full border border-crimson/28 after:absolute after:-top-[3px] after:left-1/2 after:-ml-[3px] after:size-1.5 after:rounded-full after:bg-crimson-light after:shadow-[0_0_10px_var(--color-crimson)] after:content-['']" />
      <div class="absolute inset-[30px] animate-[spin_38s_linear_infinite_reverse] rounded-full border border-gold/35 after:absolute after:-top-[3px] after:left-1/2 after:-ml-[3px] after:size-1.5 after:rounded-full after:bg-gold after:shadow-[0_0_8px_rgba(201,162,39,0.8)] after:content-[''] md:inset-[46px]" />
      <div class="absolute inset-[58px] animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-white/10 md:inset-[92px]" />

      <div class="absolute inset-[74px] flex animate-[float_7s_ease-in-out_infinite] items-center justify-center md:inset-[118px]">
        <svg
          viewBox="0 0 300 257"
          class="w-full overflow-visible"
          aria-label="Vue.js Wrocław"
        >
          <path
            fill="#DC143C"
            d="M58.6416 0.5L149.568 155.523L150 156.259L150.432 155.523L241.358 0.5H299.13L150 256.008L0.870117 0.5H58.6416Z"
          />
          <path
            fill="#FFFFFF"
            d="M58.8 0L149.871 155.271L240.943 0H187.371L150.571 64.3849L112.371 0H58.8Z"
          />
        </svg>
      </div>

      <UiBadge class="absolute bottom-1 left-1/2 -translate-x-1/2 tracking-[0.15em]">
        Wroc &bull; Vue
      </UiBadge>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  50% { transform: translateY(-10px); }
}
</style>
