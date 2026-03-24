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
                <span class="inline-block w-4 h-4 align-middle mx-1 rounded-full bg-orange-200 blur-sm"></span>
                прочность бетона и бесконечные варианты дизайна.
              </p>
            </div>

            <!-- Заголовок с кнопкой -->
            <div class="flex items-center gap-8">
              <h2 class="text-6xl md:text-8xl font-bold text-white">
                МАККО<br/>И CLT
              </h2>
              <!-- Кнопка -->
              <div class="relative flex-shrink-0">
                <a
                  href="#"
                  class="magnetic-btn btn-liquid w-32 h-32 md:w-40 md:h-40 rounded-full bg-black flex flex-col items-start justify-center text-white font-medium hover:bg-gray-800 transition-colors pl-8 md:pl-10 pr-6 md:pr-8 py-6 md:py-8"
                >
                  <span class="text-left leading-tight text-sm md:text-lg">подробнее<br/>об CLT ↗</span>
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
