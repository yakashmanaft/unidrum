<template>
  <!--  -->
  <div style="position: relative;">
    <NuxtLink :to="{ path: '/', hash: '#products' }">Назад</NuxtLink>
      <p>{{ $route.params}}</p>
      <!-- <div>123 {{ route.params.id }}</div> -->
      <p>{{ product }}</p>

      <!--  -->
      <div style="display: flex; margin-top: 5rem; align-items: center;">
        <input type="checkbox">
        <div style="width: 2rem; height: 2rem; background-color: var(--dark); border-radius: 100%"></div>
        <p>Защитная сумка</p>
        <p>2 500 <span v-if="currency === 'rub'">₽</span></p>
      </div>
      <div style="display: flex; margin-top: 1rem; align-items: center;">
        <input type="checkbox">
        <div style="width: 2rem; height: 2rem; background-color: var(--dark); border-radius: 100%"></div>
        <p>Палочки для игры</p>
        <p>2 500 <span v-if="currency === 'rub'">₽</span></p>
      </div>
  </div>

  <!--  -->
  <div style="position: absolute; bottom: 2rem; right: 2rem;">
    <div>
      Обшая сумма: 
      <p style="font-weight: bold">37 500 <span v-if="currency === 'rub'">₽</span></p>
    </div>
  </div>
</template>

<script setup>
    import { useProductsStore } from '../../stores/products'
    const route = useRoute()

    const productsStore = useProductsStore()

    const product = productsStore.products.find((item) => item.route === route.params.id)

    const currency = computed(() => {
        return productsStore.currency
    })

    useServerSeoMeta({
      title: 'Unidrum by Gleb Rudakov',
      ogTitle: `${product.model}`,
      description: 'Музыкальный инструмент unidrum',
      ogDescription: 'Музыкальный инструмент unidrum, Создаю музыкальные инструменты',
      ogImage: 'https://example.com/image.png',
      twitterCard: 'summary_large_image',
    })
    useHead({
        htmlAttrs: {
            lang: 'en',
            // charset: 'utf-8',
            // style: 'font-size: 13px'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // { rel: 'sitemap', type: 'application/xml', href: 'https://localhost/sitemap.xml' }
        ],
    })
</script>

<style>

</style>