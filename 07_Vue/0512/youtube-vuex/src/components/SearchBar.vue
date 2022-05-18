<template>
  <div class="search-bar" :style="{ margin: isVideos ? '0' : '40vh 0' }">
    <input 
      type="text" 
      v-model="inputKeyword"
      @keydown.enter="setKeywordAndFetchVideos(inputKeyword)"
      @keyup.enter="onEnter" 
      placeholder="Search" 
      autofocus
    />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex"

  export default {
    name: 'SearchBar',
    data() {
      return {
        inputKeyword: '',
      }
    },
    methods: {
      // 1. 사용자가 입력한 내용을 (v-model="inputKeyword")
      // 2. Enter 입력했을 때, (@keydown.enter=)
      // 3. setKeyword action을 통해 남긴다.("setKeywordAndFetchVideos(inputKeyword)")
      ...mapActions(['setKeywordAndFetchVideos']),
    },
    computed: {
      ...mapGetters(['isVideos']),
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
