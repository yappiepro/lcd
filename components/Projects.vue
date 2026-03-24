<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-left">
            Технологии В Действии:<br/>Кейсы и Готовые Решения
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Левая часть -->
          <div class="animate-on-scroll">
            <!-- Навигация -->
            <div class="flex space-x-4 mb-8">
              <div
                v-for="(project, index) in projects"
                :key="index"
                @click="activeProject = index"
                :class="[
                  'h-1 flex-1 cursor-pointer transition-all duration-500',
                  activeProject === index ? 'bg-gray-900 scale-x-105' : 'bg-gray-300 hover:bg-gray-400'
                ]"
              />
            </div>

            <!-- Номер проекта -->
            <div class="text-2xl font-light text-gray-900 mb-8">
              / {{ String(activeProject + 1).padStart(2, '0') }}
            </div>

            <!-- Навигация стрелки -->
            <div class="flex space-x-4 mb-8">
              <button
                @click="prevProject"
                class="magnetic-btn w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextProject"
                class="magnetic-btn w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Название проекта -->
            <h3 class="text-reveal-target text-3xl font-bold text-gray-900 mb-4">
              {{ projects[activeProject].title }}
            </h3>

            <!-- Описание -->
            <p class="animate-on-scroll delay-100 text-gray-500 text-lg mb-8">
              {{ projects[activeProject].description }}
            </p>

            <!-- Миниатюра и кнопка -->
            <div class="animate-on-scroll delay-200 flex items-end space-x-6">
              <div class="tilt-card overflow-hidden rounded-xl">
                <img :src="projects[activeProject].thumb" alt="Проект" class="w-64 h-40 object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <a
                href="#contact"
                class="magnetic-btn btn-liquid w-32 h-32 md:w-40 md:h-40 rounded-full bg-black flex flex-col items-start justify-center text-white font-medium hover:bg-gray-800 transition-colors pl-8 md:pl-10 pr-6 md:pr-8 py-6 md:py-8"
              >
                <span class="text-left leading-tight text-sm md:text-lg">посмотреть<br/>проекты ↗</span>
              </a>
            </div>
          </div>

          <!-- Правая часть - большое фото -->
          <div class="animate-on-scroll delay-200 tilt-container projects-right-part">
            <div class="tilt-element overflow-hidden rounded-2xl">
              <img :src="projects[activeProject].image" alt="Проект" class="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const activeProject = ref(0)

const projects = [
  {
    title: 'КОТТЕДЖНЫЙ ПОСЕЛОК КОНАКОВО',
    description: 'задуман как современное загородное пространство для счастливой жизни. Посёлок расположен в живописном месте на берегу Волги, в окружении хвойного леса. Здесь сочетаются комфорт городской квартиры и близость к природе. Каждый дом выполнен по индивидуальному проекту с использованием экологичных CLT-панелей, что обеспечивает идеальную теплоизоляцию и здоровый микроклимат.',
    image: '/images/feater1.jpg',
    thumb: '/images/feater1.jpg'
  },
  {
    title: 'ЭКО-УСАДЬБА В ЛЕСУ',
    description: 'современный дом в гармонии с природой. Проект создан для тех, кто ценит уединение и экологичность. Панорамное остекление наполняет пространство естественным светом, а CLT-конструкции обеспечивают энергоэффективность. Террасы интегрированы в ландшафт, создавая плавный переход от интерьера к лесному окружению.',
    image: '/images/feater2.jpeg',
    thumb: '/images/feater2.jpeg'
  },
  {
    title: 'РЕЗИДЕНЦИЯ НА СКЛОНЕ',
    description: 'дом на склоне горы с захватывающими видами. Архитектура следует рельефу местности, создавая многоуровневое пространство. Каждый этаж открывает новую перспективу. Террасирование участка и панорамные окна превращают природный ландшафт в часть интерьера.',
    image: '/images/feater3.jpg',
    thumb: '/images/feater3.jpg'
  }
]

const nextProject = () => {
  activeProject.value = (activeProject.value + 1) % projects.length
}

const prevProject = () => {
  activeProject.value = (activeProject.value - 1 + projects.length) % projects.length
}

// Автоматическое переключение каждые 5 секунд
onMounted(() => {
  setInterval(() => {
    nextProject()
  }, 5000)
})
</script>
