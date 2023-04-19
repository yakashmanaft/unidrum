<template>
    <div style="min-height: 100vh">
        <div v-for="(product, index) in products" :key="index">
            
            {{ product }}
<<<<<<< HEAD
            <NuxtLink :to="{ name: '_product', params: product }">Подробнее</NuxtLink>
            <!-- <NuxtLink :to="{ path: `/products/${product.uid}`, params: {product}}">Подробнее</NuxtLink> -->
            <!-- <div @click="$router.push(`/products/${product.uid}`)">Подробнее</div> -->
=======
            <!-- <NuxtLink :to="{ name: '_product', params: product }">Подробнее</NuxtLink> -->
            <NuxtLink :to="{ path: `/products/${product.route}`}">Подробнее</NuxtLink>
            <!-- <div @click="$router.push(`/products/${product.route}`)">Подробнее</div> -->
>>>>>>> 3dd5a0a71321da42e47a55ea114a936f3ad01490
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