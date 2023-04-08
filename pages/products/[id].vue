<template>
  <NuxtLink to="/">Назад</NuxtLink>
    <p>{{ $route.params}}</p>
    <!-- <div>123 {{ route.params.id }}</div> -->
    <p>{{ product }}</p>
  </template>

<script setup>
    import { useProductsStore } from '../../stores/products'
    const route = useRoute()

    const productsStore = useProductsStore()

    const product = productsStore.products.find((item) => item.route === route.params.id)
</script>

<style>

</style>