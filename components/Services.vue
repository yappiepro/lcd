<template>
  <section id="services" class="py-20 bg-[#111]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <div class="grid lg:grid-cols-4 gap-8">
          <!-- Левая часть - статистика -->
          <div class="space-y-8">
            <h2 class="text-reveal-target text-3xl font-bold text-white">Реализуем из:</h2>

            <!-- Прогресс бар 1 -->
            <div class="animate-on-scroll delay-100 space-y-2">
              <div class="flex justify-between text-white">
                <span>CLT-панелей</span>
                <span class="counter-animate" data-end="60">0</span><span>%</span>
              </div>
              <div class="h-1 bg-gray-700 rounded-full overflow-hidden progress-glow">
                <div class="h-full bg-white w-[60%]"></div>
              </div>
            </div>

            <!-- Прогресс бар 2 -->
            <div class="animate-on-scroll delay-300 space-y-2">
              <div class="flex justify-between text-white">
                <span>CLT и других материалов</span>
                <span class="counter-animate" data-end="40">0</span><span>%</span>
              </div>
              <div class="h-1 bg-gray-700 rounded-full overflow-hidden progress-glow">
                <div class="h-full bg-white w-[40%]"></div>
              </div>
            </div>
          </div>

          <!-- Карточки -->
          <div class="lg:col-span-3 grid md:grid-cols-3 gap-6 stagger-grid">
            <!-- Карточка 1 -->
            <div
              class="tilt-card scale-in bg-[#1a1a1a] rounded-xl p-6 transition-transform duration-300"
            >
              <div class="text-white text-lg mb-4 pb-4 border-b border-gray-700">
                Проектирование
              </div>
              <div class="flex items-baseline space-x-2">
                <span class="text-7xl font-bold text-white counter-animate" data-end="5">0</span>
                <span class="text-xl text-white">недель</span>
              </div>
              <div class="text-right text-gray-500 text-sm mt-4">[01</div>
            </div>

            <!-- Карточка 2 -->
            <div
              class="tilt-card scale-in delay-200 bg-[#1a1a1a] rounded-xl p-6 transition-transform duration-300"
            >
              <div class="text-white text-lg mb-4 pb-4 border-b border-gray-700">
                Монтаж коробки дома
              </div>
              <div class="flex items-baseline space-x-2">
                <span class="text-7xl font-bold text-white counter-animate" data-end="30">0</span>
                <span class="text-xl text-white">дней</span>
              </div>
              <div class="text-right text-gray-500 text-sm mt-4">[02</div>
            </div>

            <!-- Карточка 3 -->
            <div
              class="tilt-card scale-in delay-400 bg-[#1a1a1a] rounded-xl p-6 transition-transform duration-300"
            >
              <div class="text-white text-lg mb-4 pb-4 border-b border-gray-700">Под ключ</div>
              <div class="flex items-baseline space-x-2">
                <span class="text-7xl font-bold text-white counter-animate" data-end="180">0</span>
                <span class="text-xl text-white">дней</span>
              </div>
              <div class="text-right text-gray-500 text-sm mt-4">[03</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
