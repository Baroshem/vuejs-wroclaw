// Display order matters: the 1st and 10th entries render as large 2x2 tiles.
export interface GalleryPhoto {
  src: string
  /** Key of the alt text: gallery.alts.<id> in the locale files. */
  id: string
  width: number
  height: number
  blur: string
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/gallery/meetup-12.webp',
    id: 'p12',
    width: 1600,
    height: 1279,
    blur: 'data:image/webp;base64,UklGRj4BAABXRUJQVlA4IDIBAADwBgCdASoYABMAPtFepE6oJSMiKAqpABoJagCdMoMlxHXoALsdHJpD+u/5WHgeiH57R/q3xz+ZqsQb7DakHmqAAP70MzJ74D8QJSBY9yLhrtun5ZH7vl8Oe/lGjlbByfoo72+qX40p2msQ/WCC6zc4Rh9xwar59spYz/CKFoJbpe0ZmX7l0bV82Ek/V0cLiTz0pf6mlEQTA/uslVLLz9bykY6nuIA3iy/zc3C2OtuPsDgGP20RrQ9wJll9OYsRe1AcdRHpQ7jgZ+4bpSwGJq+cRl6nUvMy37/DifantWzW83bwVxW71/sjMiceZLOyv/9/aVtTFoNJxdP9v769+MFbPMSWQX15pG8aYVjupnkSj3rhGuNBbzEr/aScG5zELMn197CO9ENZ+zBS3CaBvB/+AAA='
  },
  {
    src: '/gallery/meetup-02.webp',
    id: 'p02',
    width: 1600,
    height: 1279,
    blur: 'data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAACQBQCdASoYABMAPtFWo0uoJKMhsAgBABoJaACdMoR7N3AP0AArVPeFkwUyqCwD5O5Hr8ewAAD+8uQN2rR75oydtJ8OpINbvsv0Wp1QI6Mb4X0N5ee+5KajnoJ73yFjaEo0EZLwekYvpQHMGzUI8XG4IzxJ+5zixwhWBWyGIWHZZGSalGKw6oru0K4rl7a6BMYR3cMg1HfxKsE6yIdB7zFacL2m/fBfdkVBPF9T7O+I4nkAyLeu/qtY9IKPwLXqxCfCXQOTzDtnxwR/vwPhReK81AQOj+HQ5AAAAA=='
  },
  {
    src: '/gallery/meetup-03.webp',
    id: 'p03',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRsYAAABXRUJQVlA4ILoAAAAQBQCdASoYABMAPsVQoUunpKMhsAwA8BiJYgC26TYDFt394zWZK0NlCK2GTqhZlALAAP7Q/8/2IHG81Jxcm8IUAUGPIcope6Ro6zpReVOIQ1MDMgTzv3I/ZahDncVKchJ1BuZdAh/y+GP4XZwhc7R5vRcghuxGsgIhIHyHgmD+bhFqAwwTkJkrJcefK3nGEnTLwKP3ZkOha7h+KD2iazQKlCcLizO1J0A+yRCYPurH57T5PnAQzBgAAAA='
  },
  {
    src: '/gallery/meetup-04.webp',
    id: 'p04',
    width: 1600,
    height: 1279,
    blur: 'data:image/webp;base64,UklGRuAAAABXRUJQVlA4INQAAAAwBQCdASoYABMAPtFYpk0oJKOiMBgIAQAaCWwAsR7gQAACVrJC+HlGABLrezoImb7m0AD+7IY+vhYrvQJYN+yZHI3pHCeusJYw8T48WH05nwLR344rA7Xh55yQz91ffvTWPfrw1fR11r1NEq0cciLaexzqX2atCaaBmY6v6FZ+JvgCqA7IpBY3ds0rz81GaGhQf+F0bG6fGgfWFfoXsdHwHUBhEJHQG7hOSwfGixSHxthV8dr3A4oZl/uDZ3qk0xkEnzVW/d89QvOwxUNiTRAJkYAAAA=='
  },
  {
    src: '/gallery/meetup-05.webp',
    id: 'p05',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAADwBQCdASoYABMAPtFgqE+oJSOiKAgBABoJaACsIOdwO/wABVe/P8+QEPtyufNXI7SffCzhpjv02AD+7wh57l0aTW515YZikGllMJDIGtfeGfR4wOhO4Nx+2y/1tJ5sSx6Zu3kW+CFT2WStAKXwmxU2LziMtYiGaf1QKIsH+gYyLIBxJmsF16K2GYD6MYfSD1oQNz1XrVp9WkTE+yA0y/3eTJzvtwneZTf4+6AmEQ4ZeNsXKnleoZohXX1acJQS5QGUfrfDAAA='
  },
  {
    src: '/gallery/meetup-07.webp',
    id: 'p07',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRtgAAABXRUJQVlA4IMwAAAAwBQCdASoYABMAPtFep0+oJKMiKAgBABoJbAC1GoMw0ZAAIdhD4VceVSVEaRlL/fCpeAD+6URB1acVbzeqviPcPfD3T75qVcOTQTe7vKKgi1biWhu/9DdOVVvF/Jr3vGuiWpCfhnYxVnD4MSzeNVLpofKgTuF3h5gtmX92ycBnj6CYr+Xmynby/IG/1Mbu7dft5+rNAr2pkcg9tB7S7MnxeDMlGKkaD0kFqa6l2cRMXyAy1Cx+MzVJuHxxf/MeV3QD6SSMv/x6sUBAAAA='
  },
  {
    src: '/gallery/meetup-06.webp',
    id: 'p06',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRhwBAABXRUJQVlA4IBABAAAQBgCdASoYABMAPtFcp04oJSOiKAqpABoJbACdMoM3DZSZAAEf39YduK5C5WZgGTceZFmcDvyy8AAA/sEQa4u55YZtJdh6wvLY5o4wsxr+nfWpQDuzVT9TQem4kvCEDvNJdlbbG4HYjT47+IwkJ02q1Ss5YCD6XP5EBljwlvtQ8SW6W9o0nSFpSc1wa968mC5NYR89PV/YxFgWoNS+C7vX4wSaTc3J/6Q6S71aVZUuf1JsIfHuc0Sa1DMA2/9S0uTU05x5i13Q/3DXxASF4j9T+5ef2uW3ySTBIcQspwIrhzOWdSGo4ECtegjuhenOWhbVVLg7gQtqu3B+5ndU+ILbZXU6BezLX+zgDZlMeYAAAA=='
  },
  {
    src: '/gallery/meetup-08.webp',
    id: 'p08',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRugAAABXRUJQVlA4INwAAADQBQCdASoYABMAPtFcpU6oJSMiKAqpABoJbACdMoPHYeBbVWmAAKcCFWxgnq0YIq9YripBrDRAAP7veRBkEnbJb77wh1aWunEO1pnJtT7qY+7hFWO7/4AKXyG9bQi5Re/y4qLjTMSD7jie3TyK/iqILaegzRNWkKe/Wa/2OEwFBGZVEUSGlwEbCPHLXEnw7I1jFn79W9bFqZhf9hmD6UKkG/DMUgYS2MNI0smtMzAA6Q8q7o/yo+BQwyBBDdOWm7QrGSem2ePChy2y09qFwl+4l//LIoppNzv5LAAA'
  },
  {
    src: '/gallery/meetup-09.webp',
    id: 'p09',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAADQBQCdASoYABMAPtFcp04oJSOiKAqpABoJagC/aoJZRhVQCBTL3BfHzF2mTEpYhPM+YYsUcbgwAP7w3RGxSDByI3pipw6aFbRx/NUaEzDKGdGSRTd2xJPj1CTTlJDy8cDQSpGLPM732wNAHIzM+vRUr6AYBy+P61PR1nF3J41wEQuaNPpsGYWwgFPsdtL3pghyYfw4vdGQTwrj9/zxhLrFriZnQtMqqfEuQNdEPJUN0nIj8+rZp0d+DXTpH9asjtxx++bV+MiGvYAA'
  },
  {
    src: '/gallery/meetup-16.webp',
    id: 'p16',
    width: 1600,
    height: 1279,
    blur: 'data:image/webp;base64,UklGRvIAAABXRUJQVlA4IOYAAACQBQCdASoYABMAPtFaqU2oJSQiKAqpABoJbAAdqYRI4W+UM6HuqI0Mn5YjY9P4sB3epAvuYAD+9J1fedg7HtDYlbsaXu6etiBVvrFmeYsbcdVp6mHGf2ouB4Z5wAHGdAL+I3qG/On7z824+LiN98WWDQNv1FrJKWIrtz6d/8l3Ifi9ANHHiaWYP2XRrPZOI2PvsIeWDLtDMKw/w4VBBzET9/SkM8dz4NL/EZ2/fwNr2HFbs4gzygHX37MDrD0vP/bBEAO/ggX4HSmuGiqrTNQAevOauuC/7HSA0rA5Sj1mrLnLDfAAAA=='
  },
  {
    src: '/gallery/meetup-01.webp',
    id: 'p01',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRvIAAABXRUJQVlA4IOYAAAAwBgCdASoYABMAPtFcp04oJSOiKAqpABoJagC2+oPHmdngMSySAlioULKeD3scUpyR48jfTbFRdQIAAP7vZi2h/fXXH1HtuOfrgvX3rc5GGqPXOuhYkzjR7GAH7i7cpcSFXVb4iyLC/SFonAthsB/UJ7/Vtnw3M3EIIUOAjpWdMR9de7/pYZrl8Xp3Tfwj7VYeYt9VaZcdrncZHe8H/F42bBlARDA4HWY0wVaq8f4sP0r4aPfugJL+QQMwR00omD2l9Vdx7jVe8d75Er3237ZO4Gn7Ugzg6gTqCuYj6+O92OobKgAAAA=='
  },
  {
    src: '/gallery/meetup-10.webp',
    id: 'p10',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRvoAAABXRUJQVlA4IO4AAAAwBgCdASoYABMAPtFcp04oJSOiKAqpABoJbACdMuu2/I1zyGmkjlmDZbmoF19BPOvoFhoaYITsUonAAP7qKEpwiFvbzKZ+C2y+RluHe71qzIrXqGXYj522uOAShNnclmb0IUJ6SWhNTln4t/OZfLrYaMtz0Ax4+BoQSEgzt6LCYGn/VQTruzB/A/h85REQyxue4WItBEAUrkcwuK++0wjizi6QpcapHZoet5hy5NSvBNt4yJgdPtOjVi4WAKFlJgTit3ETvGL1ODufjonJJnSNfZZYd3btT3S+UBoPEHOj02GxiwlVz7cHv5MkAAAA'
  },
  {
    src: '/gallery/meetup-13.webp',
    id: 'p13',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAABwBQCdASoYABMAPslSn0unpKKhsAwA8BkJZgCdDiTQKkOWr+oL/V1emuDxm5oNtCf+Q7QAAP71g3703N0Z9nI/VVdPMcrXIR6qrRhQV4M34nMaYxiQURaWgAFUf3uCq7zYqHdiS1A+fHgznGTWVa2BQiCoOWb1LJmIaT7qwldYB/IZ52iaJNVcmF/8881N+oQSBheoeZLJOw+v2Jy8gDiOV7oqJk24e8E784SwnfniD2329Iv8kz8f4op9KgBT5VTtDZSJAAA='
  },
  {
    src: '/gallery/meetup-14.webp',
    id: 'p14',
    width: 1280,
    height: 1600,
    blur: 'data:image/webp;base64,UklGRvoAAABXRUJQVlA4IO4AAACQBgCdASoTABgAPtFYpEyoJSOiKA1RABoJbACdMw5CturiyvedwFfxfctWnqLv+kH3glXdLk/JmoF5xoAAAP7xEppiWp3fQHe10yE4EnBoD3cPIrvXZpaCDte5eSvGNznBiCJC3dLI6moSgeIQa6Oh1j+fOlufJZNuyQmEBu7gw5dU4OyW50fQ7ia0TtIL/DDBoG9dhQqww1GwPIHj+P4Xlz3qGAA+NOE3oTXGqAlB5BUmsVwlkjqD7z8dGErn1D0K8bg173fl+Dlih/iMovEgcBSUJvynaZ6k8gkxx44oN8frwBYWA0lAawnpQAAA'
  },
  {
    src: '/gallery/meetup-15.webp',
    id: 'p15',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRsQAAABXRUJQVlA4ILgAAABwBQCdASoYABMAPtFYpE0oJSMiMBgIAQAaCWYAnTMM/Dll4DE/kjIilOGf/CVQKVLyk+gAAP7yvTbX7VjO8JM7e+SUXCRFYdXXf74avPa0LuXRVITbU93rPUkau14l1jPnjkQI+YC/Yfc9zuvZ3qEFW4EWzEvX/haxtLDVWX68Fnw1118Sd8tu6XpZfz7RjVbBjQif5251YslyHnUTSFN5IKAbe6X17xhBSb/7bqPnYK92v9+BIAAA'
  },
  {
    src: '/gallery/meetup-17.webp',
    id: 'p17',
    width: 1600,
    height: 1280,
    blur: 'data:image/webp;base64,UklGRtQAAABXRUJQVlA4IMgAAADQBQCdASoYABMAPtFcpk4oJSOiKAqpABoJbACdMoR5j+UB04uUKUz+poJxuZYfNGi0cFIMiTwAAP7w2TcqVHXz1KCbeRkWeo+zQU4znVNg+N1FMpDH3uHQY8RHPPrV/FWOMNV2n8PDCS54msAMCxKNDJoOvknFWGFgvLvNjLFW1ljIfozSGAyuF6FXmz0aBQ8XNb8BNYQ3K2wxWNugtx0V81GZMNEIyQMZ7O3RA6SxEkrNsNPXfoEI60oHmceVzL/7Ft4SEfhAAA=='
  },
  {
    src: '/gallery/meetup-11.webp',
    id: 'p11',
    width: 1599,
    height: 1279,
    blur: 'data:image/webp;base64,UklGRr4AAABXRUJQVlA4ILIAAABQBQCdASoYABMAPtFapE0oJSMiKA1RABoJaACdIT2//FOQB6TNPjXuQ6ssiMOXeLmQjNgA/vRUfeFLlvTTQaVkWFoRAuARCljaedUD6K60B/8qhyvWmaCwfOYcDLSqMDMG0Z+aXVGUvFgCmnOgFPqWj30XPCCGuRJnsYTq46E57LY8iKyvGBdhdgsAa6fTHURMKbWRGnWjX8/ICCheLbDAhOST5ntz6djGlDax8ASXr+AA'
  },
  {
    src: '/gallery/meetup-18.webp',
    id: 'p18',
    width: 1280,
    height: 1600,
    blur: 'data:image/webp;base64,UklGRhIBAABXRUJQVlA4IAYBAAAwBwCdASoTABgAPtFYpE0oJSOiKA1RABoJbAC1GoR14NU3ObDOmhsNtndwB2XZqsPHazfB7wKR23iIocZO3Dbd2uAA/vK0vF3qSjHYhmOGO/KLpQl7E6O+y403mTvILon8s5EMUhvkFcCeoBXr75qsttq2WDZ1qI1ZCvmte1aqI3+Cm4ZofAEhbLFKQQmBhP3zxLIhWnBiW5GwT44AS3aQAzshuIxP+XLe22eVQPPyu0AGdt2ZcvcRCAxX1oWBRLdL1Z7G+40J+CFgH70Q0yu/yTAOX1FCh5+3vYKNaf7sldJQI2OfIuQfqJFIdp9ViHzUa+y+5J96mkKZsLK95/2qvrYEAAAA'
  }
]
