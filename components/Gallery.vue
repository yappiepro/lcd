<template>
  <section id="gallery" class="py-20 bg-[#111]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-6xl font-bold text-white">ПРОЕКТЫ</h2>
        </div>

        <!-- Слайдер на всю ширину -->
        <div class="relative">
          <!-- Изображение -->
          <div class="overflow-hidden rounded-2xl">
            <img
              :src="images[currentSlide]"
              alt="Проект"
              class="gallery-image w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>

          <!-- Кнопка влево -->
          <button
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            @click="prevSlide"
          >
            <svg
              class="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Кнопка вправо -->
          <button
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            @click="nextSlide"
          >
            <svg
              class="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Индикаторы -->
          <div class="flex justify-center space-x-2 mt-6">
            <button
              v-for="(image, index) in images"
              :key="index"
              :class="[
                'w-2 h-2 rounded-full transition-colors',
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              ]"
              @click="currentSlide = index"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentSlide = ref(0)
const images = [
  'images/feater1.jpg',
  'images/feater2.jpeg',
  'images/feater3.jpg',
  'images/1_1.jpeg',
  'images/2_2.jpg'
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length
}
</script>
