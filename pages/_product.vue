<template>
    <!-- <h1>{{ product }}</h1> -->
    <div>
      <NuxtLink to="/">На главную</NuxtLink>
      <div>123 {{ route.params.id }}</div>
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