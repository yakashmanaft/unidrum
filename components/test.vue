<!-- <template>
  <div>
    <div>
      <h3>Firebase Push Notification</h3>

      <button @click="startListeners">Start Listeners Started</button>
      <button @click="requestPermission">Request Permission</button>
      <button @click="getIdToken">Get ID Token</button>
    </div>
  </div>
</template>

<script>
  import { getMessaging, getToken } from "firebase/messaging";

  export default {
    data() {
      return {
        listenersStarted: false,
        permissionGranted: false,
        idToken: '',
        loading: false,
      }
    },

    methods: {
      async requestPermission() {
        try {
          const permission = await Notification.requestPermission()
          this.permissionGranted = permission === 'granted'
        } catch (e) {
          console.error(e)
        }
      },
      async getIdToken() {
        this.loading = true
        let currentToken
        try {
          currentToken = await this.$fire.messaging.getIdToken()
        } catch (e) {
          console.error('An error occurred while retrieving token. ', e)
          this.idToken = ''
          this.loading = false
        }

        if(currentToken) {
          this.idToken = currentToken
          console.log('~ file: test.vue ~ line 45 ~ getIdToken ~ currentToken', currentToken)
        } else {
          console.info('No Instance ID token available. Request permission to generate one.')
          this.idToken = ''
        }
        alert(`The id token is: ${this.idToken}`)
        this.loading = false
      },
      startListeners() {
        this.startOnMessageListener()
        this.startTokenRefreshListener()
        this.listenersStarted = true
      },
      startOnMessageListener() {
        this.$fire.messaging.onMessage((payload) => {
          console.info('Message received', payload)
        })
      },
      startTokenRefreshListener() {
        this.$fire.messaging.onTokenRefresh(async () => {
          try {
            const refreshedToken = await this.$fire.messaging.getToken()
            this.idToken = refreshedToken
          } catch (e) {
            console.error('Unable to retrieve refreshed token ', e)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>

<script>
  function requestPermission () {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if(permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
  }
</script> -->
<template>
  <div>
    <div>
      <h3>Firebase Push Notification</h3>

      <button @click="startListeners">Start Listeners Started</button>
      <button @click="requestPermission">Request Permission</button>
      <button @click="getIdToken">Get ID Token</button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
