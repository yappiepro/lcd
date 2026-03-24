<template>
  <section class="py-20 bg-[#111]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-stretch">
          <!-- Левая часть - большое фото -->
          <div class="makko-left-part">
            <img src="/images/1_1.jpeg" alt="Здание CLT" class="makko-main-image rounded-2xl w-full h-full min-h-[600px] object-cover" />
          </div>

          <!-- Правая часть - контент -->
          <div class="flex flex-col justify-center space-y-8">
            <!-- Верхний текст -->
            <div>
              <p class="text-white text-xl md:text-2xl leading-relaxed">
                Мы выбрали строительство по технологиям CLT, так как этот экологичный материал имеет
                <div class="w-4 h-4 inline-block align-middle mx-1 rounded-full bg-orange-200 blur-sm"></div>
                прочность бетона и бесконечные варианты дизайна.
              </p>
            </div>

            <!-- Заголовок -->
            <div class="relative">
              <h2 class="text-6xl md:text-8xl font-bold text-white">
                МАККО<br/>И CLT
              </h2>
              <!-- Кнопка -->
              <div class="relative">
                <a 
                  href="#" 
                  class="w-32 h-32 rounded-full bg-black border border-white/20 flex flex-col items-center justify-center text-white text-base hover:bg-gray-900 transition-colors px-6 py-4"
                >
                  <svg class="w-6 h-6 transform -rotate-45 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span class="text-left leading-tight">подробнее<br/>об CLT</span>
                </a>
              </div>
            </div>

            <!-- Нижний текст -->
            <div>
              <p class="text-white/70 text-sm leading-relaxed">
                CLT позволяет нам осуществлять строительство домов в местах с высокой сложностью доставки и монтажа. Вечная мерзлота, или палящее солнце юга больше не препятствие для строительства.
              </p>
            </div>

            <!-- Малое фото -->
            <div class="flex justify-end">
              <img src="/images/helicopter.jpg" alt="Вертолёт" class="makko-helicopter-image rounded-xl w-80 h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
