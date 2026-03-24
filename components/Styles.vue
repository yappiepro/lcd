<template>
  <section id="styles" class="py-20 bg-[#111]">
    <div class="w-full px-8 md:px-12 lg:px-16">
      <div class="max-w-[1600px] mx-auto">
        <!-- Заголовок секции -->
        <div class="text-center mb-16 relative">
          <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            ВАШ
            <div
              class="w-8 h-8 inline-block align-middle mx-2 rounded-full bg-orange-200 blur-sm"
            ></div>
            ЛИЧНЫЙ<br />КОНТРОЛЕР
          </h2>
        </div>

        <!-- Контент -->
        <div class="grid md:grid-cols-3 gap-8 items-center">
          <!-- Левый текст -->
          <div class="text-center md:text-right">
            <p class="text-white/80 text-lg leading-relaxed">
              Дом, созданный с самого начала – архитектурное проектирование<br />
              с известной студией дизайна ЗРОБИМ
            </p>
          </div>

          <!-- Фото -->
          <div class="flex justify-center">
            <div class="space-y-4">
              <img
                src="/images/man.png"
                alt="Олег Макаревич"
                class="rounded-lg w-48 object-cover"
              />
              <p class="text-white text-center">Олег Макаревич</p>
            </div>
          </div>

          <!-- Правый текст -->
          <div class="text-center md:text-left">
            <p class="text-white/80 text-lg leading-relaxed">
              Мы разработаем дизайн-проект с учетом ваших пожеланий, особенностей<br />
              проекта под ключ с авторским контролем
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
