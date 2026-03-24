<template>
  <section id="news" class="py-20 bg-white">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-12">
          <div class="flex items-center justify-center">
            <div class="w-8 h-8 rounded-full bg-orange-200 blur-sm mr-4"></div>
            <h2 class="text-5xl md:text-5xl font-bold text-gray-900">
              Публикации, Новости и События
            </h2>
          </div>
        </div>

        <!-- Контент - 4 колонки -->
        <div class="grid lg:grid-cols-4 gap-8">
          <!-- 1 колонка - Меню -->
          <div class="space-y-4">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              :class="[
                'block text-left text-lg transition-colors',
                activeTab === index
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-300 hover:text-gray-500'
              ]"
              @click="activeTab = index"
            >
              {{ tab }}
            </button>
          </div>

          <!-- 2 колонка - Фото с подписью -->
          <div class="space-y-4">
            <div class="aspect-square overflow-hidden rounded-2xl">
              <img
                :src="newsItems[activeTab].image"
                alt="Проект"
                class="w-full h-full object-cover"
              />
            </div>
            <p class="text-lg font-bold text-gray-900">{{ newsItems[activeTab].title }}</p>
          </div>

          <!-- 3 колонка - Текст описания -->
          <div>
            <p class="text-gray-400 text-lg leading-relaxed">
              хроника наших достижений и актуальная информация о ходе работ. мы транслируем прогресс
              на строительных площадках.
            </p>
          </div>

          <!-- 4 колонка - Текст справа -->
          <div class="flex flex-col justify-end items-end pb-6">
            <p class="text-gray-300 text-sm leading-relaxed text-right mb-4 max-w-[50%] ml-auto">
              коротко о главном: от текущих отчетов до стратегических планов на будущее
            </p>
            <a href="#" class="text-xl font-bold text-gray-900 hover:text-gray-700 underline">
              СМОТРЕТЬ ВСЕ
            </a>
          </div>
        </div>

        <!-- Нижний ряд: 4 фото -->
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(item, index) in bottomItems" :key="index" class="space-y-4">
            <template v-if="item.image">
              <div class="aspect-square overflow-hidden rounded-2xl">
                <img :src="item.image" alt="Проект" class="w-full h-full object-cover" />
              </div>
              <p class="text-lg font-bold text-gray-900">{{ item.title }}</p>
            </template>
            <template v-else>
              <div class="aspect-square rounded-2xl"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref(0)
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
const tabs = ['Публикации', 'Новости', 'События']

const newsItems = [
  { title: 'дом с панорамным остеклением', image: `${baseURL}images/feater1.jpg`, name: 'item1' },
  { title: 'проект коттеджного посёлка', image: `${baseURL}images/feater2.jpeg`, name: 'item2' },
  { title: 'загородный дом в лесу', image: `${baseURL}images/feater3.jpg`, name: 'item3' },
  { title: 'современный деревянный дом', image: `${baseURL}images/1_1.jpeg`, name: 'item4' }
]

const bottomItems = [
  { title: 'проект коттеджного посёлка', image: `${baseURL}images/feater2.jpeg`, name: 'bottom1' },
  { title: '', image: null, name: 'bottom2' },
  { title: 'загородный дом в лесу', image: `${baseURL}images/feater3.jpg`, name: 'bottom3' },
  { title: 'современный деревянный дом', image: `${baseURL}images/1_1.jpeg`, name: 'bottom4' }
]
</script>
