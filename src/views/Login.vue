<template>
  <div style="position: fixed; width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: space-around;">

    <div>
      <h1>Заходи, друг</h1>
      <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <form style="display: flex; flex-direction: column; align-items: center">
        <input v-model="email" type="email" placeholder="email" style="width: 70%; margin-top: 2rem">
        <input v-model="password" type="password" placeholder="password" style="width: 70%; margin-top: 2rem">
        <button @click.prevent="login" type="submit" style="margin-top: 2rem; width: 70%; color: #fff; background-color: black; border-radius: 2rem; padding: 10px 0;">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// @ is an alias to /src
import HelloWorld from '@/components/Navigation.vue'
import store from '../store/index';

export default {
  name: 'Login',
  components: {
    HelloWorld
  },
  setup(props, { emit }){
    //
    const router = useRouter();
    //
    const email = ref();
    const password = ref();
    const users = ref([]);
    //
    onMounted(() => {
      store.methods.getUsersfromDB();
      users.value = store.state.users;
    })
    // 
    const login = () => {
      if(email.value === '' || email.value === undefined) {
        alert('укажите email')
      } else {
        store.methods.setUser(email.value);
        let logged = users.value.find(el => el.email === email.value)
        //
        if(logged) {
          if(logged.password === password.value) {
            router.push({path: '/dashboard'})
          } else {
            alert('Неверный пароль')
          }
        } else {
          alert('Пользователь не найден')
        }
      }
    }

    return {
      router, login, email, password, users
    }
  }
}
</script>
