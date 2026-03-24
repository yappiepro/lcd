<template>
  <section class="py-20 bg-[#111]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Левая часть - текст -->
          <div class="space-y-8">
            <h2 class="text-5xl md:text-5xl font-bold text-white">
              Взаимодействие с Нами как начало Пути
              <div
                class="w-6 h-6 inline-block align-middle mx-2 rounded-full bg-orange-200 blur-sm"
              ></div>
            </h2>

            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-white">
                {{ steps[activeStep].title }}
              </h3>
              <p class="text-gray-400 leading-relaxed">
                {{ steps[activeStep].description }}
              </p>
            </div>

            <!-- Навигация -->
            <div class="flex space-x-4">
              <button
                class="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                @click="prevStep"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                class="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                @click="nextStep"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Правая часть - фото -->
          <div>
            <img
              :src="steps[activeStep].image"
              alt="Этап"
              class="rounded-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <!-- Timeline -->
        <div class="mt-20">
          <div class="relative">
            <!-- Линия -->
            <div
              class="absolute top-[calc(50%-18px)] left-0 right-0 h-[2px] bg-gradient-to-r from-white via-gray-500 to-black transform -translate-y-1/2"
            ></div>

            <!-- Точки и подписи -->
            <div class="grid grid-cols-4 gap-4 relative z-10">
              <div
                v-for="(step, index) in steps"
                :key="index"
                class="text-center cursor-pointer"
                @click="activeStep = index"
              >
                <div class="w-4 h-4 rounded-full mx-auto mb-4 relative">
                  <div
                    :class="[
                      'absolute inset-0 rounded-full transition-transform',
                      activeStep === index ? 'bg-white scale-150' : 'bg-gray-700'
                    ]"
                  ></div>
                </div>
                <p
                  :class="[
                    'text-sm',
                    activeStep === index ? 'text-white font-bold' : 'text-gray-500'
                  ]"
                >
                  {{ step.stepName }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeStep = ref(0)
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const steps = [
  {
    stepName: 'Договор с клиентом',
    title: 'Договор: фундамент честных отношений',
    description:
      'Заключение договора становится тем самым фундаментом, на котором первоначальные идеи и эскизы обретают форму выверенного алгоритма действий. На этом этапе мы переводим архитектурные замыслы на язык точных расчетов, фиксируя финальную стоимость и график реализации проекта как незыблемые обязательства.',
    image: `${baseURL}images/2_2.webp`
  },
  {
    stepName: 'Фото отчеты о ходе выполнения работ',
    title: 'Прозрачность процесса',
    description:
      'Мы регулярно предоставляем фотоотчеты о ходе строительства. Вы всегда в курсе того, что происходит на вашем объекте, даже если находитесь за тысячи километров.',
    image: `${baseURL}images/1_1.webp`
  },
  {
    stepName: 'Гарантия качества',
    title: 'Надёжность и гарантия',
    description:
      'Мы уверены в качестве наших работ и предоставляем полную гарантию на все выполненные работы и использованные материалы.',
    image: `${baseURL}images/feater1.webp`
  },
  {
    stepName: 'Всегда на связи',
    title: 'Поддержка 24/7',
    description:
      'Наши специалисты всегда на связи и готовы ответить на любые вопросы. Мы сопровождаем проект от идеи до сдачи и продолжаем поддерживать клиентов после завершения работ.',
    image: `${baseURL}images/feater2.webp`
  }
]

const nextStep = () => {
  activeStep.value = (activeStep.value + 1) % steps.length
}

const prevStep = () => {
  activeStep.value = (activeStep.value - 1 + steps.length) % steps.length
}
</script>
