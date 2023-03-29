<template>
    <div class="wrapper">
        <a class="link-btn" @click="router.push('/')">Unidrum</a> Навигация по сайту
    </div>
</template>

<script>
    import { defineComponent, ref, computed, onMounted, watch } from 'vue';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        name: 'Navigation',
        components: {

        },
        setup(props, { emit }) {
            //
            const router = useRouter();
            //
            return {
                router
            }
        }
    })
</script>

<style scoped>
    .wrapper {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        background-color: gray;
        color: white;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>