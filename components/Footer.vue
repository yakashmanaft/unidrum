<template>
    <footer style="display: flex; justify-content: center; align-items: center; height: 100px; background-color: var(--light);">
        <NuxtLink to="/" class="mr-4">Контакты</NuxtLink>
        <NuxtLink to="/policy" class="mr-4">Политика и соглашения</NuxtLink>
        <!-- <NuxtLink to="/" class="mr-4">Политика конфиденциальности</NuxtLink> -->
        <!-- <NuxtLink to="/" class="mr-4">Пользовательское соглашение</NuxtLink> -->
        <NuxtLink to="/sitemap">Карта сайта</NuxtLink>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    a {
        color: var(--dark);
        margin-right: 2rem;
    }

    a:hover {
        text-decoration: underline;
    }
</style>