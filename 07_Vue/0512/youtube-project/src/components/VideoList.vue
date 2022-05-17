<template>
  <ul>
    <video-list-item
      v-for="video in videos"
      :key="video.id.videoId"
      :video="video"
      @select-video="onSelectVideo"
    >
    </video-list-item>
  </ul>
</template>

<script>
import VideoListItem from "@/components/VideoListItem.vue"

export default {
    name: 'VideoList',
    props: {
        videos: {
            type: Array,
            requrie: true,
        }
    },
    components: {
        VideoListItem
    },
    methods: {
        onSelectVideo(video) {
            this.$emit('select-video', video)
        }
    }
}
</script>

<style>

</style>