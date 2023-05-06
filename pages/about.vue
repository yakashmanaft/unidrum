<template>
    <header>
        <!-- ABOUT PAGE -->
        <!--  -->
        <!-- <NuxtLink :to="{ path: '/', hash: '#about-the-tool' }">Назад</NuxtLink> -->

        <!--  -->

        <Navigation/>
    </header>

    <body style="padding-top: 10rem;">
        <ul>
            <li>История</li>
            <li>Исследование</li>
            <li>Ручная работа</li>
        </ul>
        <br style="margin-top: 5rem">


        <!-- Квинтовый круг мажорных тональностей: чёткая схема для тех, кому приятна чёткость. Источник: https://music-education.ru/kvintovy-krug-mazhornyh-tonalnostej/ -->
        

        <!-- controls -->
        <video :src="'/video/video_2023-05-04_19-20-39.mp4'" type="video/mov" width="360" height="640" preload autoplay muted loop></video>

        <!-- Founder -->
        <div style="display: flex; justify-content: center; align-items: center; background-color: blue;">
            <img src="/img/founder.jpg" alt="Ханг идиофон UNIDRUM-1.3-Minor" style="height: 100%; object-fit: cover;">
        </div>
    </body>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style scoped>

</style>