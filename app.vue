<template>
  <div class="relative">
    <!-- Noise overlay -->
    <div class="noise-overlay fixed inset-0 pointer-events-none z-[9000]"></div>
    
    <CustomCursor />
    <SmoothScroll />
    <NuxtPage />
  </div>
</template>

<script setup>
import { useScrollAnimation, useTextReveal, useCounterAnimation, useParallax, useTiltEffect } from '~/composables/useAnimations'

onMounted(() => {
  const { initScrollAnimations } = useScrollAnimation()
  const { initTextReveal } = useTextReveal()
  const { initCounters } = useCounterAnimation()
  const { initParallax } = useParallax()
  const { initTilt } = useTiltEffect()

  // Initialize all animations
  initScrollAnimations()
  initTextReveal()
  initCounters()
  initParallax()
  initTilt()
})
</script>
