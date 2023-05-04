<template>
    <div style="min-height: 100vh; background-color: var(--light)">
        <div v-for="(product, index) in products" :key="index">
            
            {{ product }}

            <!-- Изображение товара -->
            <div style="width: 300px; height: 300px; display: flex; justify-content: center; align-items: center;">
                <img src="/img/UNIDRUM-1.3-Minor.jpg" alt="Ханг идиофон UNIDRUM-1.3-Minor" style="height: 100%; object-fit: cover;">
            </div>
            <!-- <NuxtLink :to="{ name: '_product', params: product }">Подробнее</NuxtLink> -->
            <NuxtLink :to="{ path: `/products/${product.route}`}">Подробнее</NuxtLink>
            <!-- <div @click="$router.push(`/products/${product.route}`)">Подробнее</div> -->
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