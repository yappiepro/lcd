<template>
  <section class="py-20 bg-[#111]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Левая часть - большое фото -->
          <div class="makko-left-part">
            <img
              src="/images/1_1.jpeg"
              alt="Здание CLT"
              class="makko-main-image rounded-2xl w-full h-[300px] md:h-[400px] lg:h-full lg:min-h-[600px] object-cover"
            />
          </div>

          <!-- Правая часть - контент -->
          <div class="flex flex-col justify-center space-y-6 lg:space-y-8">
            <!-- Верхний текст -->
            <div>
              <p class="text-white text-base md:text-xl lg:text-2xl leading-relaxed">
                Мы выбрали строительство по технологиям CLT, так как этот экологичный материал имеет
                <span
                  class="inline-block w-3 h-3 md:w-4 md:h-4 align-middle mx-1 rounded-full bg-orange-200 blur-sm"
                ></span>
                прочность бетона и бесконечные варианты дизайна.
              </p>
            </div>

            <!-- Заголовок с кнопкой -->
            <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <h2 class="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
                МАККО<br />И CLT
              </h2>
              <!-- Кнопка -->
              <div class="relative flex-shrink-0">
                <a
                  href="#"
                  class="magnetic-btn btn-liquid w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-black flex flex-col items-center justify-center text-white font-medium hover:bg-gray-800 transition-colors px-5 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8"
                >
                  <span class="text-center leading-tight text-xs md:text-sm lg:text-base"
                    >подробнее<br />об CLT ↗</span
                  >
                </a>
              </div>
            </div>

            <!-- Нижний текст -->
            <div>
              <p class="text-white/70 text-xs md:text-sm leading-relaxed">
                CLT позволяет нам осуществлять строительство домов в местах с высокой сложностью
                доставки и монтажа. Вечная мерзлота, или палящее солнце юга больше не препятствие
                для строительства.
              </p>
            </div>

            <!-- Малое фото -->
            <div class="flex justify-end">
              <img
                src="/images/helicopter.jpg"
                alt="Вертолёт"
                class="makko-helicopter-image rounded-xl w-full md:w-80 h-32 md:h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
