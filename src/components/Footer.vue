<template>
    <div>
        <a class="link-btn" @click="router.push('/')">Unidrum</a> Подвал сайта
    </div>
</template>

<script>
    import { defineComponent, ref, computed, onMounted, watch } from 'vue';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        name: 'Footer',
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

</style>