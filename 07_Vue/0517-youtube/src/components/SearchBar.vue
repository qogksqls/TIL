<template>
  <div class="search-bar" :style="{ margin: isVideo ? '0' : '40vh 0' }">
    <input type="text" @keyup.enter="onEnter" placeholder="Search" autofocus />
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onEnter(event) {
            this.$emit('input-change', event.target.value)
        }
    }
}
</script>

<style>
  .search-bar > input {
      width: 100%;
      padding: 0.5rem;
      font-size: 2rem;
  }
  .search-bar {
      transition: margin 0.5s;
  }
</style>