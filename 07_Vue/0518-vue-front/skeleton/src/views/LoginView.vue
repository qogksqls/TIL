<template>
  <div>
    <h1>Login</h1>
    <account-error-list v-if="authError"></account-error-list>

    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">username: </label>
        <input v-model="credentials.username" type="text" id="username" required />
      </div>

      <div>
        <label for="password">password: </label>
        <input v-model="credentials.password" type="password" id="password" required />
      </div>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
  import AccountErrorList from '@/components/AccountErrorList.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'LoginView',
    components: { AccountErrorList },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login'])
    },
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

<style></style>
