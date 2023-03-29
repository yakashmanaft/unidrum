<template>
    <div class="hide-scroll">

        <!--  -->
        <Header :route="'account'"/>

        <!--  -->
        <div class="content">
            {{ user }}<br>
            Общая сумма еженедельных взносов: хххх <br>
            Вы участник хххх банков <br>
            Вы основатель хххх банков <br>
        </div>

        <!--  -->
        <Navigation :route="'account'"/>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    import store from '../store/index';

    import Navigation from '@/components/Navigation.vue'
    import Header from '@/components/Header.vue';

    export default {
        components: {
            Navigation, Header
        },

        setup() {
            //
            const router = useRouter();
            //
            const user = ref()
            //
            onMounted(() => {
                user.value = store.state.user
                if(user.value === '') {
                    router.push({path: '/'})
                } else {
                    console.log(user.value)
                }
            })

            return {
                router, user
            }
        }
    }
</script>

<style scoped>
</style>