<template>
  <div v-if="video" class="video-detail">
    <div class="video-contaner">
        <iframe :src="videoURI" frameborder="0"></iframe>
    </div>
    <div class="video-info">
        <h2>{{ video.snippet.title }}</h2>
        <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: {
        video: Object,
    },
    computed: {
        videoURI() {
            const videoId = this.video.id.videoId
            return `https://www.youtube.com/embed/${videoId}`
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
      position: absolute;
      padding-top: 56.28%;
  }
  .video-container > iframe {
      position: absolute;
      top: 0;
      bottom: 0;
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