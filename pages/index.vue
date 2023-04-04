<template>
    <div style="min-height: 100vh; background-color: #eaeaf6;">
        <!-- <Head>
            <Title>Unidrum by Gleb Rudakov</Title>
            <Meta name="Музыкальный инструмент unidrum" content="Создаю музыкальные инструменты"/>
        </Head> -->
        
        <!-- ==================================== БАННЕР ЗАГОЛОВОК ==================================== -->
        <h1>Юнидрам</h1>
        <h2>Гармоничный круг с ярким голосом</h2>
        <p>Глеба Рудакова</p>
        <header>
        </header>
        <!--  -->
        <NuxtLink to="/about">Об инструменте</NuxtLink>
    </div>
    {{ products }}
</template>

<script setup>
    import { useProductsStore } from '../stores/products'

    useServerSeoMeta({
        title: 'Unidrum by Gleb Rudakov',
        ogTitle: 'Unidrum by Gleb Rudakov',
        description: 'Музыкальный инструмент unidrum',
        ogDescription: 'Музыкальный инструмент unidrum, Создаю музыкальные инструменты',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
    useHead({
        htmlAttrs: {
            lang: 'en',
            charset: 'utf-8',
            // style: 'font-size: 13px'
        }
    })

    const productsStore = useProductsStore()

    const products = computed(() => {
        return productsStore.products
    })
    

</script>

<style scoped>

</style>