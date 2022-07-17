<template>
<div id="app">
  <h1>MY TODOS</h1>
  <todo-list></todo-list>
  <todo-form></todo-form>

</div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    TodoList, TodoForm,
  },

}
</script>

<style>
#app {
  text-align: center;
}
</style>