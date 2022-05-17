<template>
  <li class="list-gruop-item" @click="selectVideo">
    <img :src="video.snippet.thumbnails.default.url" alt="썸네일">
    {{ video.snippet.title }}
  </li>
</template>

<script>
export default {
    name: 'videoListItem',
    props: {
        video: Object,
    },
    methods: {
        selectVideo() {
            this.$emit('select-video', this.video)
        }
    }
}
</script>

<style>
    .list-gruop-item {
        display: flex;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    .list-gruop-item:hover {
        background-color: #eee;
    }
    .list-gruop-item img {
        height: fit-content;
        margin-right: 0.5rem;
    }

</style>