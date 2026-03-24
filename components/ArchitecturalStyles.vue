<template>
  <section class="py-20 bg-[#f5f5f5]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <!-- Заголовок секции -->
        <div class="text-center mb-12 relative">
          <div class="flex items-center justify-center gap-2 md:gap-4">
            <span class="hidden md:block text-6xl md:text-8xl font-light text-gray-900">[</span>
            <div class="text-center">
              <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                СТИЛИ ДЛЯ<br />ЖИЗНИ
              </h2>
              <div class="flex items-center justify-center gap-2 mt-2">
                <div
                  class="w-8 h-8 md:w-16 md:h-16 inline-block align-middle rounded-full bg-orange-300 blur-md"
                ></div>
                <p class="text-gray-400 text-sm md:text-lg">в гармонии</p>
                <p class="text-gray-900 text-sm md:text-lg font-medium">с природой</p>
              </div>
            </div>
            <span class="hidden md:block text-6xl md:text-8xl font-light text-gray-900">]</span>
          </div>
        </div>

        <!-- Контент -->
        <div class="relative pt-8">
          <!-- Центральное изображение дома - абсолютное позиционирование для desktop -->
          <div class="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
            <img
              src="/images/styles-house.jpg"
              alt="Современный дом"
              class="w-[300px] h-[600px] object-cover"
            />
          </div>

          <!-- Изображение для мобильных - сверху -->
          <div class="lg:hidden flex justify-center mb-8">
            <img
              src="/images/styles-house.jpg"
              alt="Современный дом"
              class="w-full max-w-xs h-auto object-cover rounded-2xl"
            />
          </div>

          <!-- Линии и текст -->
          <div class="grid lg:grid-cols-3 gap-4">
            <!-- Левая колонка - названия стилей -->
            <div class="flex flex-col">
              <div
                v-for="(style, index) in styles"
                :key="index"
                class="style-item py-3 md:py-4 border-t border-gray-300 flex items-center"
              >
                <h3 class="text-sm md:text-lg lg:text-xl font-light text-gray-900">
                  <span class="text-xs md:text-sm text-gray-400 mr-2">{{ style.number }}</span>
                  {{ style.name }}
                </h3>
              </div>
            </div>

            <!-- Центральная пустая колонка для desktop -->
            <div class="hidden lg:block"></div>

            <!-- Правая колонка - описания -->
            <div class="flex flex-col">
              <div
                v-for="(style, index) in styles"
                :key="index"
                class="style-item py-3 md:py-4 border-t border-gray-300 flex items-center justify-end"
              >
                <p
                  class="text-gray-500 text-xs md:text-sm leading-relaxed text-right w-full lg:w-[80%]"
                >
                  {{ style.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Нижняя граница -->
          <div class="border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const styles = [
  {
    number: '01',
    name: 'ХАЙ-ТЕК (HIGH-TECH)',
    description:
      'Индустриальный стиль, использующий стекло, металл, бетон. Характерны панорамное остекление, плоская кровля, строгие геометрические или бионические формы.'
  },
  {
    number: '02',
    name: 'МИНИМАЛИЗМ',
    description:
      'Акцент на функциональность, простоту форм, открытые пространства и отсутствие лишнего декора.'
  },
  {
    number: '03',
    name: 'СКАНДИНАВСКИЙ',
    description:
      'Экологичность, натуральные материалы (дерево), светлые тона, функциональность и большие окна.'
  },
  {
    number: '04',
    name: 'ШАЛЕ (CHALLET)',
    description:
      'Альпийский стиль с массивной крышей, каменным цоколем и деревянным верхним этажом.'
  },
  {
    number: '05',
    name: 'СРЕДИЗЕМНОМОРСКИЙ',
    description:
      'Кикладский (белые дома) или итальянский (византийский) варианты, ориентированные на открытые террасы и свет.'
  },
  {
    number: '06',
    name: 'СОВРЕМЕННЫЙ КОНСТРУКТИВИЗМ',
    description:
      'Рациональный подход, где каждый метр функционален, часто используется монолитная технология.'
  }
]
</script>

<style scoped>
.style-item {
  min-height: 100px;
  align-items: flex-start;
}
</style>
