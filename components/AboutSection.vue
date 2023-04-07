<template>
    <div style="min-height: 100vh; max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; padding-top: 4rem;">
        
        <!--  -->
        <div>
            <h2>Об инструменте</h2>
            <p style="margin-top: 1rem;">UNIDRUM уникальный стальной Идиофон , объединяет в себе гармоничный  круг с чистым ярким характерным звуком</p>
            <NuxtLink to="/aboutPage">Подробнее</NuxtLink>
        </div>
        
        <!--  -->
        <video :src="'/video/K00A2790.MOV'" type="video/mov" width="640" height="360" preload controls></video>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>