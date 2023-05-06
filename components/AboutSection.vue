<template>
    <div style="background-color: var(--light);">

        <div style="max-width:1200px; margin: 0 auto; min-height: 100vh; display: flex; justify-content: space-between; align-items: center;">
            
            <!--  -->
            <div style="">
                <h2>Об инструменте</h2>
                <p style="margin-top: 1rem;">UNIDRUM уникальный стальной Идиофон , объединяет в себе гармоничный  круг с чистым ярким характерным звуком</p>
    
                <div style="margin-top: 2rem;">
                    <NuxtLink to="/aboutPage">Подробнее</NuxtLink>
                </div>
            </div>
            
            <!--  -->
            <video :src="'/video/K00A2790.MOV'" type="video/mov" width="640" height="360" preload controls></video>
    
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    a {
        color: var(--dark)
    }

    a:hover {
        text-decoration: underline;
    }

    a:visited {
        color: var(--dark);
    }
</style>