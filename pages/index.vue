<template>
  <div class="relative">
    <!-- Noise overlay -->
    <div class="noise-overlay fixed inset-0 pointer-events-none z-[9000]"></div>

    <Header />
    <main>
      <Hero />
      <Styles />
      <Makko />
      <Services />
      <Gallery />
      <ArchitecturalStyles />
      <Projects />
      <Pricing />
      <Team />
      <BriefForm />
      <ContactForm />
      <News />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useScrollAnimation, useTextReveal, useCounterAnimation, useTiltEffect } from '~/composables/useAnimations'

onMounted(() => {
  const { initScrollAnimations } = useScrollAnimation()
  const { initTextReveal } = useTextReveal()
  const { initCounters } = useCounterAnimation()
  const { initTilt } = useTiltEffect()

  // Initialize all animations
  setTimeout(() => {
    initScrollAnimations()
    initTextReveal()
    initCounters()
    initTilt()
  }, 100)
})
</script>
