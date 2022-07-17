<template>
  <div>
    {{ todo.title }}
    <button @click="deleteTodo">[x]</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "TodoListItem",
  props: {
    todo: Object,
  },
  methods: {
    // deleteTodo: vuex.mapActions(['deleteTodo']).deleteTodo
    ...mapActions(['deleteTodo']),
  }
}
</script>

<style>

</style>