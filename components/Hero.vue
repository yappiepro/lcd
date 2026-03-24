<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Gradient Orbs -->
    <div class="gradient-orb gradient-orb-1"></div>
    <div class="gradient-orb gradient-orb-2"></div>

    <!-- Фоновое видео -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
        <!-- Заглушка если видео не загрузится -->
        <div class="bg-gray-300 flex items-center justify-center">
          <span class="text-gray-500 text-2xl">Фоновое видео (1920x1080)</span>
        </div>
      </video>
      <!-- Затемнение -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Основной контент -->
    <div class="relative z-10 flex-1 w-full px-8 md:px-12 lg:px-16 py-8 md:py-20">
      <div class="max-w-[1600px] mx-auto">
        <div class="max-w-4xl mt-8 md:mt-20">
          <!-- Заголовок -->
          <h1 class="text-reveal-target text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
            <span class="text-reveal-line">Строим дома из CLT</span>
            <span class="text-reveal-line">для жизни и бизнеса</span>
          </h1>

          <!-- Подзаголовок -->
          <h2 class="animate-on-scroll text-xl md:text-2xl text-white/90 font-light mb-6 md:mb-8">
            Индивидуальный подход к строительству
          </h2>

          <!-- Описание -->
          <ul class="animate-on-scroll delay-100 space-y-2 md:space-y-3 text-white/80 text-sm md:text-base lg:text-lg mb-8 md:mb-10">
            <li>Профильная CLT компания</li>
            <li>Архитектура и реализация «под ключ»</li>
            <li>Авторское сопровождение проекта и надзор</li>
          </ul>

          <!-- Кнопка - видна сразу без анимации -->
          <a
            href="#contact"
            class="magnetic-btn btn-liquid w-24 h-24 md:w-28 md:h-28 rounded-full bg-black flex flex-col items-center justify-center text-white font-medium hover:bg-gray-800 transition-colors px-4 py-2 md:px-5 md:py-3"
          >
            <svg class="w-5 h-5 md:w-6 md:h-6 transform -rotate-45 mb-1 md:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span class="text-left leading-tight text-xs md:text-base">ЗАКАЗАТЬ<br/>ПРОЕКТ</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Стрелка вниз -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
      <div class="flex flex-col items-center space-y-2 text-white/60 animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
