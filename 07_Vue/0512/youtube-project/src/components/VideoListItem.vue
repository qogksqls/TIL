<template>
  <div>
    <li class="list-group-item" @click="selectVideo">
      <img :src="videoImgSrc" alt="video.title">
      {{ video.snippet.title | strUnescape }}
    </li>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'VideoListItem',
    props: {
      video: Object,
    },
    methods: {
        selectVideo() {
            this.$emit('select-video', this.video)
        }
    },
    computed: {
      videoImgSrc() {
        return this.video.snippet.thumbnails.default.url
      }
    },
    filters: {
      strUnescape(rawText) {
        return _.unescape(rawText)
      }
    }
}
</script>

<style>

  .list-group-item {
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .list-group-item:hover {
    background-color: #eee;
  }
  .list-group-item img {
    height: fit-content;
    margin-right: 0.5rem;
  }

</style>