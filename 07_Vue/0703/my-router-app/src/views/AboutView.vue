<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="moveToHome">To Home</button>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    moveToHome() {
      this.$router.push({ name: 'home' })
      // this.$router.push('/')
    }
  }
}
</script>

<style>

</style>