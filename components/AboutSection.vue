<template>
    <div style="background-color: var(--light); min-height: 100vh; margin: 0 auto; display: flex; align-items: center;">

        <div style="max-width:1200px; margin: 0 auto;">
            
            <div style=" display: flex; justify-content: space-between; align-items: center;">
                
                <!--  -->
                <div>
                    <h2>Об инструменте</h2>
                    <p style="margin-top: 1rem;">UNIDRUM уникальный стальной Идиофон , объединяет в себе гармоничный  круг с чистым ярким характерным звуком</p>
        
                    <div style="margin-top: 2rem;">
                        <NuxtLink to="/aboutPage">Подробнее</NuxtLink>
                    </div>
                </div>
                
                <!--  -->
                <video :src="'/video/K00A2790.MOV'" type="video/mov" width="640" height="360" preload controls></video>
        
            </div>
    
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 7rem; max-width:1200px;">
    
                <NuxtLink class="history_steps" to="/aboutPage">
                    <div class="step_line"></div>
                    <div>
                        <h2 style="font-size: 1.5rem;">Не поиск звука</h2>
                    <p>Как я искал и возможность выбора нот</p>
                    </div>
                </NuxtLink>
    
                <NuxtLink class="history_steps" to="/aboutPage">
                    <div class="step_line"></div>
                    <div>
                        <h2 style="font-size: 1.5rem;">Исследование</h2>
                    <p>Поиск чистого и уникального звучания</p>
                    </div>
                </NuxtLink>
    
                <NuxtLink class="history_steps" to="/aboutPage">
                    <div class="step_line"></div>
                    <div>
                        <h2 style="font-size: 1.5rem;">Ручная работа</h2>
                    <p>В начале была тишина. Белый шум...</p>
                    </div>
                </NuxtLink>
            </div>

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

    .history_steps {
        display: flex;
        align-items: center;
    }

    .step_line {
        width: 1px;
        height: 2rem;
        background-color: var(--dark); 
        margin-right: 2rem;
    }
</style>