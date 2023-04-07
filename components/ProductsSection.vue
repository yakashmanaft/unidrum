<template>
    <div style="min-height: 100vh">
        <div v-for="(product, index) in products" :key="index">
            {{ product }}
            <!-- <NuxtLink :to="{ name: '_slug', params: {_id: product.uid} }">подробнее</NuxtLink> -->
        </div>
    </div>
</template>

<script setup>
    import { useProductsStore } from '../stores/products'

    const productsStore = useProductsStore()

    const products = computed(() => {
        return productsStore.products
    })
</script>

<style scoped>

</style>