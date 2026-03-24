<template>
  <section id="pricing" class="py-20 bg-gray-50">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <!-- Заголовок -->
        <div class="text-center mb-16">
          <div class="flex items-center justify-center">
            <span class="text-[80px] leading-none text-gray-400">[</span>
            <h2 class="text-5xl md:text-7xl font-bold text-gray-900 px-8 text-center">
              СТОИМОСТЬ И<br />УСЛУГИ
            </h2>
            <span class="text-[80px] leading-none text-gray-400">]</span>
          </div>
          <div class="mt-4 text-xl flex items-center justify-center">
            <span class="text-gray-900">логично и</span>
            <div class="w-8 h-8 mx-2 rounded-full bg-orange-200 blur-sm"></div>
            <span class="text-gray-400">обосновано</span>
          </div>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          <!-- Левая колонка - фильтры -->
          <div class="space-y-4">
            <button
              v-for="(filter, index) in filters"
              :key="index"
              :class="[
                'block text-left text-lg py-2 transition-colors',
                activeFilter === index
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-400 hover:text-gray-600'
              ]"
              @click="activeFilter = index"
            >
              {{ filter }}
            </button>
          </div>

          <!-- Сетка услуг -->
          <div class="lg:col-span-3">
            <!-- Развёрнутая услуга -->
            <div class="mb-8 pb-8 border-b border-gray-300">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900">Архитектурное проектирование</h3>
                <span class="text-lg text-gray-400">↗</span>
              </div>
              <div class="space-y-2 text-sm text-gray-600">
                <p>Визуальный осмотр инфраструктуры и расположения площадки</p>
                <p>Экспресс-анализ возможного концептуального использования</p>
                <p>Составление технического задания на необходимые работы</p>
                <ul class="list-disc list-inside mt-4 space-y-1">
                  <li>Индивидуальный расчет стоимости</li>
                  <li>От 50 000 до 100 000 рублей</li>
                  <li>1 рабочий день</li>
                </ul>
              </div>
            </div>

            <!-- Остальные услуги - сетка 3 колонки с раскрытием -->
            <div class="grid md:grid-cols-3 gap-6">
              <div
                v-for="(service, index) in services"
                :key="index"
                class="pb-4 border-b border-gray-300 cursor-pointer"
                @click="toggleService(index)"
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-base font-bold text-gray-900">{{ service.name }}</h3>
                  <svg
                    :class="[
                      'w-4 h-4 text-gray-400 transition-transform',
                      openService === index ? 'rotate-180' : ''
                    ]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div v-if="openService === index" class="mt-4 text-xs text-gray-600 space-y-2">
                  <p v-for="(item, i) in service.description" :key="i">{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeFilter = ref(0)
const openService = ref(null)

const filters = ['ВСЕ УСЛУГИ', 'ЕСТЬ ИДЕЯ', 'ЕСТЬ ПРОЕКТ', 'ПРОЕКТ ЗАПУЩЕН']

const services = [
  {
    name: 'Геологические и геодезические',
    description: [
      'Инженерно-геологические изыскания участка',
      'Топографическая съемка местности',
      'Определение характеристик грунтов',
      'Рекомендации по типу фундамента',
      'Срок выполнения: от 5 рабочих дней'
    ]
  },
  {
    name: 'Изыскания инженерное',
    description: [
      'Комплексное инженерное обследование',
      'Анализ коммуникаций и инфраструктуры',
      'Оценка условий подключения',
      'Технический отчет с рекомендациями',
      'Срок выполнения: от 7 рабочих дней'
    ]
  },
  {
    name: 'Проектирование и поставка',
    description: [
      'Разработка проектной документации',
      'Подбор материалов и комплектующих',
      'Организация доставки на объект',
      'Контроль качества поставок',
      'Индивидуальный расчет стоимости'
    ]
  },
  {
    name: 'Домокомплект дизайн-проект интерьера',
    description: [
      'Разработка дизайн-проекта интерьера',
      'Подбор мебели и отделочных материалов',
      '3D-визуализация помещений',
      'Рабочие чертежи для строителей',
      'Авторский надзор за реализацией'
    ]
  },
  {
    name: 'Выездная консультация',
    description: [
      'Выезд специалиста на объект',
      'Осмотр участка и инфраструктуры',
      'Консультация по технологиям строительства',
      'Предварительная оценка стоимости',
      'Срок: 1 рабочий день'
    ]
  },
  {
    name: 'Ландшафтный дизайн',
    description: [
      'Проектирование ландшафта участка',
      'Подбор растений и материалов',
      'Планирование дорожек и зон отдыха',
      'Системы автополива и освещения',
      'Реализация под ключ'
    ]
  },
  {
    name: 'Монтаж деревянных конструкций',
    description: [
      'Профессиональная сборка CLT панелей',
      'Монтаж несущих конструкций',
      'Контроль геометрии и уровней',
      'Соблюдение технологии соединений',
      'Срок монтажа: от 30 дней'
    ]
  },
  {
    name: 'Аудит проекта заказчика',
    description: [
      'Проверка существующей документации',
      'Оценка соответствия нормам',
      'Выявление ошибок и недочетов',
      'Рекомендации по оптимизации',
      'Техническое заключение'
    ]
  },
  {
    name: 'Авторский надзор по строительству',
    description: [
      'Контроль соответствия проекту',
      'Регулярные выезды на объект',
      'Проверка качества работ',
      'Ведение журнала авторского надзора',
      'Консультации прораба и бригады'
    ]
  },
  {
    name: 'Проектирование инженерных систем',
    description: [
      'Разработка схем электроснабжения',
      'Проект водоснабжения и канализации',
      'Системы отопления и вентиляции',
      'Слаботочные системы и автоматизация',
      'Согласование в надзорных органах'
    ]
  },
  {
    name: 'Зонирование территории',
    description: [
      'Планирование функциональных зон',
      'Размещение построек на участке',
      'Учет рельефа и особенностей местности',
      'Оптимальное использование пространства',
      'Схема зонирования в масштабе'
    ]
  },
  {
    name: 'Комплектация инженерными системами',
    description: [
      'Подбор оборудования и материалов',
      'Поставка инженерных систем',
      'Комплектация согласно проекту',
      'Гарантийное обслуживание',
      'Техническая поддержка'
    ]
  },
  {
    name: 'Поставка системы вентиляции',
    description: [
      'Проектирование вентиляционных систем',
      'Подбор оборудования',
      'Поставка и монтаж',
      'Пуско-наладочные работы',
      'Сервисное обслуживание'
    ]
  },
  {
    name: 'Монтаж инженерных систем',
    description: [
      'Монтаж электрики и слаботочки',
      'Устройство водоснабжения и канализации',
      'Установка систем отопления',
      'Монтаж вентиляции и кондиционирования',
      'Сдача систем в эксплуатацию'
    ]
  }
]

const toggleService = index => {
  openService.value = openService.value === index ? null : index
}
</script>
