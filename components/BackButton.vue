<template>
  <NuxtLink v-if="$route.name != 'lk' && $route.name != 'create' && $route.name != 'sitemap' && $route.name != 'policy'" :to="backPath($route.name)" style="display: flex; align-items: center; justify-content: flex-end; border-radius: 1.5rem;  backdrop-filter: blur(2px);" class="back-btn">

      <!-- Иконка -->
      <!-- <div style="width: 48px; height: 48px; background-color: gray;border-radius: 100%; display: flex; justify-content: center; align-items: center;">
          <Icon name="material-symbols:arrow-back-ios-new-rounded" style="color: #fff;"/>
      </div> -->

      <div>Назад</div>
  </NuxtLink>
  
  <NuxtLink v-if="$route.name == 'create'" to="/">
    <div>Отменить</div>
  </NuxtLink>

  <div v-else>
    <NuxtLink v-if="$route.name != 'products-id' && $route.name != 'about'" to="/">
      <div>На главную</div>
    </NuxtLink>
  </div>
  
</template>

<script setup>

  const backPath = (routeName) => {
    if(routeName == 'products-id') {
      return {
        path: '/',
        hash: '#products'
      }
    } else if (routeName == 'about') {
      return {
        path: '/',
        hash: '#about-the-tool'
      }
    } else {
      return '/'
    }
  }
</script>

<style scoped>
  .back-btn:visited {
    color: var(--dark)
  }
  .back-btn:hover {
    text-decoration: underline;
  }

  a:visited {
    color: var(--dark)
  }

  a:hover {
    text-decoration: underline;
  }
</style>