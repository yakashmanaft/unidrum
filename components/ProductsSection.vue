<template>
    <div style="min-height: 100vh">
        <div v-for="(product, index) in products" :key="index">
            {{ product }}
            <!-- <NuxtLink :to="{ name: '_product', params: product }">Подробнее</NuxtLink> -->
            <NuxtLink :to="{ path: `/products/${product.uid}`, params: {product}}">Подробнее</NuxtLink>
            <!-- <div @click="$router.push(`/products/${product.uid}`)">Подробнее</div> -->
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