<template>
  <slot />
</template>

<script setup>
import Lenis from '@studio-freight/lenis'

let lenis = null

// Check if mobile
const isMobile = () => {
  return window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

onMounted(() => {
  // Don't initialize Lenis on mobile - use native scroll
  if (isMobile()) {
    return
  }

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
