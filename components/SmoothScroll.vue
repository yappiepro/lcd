<template>
  <slot />
</template>

<script setup>
let lenis = null
let Lenis = null

// Check if mobile
const isMobile = ref(false)

onMounted(async () => {
  // Check if mobile
  isMobile.value = window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Don't initialize Lenis on mobile - use native scroll
  if (isMobile.value) {
    return
  }

  // Dynamic import to avoid SSR issues
  const lenisModule = await import('lenis')
  Lenis = lenisModule.default

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      }
    })
  })
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>
