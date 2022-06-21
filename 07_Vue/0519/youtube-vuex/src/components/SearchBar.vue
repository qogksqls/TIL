<template>
  <div>
    <input type="text"
      v-model=""
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SearchBar',
    computed: {
        ...mapState(['keyword'])
    }
}
</script>

<style>

</style>