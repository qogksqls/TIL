<template>
  <div>
      <input type="text" @keyup.enter="onInputKeyword"
      placeholder="Search" autofocus>
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInputKeyword(event) {
            this.$emit('input-change', event.target.value)
        }
    }
}
</script>

<style>

</style>