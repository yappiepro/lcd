<template>
  <div class="relative">
    <!-- Noise overlay -->
    <div class="noise-overlay fixed inset-0 pointer-events-none z-[9000]"></div>

    <ClientOnly>
      <SmoothScroll />
    </ClientOnly>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  useScrollAnimation,
  useTextReveal,
  useCounterAnimation,
  useParallax,
  useTiltEffect
} from '~/composables/useAnimations'

if (import.meta.client) {
  // Set custom viewport height for iOS
  const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }
  setVh()
  window.addEventListener('resize', setVh)

  onMounted(() => {
    const { initScrollAnimations } = useScrollAnimation()
    const { initTextReveal } = useTextReveal()
    const { initCounters } = useCounterAnimation()
    const { initParallax } = useParallax()
    const { initTilt } = useTiltEffect()

    // Initialize all animations with delays
    setTimeout(() => {
      initScrollAnimations()
      initTextReveal()
      initCounters()
      initParallax()
      initTilt()

      // Trigger image reveal animations
      setTimeout(() => {
        document.querySelectorAll('.image-reveal').forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('revealed')
          }, i * 200)
        })
      }, 100)
    }, 100)

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('resize', setVh)
    })
  })
}
</script>
