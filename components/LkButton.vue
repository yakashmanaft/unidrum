<template>
    <NuxtLink to="/lk" style="position: fixed; top: 1rem; left: 2rem; z-index: 999999; max-width: 50%; display: flex; align-items: center; justify-content: flex-end; border-radius: 1.5rem;  backdrop-filter: blur(2px); background-color: rgba(255, 255, 255, 0.5)">
        <!-- ИМЯ -->
        <div style="color: var(--dark); margin: 0 1rem;">
            <!-- Анфалов Сергей -->
            Войти
        </div>
        <!-- Иконка -->
        <div style="width: 48px; height: 48px; background-color: gray;border-radius: 100%; display: flex; justify-content: center; align-items: center;">
            <Icon name="line-md:account" style="color: #fff;"/>
        </div>
    </NuxtLink>
</template>

<script>
    // import LkButton from '../components/LkButton.vue'

    export default {
        
    }
</script>

<style scoped>

</style>