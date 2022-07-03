<template>
<div>
  <h1>{{ myMessage }}</h1>
  input: <input type="text" v-model="childInputDatas" @keyup.enter="clickInput">
</div>
</template>

<script>
export default {
  name: 'TheAbout',
  props: {
    myMessage: String,
  },
  data: function() {
    return {
      childInputDatas: ''
    }
  },
  methods: {
    clickInput: function () {
      this.$emit('child-input-change', this.childInputDatas)
    }
  }
}
</script>

<style>

</style>