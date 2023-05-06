<template>
    <div style="background-color: var(--light); min-height: 100vh; margin: 0 auto; display: flex; align-items: center;">

        <div style="max-width:1200px; margin: 0 auto;">
            
            <div style=" display: flex; justify-content: space-between; align-items: center;">
                
                <!--  -->
                <div>
                    <h2 style="color: var(--dark)">Об инструменте</h2>
                    <p style="margin-top: 1rem; color: gray;">UNIDRUM уникальный стальной Идиофон , объединяет в себе гармоничный  круг с чистым ярким характерным звуком</p>
        
                    <div style="margin-top: 2rem;">
                        <NuxtLink to="/about">Подробнее</NuxtLink>
                    </div>
                </div>
                
                <!--  -->
                <video :src="'/video/K00A2790.MOV'" type="video/mov" width="640" height="360" preload controls></video>
        
            </div>
    
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 7rem; max-width:1200px;">
    
                <!-- <div v-for="(step, i) in steps" :key="i">
                    {{ step }}
                </div> -->

                <NuxtLink class="history_steps" :to="`${step.linkTo}`" v-for="(step, i) in steps" :key="i">

                    <!-- <div class="step_line"></div> -->

                    <div style="display: flex;">
                        <Icon :name="`${step.icon}`" class="step_icon"/>
                        <div style="margin-left: 2rem;">
                            <h2 style="font-size: 1.5rem; color: var(--dark)">{{ step.title }}</h2>
                            <p style="color: gray">{{ step.text }}</p>
                        </div>
                    </div>

                </NuxtLink>

            </div>

        </div>

    </div>
</template>

<script setup>
    const steps = [
        {
            title: 'Не поиск звука',
            text: 'Как я искал и возможность выбора нот',
            linkTo: 'about',
            icon: 'solar:headphones-round-sound-bold'

        },
        {
            title: 'Исследование',
            text: 'Поиск чистого и уникального звучания',
            linkTo: 'about',
            icon: 'game-icons:archive-research'
        },
        {
            title: 'Ручная работа',
            text: 'В начале была тишина. Белый шум...',
            linkTo: 'about',
            icon: 'material-symbols:back-hand'
        }
    ]

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
        justify-content: space-around;
        padding: 0.5rem;
    }

    .history_steps:hover {
        text-decoration: none;
        border-bottom: 1px solid gray;
    }

    .step_line {
        width: 1px;
        height: 2rem;
        background-color: var(--dark); 
        margin-right: 2rem;
    }

    .step_icon {
        color: var(--dark);
    }
</style>