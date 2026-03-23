<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-transparent">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <div class="flex items-center justify-between h-20">
          <!-- Логотип -->
          <div class="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
            <span class="text-white text-base font-light">МК</span>
          </div>

          <!-- Кнопка меню (справа) -->
          <button 
            class="p-2 text-white hover:text-orange-400 transition-colors" 
            @click="isMenuOpen = true"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Затемнение фона -->
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-black/80 z-50"
      @click="isMenuOpen = false"
    ></div>
  </transition>

  <!-- Выезжающее меню справа -->
  <transition
    enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-500 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div 
      v-if="isMenuOpen" 
      class="fixed top-0 right-0 h-full w-full max-w-md bg-[#111] z-50 shadow-2xl"
    >
      <div class="flex flex-col h-full p-4 md:p-8">
        <!-- Кнопка закрыть -->
        <div class="flex justify-end mb-4 md:mb-8">
          <button
            @click="isMenuOpen = false"
            class="p-2 text-white hover:text-orange-400 transition-colors"
          >
            <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Навигация -->
        <nav class="flex flex-col space-y-4 md:space-y-6 flex-1 justify-center">
          <a
            href="#styles"
            class="text-2xl md:text-4xl font-light text-white hover:text-orange-400 transition-colors"
            @click="isMenuOpen = false"
          >
            Стили
          </a>
          <a
            href="#pricing"
            class="text-2xl md:text-4xl font-light text-white hover:text-orange-400 transition-colors"
            @click="isMenuOpen = false"
          >
            Стоимость
          </a>
          <a
            href="#services"
            class="text-2xl md:text-4xl font-light text-white hover:text-orange-400 transition-colors"
            @click="isMenuOpen = false"
          >
            Услуги
          </a>
          <a
            href="#projects"
            class="text-2xl md:text-4xl font-light text-white hover:text-orange-400 transition-colors"
            @click="isMenuOpen = false"
          >
            Проекты
          </a>
          <a
            href="#news"
            class="text-2xl md:text-4xl font-light text-white hover:text-orange-400 transition-colors"
            @click="isMenuOpen = false"
          >
            Новости
          </a>
          <a
            href="#contact"
            class="text-2xl md:text-4xl font-light text-white hover:text-orange-400 transition-colors"
            @click="isMenuOpen = false"
          >
            Контакты
          </a>
        </nav>

        <!-- Логотип внизу -->
        <div class="text-center pt-4 md:pt-8 border-t border-gray-800">
          <div class="w-12 h-12 md:w-16 md:h-16 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
            <span class="text-white/60 text-lg md:text-2xl font-light">МК</span>
          </div>
          <p class="text-gray-500 text-xs md:text-sm">© 2026 Строим из CLT</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>
