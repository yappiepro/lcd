<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Gradient Orbs -->
    <div class="gradient-orb gradient-orb-1"></div>
    <div class="gradient-orb gradient-orb-2"></div>

    <!-- Фоновое видео -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <video autoplay muted loop playsinline class="w-full h-full object-cover">
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
        <div class="max-w-4xl mt-14 md:mt-10 lg:mt-14">
          <!-- Заголовок -->
          <h1
            class="text-reveal-target text-7xl md:text-5xl lg:text-5xl font-bold text-white leading-none mb-6 md:mb-8"
          >
            <span class="text-reveal-line">Строим дома из CLT</span>
            <span class="text-reveal-line">для жизни и бизнеса</span>
          </h1>

          <!-- Подзаголовок -->
          <h2 class="animate-on-scroll text-lg md:text-xl text-white/90 font-light mb-6 md:mb-8">
            Индивидуальный подход к строительству
          </h2>

          <!-- Описание -->
          <ul
            class="space-y-0 text-white/80 text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-md"
          >
            <li class="animate-on-scroll">Профильная CLT компания</li>
            <li class="animate-on-scroll delay-200">Архитектура и реализация «под ключ»</li>
            <li class="animate-on-scroll delay-400">Авторское сопровождение проекта и надзор</li>
          </ul>

          <!-- Кнопка - видна сразу без анимации -->
          <a
            href="#contact"
            class="magnetic-btn btn-liquid w-32 h-32 rounded-full bg-black flex flex-col items-center justify-center text-white font-medium hover:bg-gray-800 transition-colors px-8 py-8 mt-8 md:mt-10 lg:mt-12"
          >
            <span class="text-center leading-tight text-sm">ЗАКАЗАТЬ<br />ПРОЕКТ ↗</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Стрелка вниз -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
      <div class="flex flex-col items-center space-y-2 text-white/60 animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
