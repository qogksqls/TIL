<template>
  <div class="col">
      <ul class="list-group">
        <video-list-item
          v-for="video in videos"
          :key="video.id.videoId"
          :video="video"
          @select-video="selectVideo"
        >
        </video-list-item>
      </ul>
  </div>
</template>

<script>
import videoListItem from '@/components/videoListItem.vue'

export default {
    name: 'videoList',
    props: {
        videos: Array,
    },
    components: {
        videoListItem
    },
    methods: {
        selectVideo(video) {
            this.$emit('select-video', video)
        }
    }
}
</script>

<style>

</style>