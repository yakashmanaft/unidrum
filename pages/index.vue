<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <!-- <Tutorial/> -->
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1><span style="font-weight: bold; font-size: 2rem">Unidrum</span> by Gleb Rudakov</h1>
      <h2>Уникальный стальной идиофон в виде гармоничного круга с чистым ярким голосом</h2>

      <!-- Навигация -->
      <div class="mt-10">
        <NuxtLink to="/about">Об инструменте</NuxtLink> |
        <NuxtLink to="/products">Выбрать модель</NuxtLink>
        <!-- <NuxtLink to="/">Забота за инструментом</NuxtLink> -->
      </div>
    </div>
    <!-- <NuxtLink to="/">На главную</NuxtLink> -->

    <!--  -->
    <NuxtLink to="/lk" style="position: absolute; top: 1rem; right: 1rem; width: 32px; height: 32px; background-color: gray"></NuxtLink>

    <!--  -->
    <div style="position: absolute; bottom: 1rem; font-size: 12px;">
      <NuxtLink to="/">Контакты</NuxtLink> |
      <NuxtLink to="/">Политика конфиденциальности</NuxtLink> |
      <NuxtLink to="/">Пользвательское соглашение</NuxtLink> |
      <NuxtLink to="/">Карта сайта</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Unidrum by Gleb Rudakov - Главная',
  }
}
</script>

<style scoped>
  /* body {
    background-color: black;
  }
  .wrapper {
    margin: 0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @media screen and (max-width: 480px ) {
    .wrapper {
      background-color: white;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .wrapper {
      background-color: blue;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .wrapper {
      background-color: green;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    .wrapper {
      background-color: red;
    }
  }
  @media screen and (min-width: 1201px) {
    .wrapper {
      background-color: gray;
    }
  } */
</style>
