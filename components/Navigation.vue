<template>
  <div
    style="
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999999;
      display: flex;
      align-items: center;
      /* backdrop-filter: blur(2px); */
      width: 100%;
      padding: 1rem 2rem;
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.1);
    "
    :style="
      $route.name == 'index'
        ? 'background-color: none; box-shadow: none;'
        : 'background-color: rgba(255, 255, 255, 1);'
    "
  >
    <div style="display: flex; align-items: center;">
      <!-- Кнопка меню личного кабинета -->
      <LkButton />

      <!--  -->
      <div v-if="$route.name != 'index'" style="width: 1px; height: 1.5rem; margin: 0 2rem; background-color: black;"></div>

      <!-- Кнопка назад -->
      <BackButton v-if="$route.name != 'index'" />
    </div>

    <!--     
    <div v-if="$route.name == 'products-id' || $route.name == 'about'">
      <NuxtLink :to="{ path: '/', hash: '#products' }">Назад</NuxtLink>
    </div>
    <div v-if="$route.name != 'index' && ($route.name == 'products-id' || $route.name == 'about' || $route.name == 'lk')" style="margin-left: 1rem;">
      <NuxtLink :to="{ path: '/' }">На главную</NuxtLink>
    </div> -->
  </div>
</template>

<script setup></script>
