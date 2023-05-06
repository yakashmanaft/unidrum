<template>
    <!-- <h1>{{ product }}</h1> -->
    <div style="position: relative;">
      <NuxtLink :to="{ path: '/', hash: '#products' }">На главную</NuxtLink>
      <div>{{ route.params.id }}</div>
    </div>

  </template>

<script setup>
const route = useRoute()
// console.log(route.params.id)

  // export default {

  // }
</script>

<style>

</style>