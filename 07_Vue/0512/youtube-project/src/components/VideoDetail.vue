<template>
  <div v-if="video" class="vdieo-detail">
    <div class="video-container">
        <iframe :src="videoURL" frameborder="0"></iframe>
    </div>
    <div class="video-info">
        <h2>{{ video.snippet.title | strUnescape }}</h2>
        <p>{{ video.snippet.description | strUnescape }}</p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'VideoDetail',
    props: {
        video: Object,
    },
    computed: {
        videoURL() {
            const videoId = this.video.id.videoId
            return `https://www.youtube.com/embed/${videoId}`
        },
    },
    filters: {
        strUnescape(rawText) {
            return _.unescape(rawText)
        }
    }
}
</script>

<style>

  .video-detail {
    width: 70%;
    padding-right: 1rem;
  }

  .video-container {
    position: relative;
    padding-top: 56.28%;
  }

  .video-container > iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-info {
    margin-top: 20px;
    padding: 20px;
    border: solid 1px lightgray;
    border-radius: 10px;
  }

</style>