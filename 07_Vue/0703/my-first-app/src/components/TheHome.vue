<template>
  <div>
    <h1>Home</h1>
    <h1>app에서 온 말: {{message}}</h1>
    <h1>home에서 보낼 말:
      <input type="text" v-model="childToParent" @keyup.enter="childInput">
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TheHome',
  props: {
    message: String,
  },
  data: function () {
    return {
      childToParent: ""
    }
  },
  methods: {
    childInput: function () {
      this.$emit('child-to-parent', this.childToParent)
    }
  },
}
</script>

<style>

</style>