<template>
  <div>
    <header>
      <search-bar
        @input-change="onInputKeyword"
        :videos="videos"
      ></search-bar>
    </header>
    <section>
      <video-detail :video="selectVideo"></video-detail>
      <video-list :videos="videos" @select-video="onSelectVideo"></video-list>
    </section>
  </div>

</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import VideoList from '@/components/VideoList.vue'
import VideoDetail from '@/components/VideoDetail.vue'

export default {
  name: 'App',
  components: {
    SearchBar, VideoList, VideoDetail
  },
}
</script>

<style>
  section, header {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
  }
  section {
    display: flex;
  }
</style>