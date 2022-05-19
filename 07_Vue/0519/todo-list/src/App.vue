<template>
  <div id="app">
    <h1>Todo List</h1>
    <h2>
      전체 개수: {{ allCompletedTodoCount }}
      <hr>
      완료한 목록 개수: {{ completedTodoCount }}
      <hr>
      미완료한 목록 개수: {{ uncompletedTodoCount }}
    </h2>
    <todo-list></todo-list>
    <todo-form></todo-form>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoList, TodoForm
  },
  computed: {
    completedTodoCount() {
      return this.$store.getters.completedTodoCount
    },
    uncompletedTodoCount() {
      return this.$store.getters.uncompletedTodoCount
    },
    // allCompletedTodoCount() {
    //   return this.$store.getters.allCompletedTodoCount
    // },
    ...mapGetters(['allCompletedTodoCount'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
