<template>
    <header>
        ABOUT PAGE
        <!--  -->
        <NuxtLink :to="{ path: '/', hash: '#about-the-tool' }">Назад</NuxtLink>
    </header>

    <div>
        123

        <!-- controls -->
        <video :src="'/video/video_2023-05-04_19-20-39.mp4'" type="video/mov" width="360" height="640" preload autoplay muted loop></video>

        <!-- Founder -->
        <div style="display: flex; justify-content: center; align-items: center; background-color: blue;">
            <img src="/img/founder.jpg" alt="Ханг идиофон UNIDRUM-1.3-Minor" style="height: 100%; object-fit: cover;">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'aboutPage'
    }
</script>

<style scoped>

</style>