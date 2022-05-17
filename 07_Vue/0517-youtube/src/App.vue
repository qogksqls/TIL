<template>
  <div>
    <header>
      <search-bar
        @input-change="onInputKeyword"
      ></search-bar>
    </header>
    <section>
      <video-detail :video="selectVideo"></video-detail>
      <video-list :videos="videos" @select-video="onSelectVideo"></video-list>
    </section>
  </div>

</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar.vue'
import videoList from '@/components/videoList.vue'
import VideoDetail from '@/components/VideoDetail.vue'

// const API_KEY = 'AIzaSyD7QVliBtUWgyUUG4ggrF3JSxwHKxKGtIU'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    SearchBar, videoList, VideoDetail
  },
  data() {
    return {
      inputKeyword: '',
      videos: [],
      selectVideo: null,
    }
  },
  methods: {
    onInputKeyword(inputValue) {
      this.inputKeyword = inputValue

      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: this.inputKeyword
      }
      axios({
        method: 'get',
        url: API_URL,
        params,
      })
        .then(res => {
          console.log(res)
          this.videos = res.data.items
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSelectVideo(video) {
      this.selectVideo = video
    }
  }
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
