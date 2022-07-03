<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <the-home :message="parentToChild" @child-to-parent="parentGetChildInput"></the-home>
  </div>
</template>

<script>
import TheHome from './components/TheHome.vue'
export default {
  name: 'App',
  components: {
    TheHome
  },
  data: function () {
    return {
      parentToChild: "Hi"
    }
  },
  methods: {
    parentGetChildInput: function (inputData) {
      alert(inputData)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
