<template>
    <div>
        <Head>
            <Title>Unidrum by Gleb Rudakov</Title>
            <Meta name="Музыкальный инструмент unidrum" content="Создаю музыкальные инструменты"/>
        </Head>
        INDEX PAGE
        <!--  -->
        <NuxtLink to="/about">Об инструменте</NuxtLink>
    </div>
    {{ products }}
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