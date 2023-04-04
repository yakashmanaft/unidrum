<template>
    <div style="min-height: 100vh">
        {{ products }}
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