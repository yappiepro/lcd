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
}
</script>
