<template>
  <div>
    <input type="text"
        v-model.trim="todoTitle"
        placeholder="할일 목록 적기"
        autofocus
        @keyup.enter="createTodo"
        value=null
    >
    <button @click="createTodo">Add</button>
  </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data() {
        return {
            todoTitle: ''
        }
    },
    methods: {
        createTodo() {
            const todoItem = {
                title: this.todoTitle,
                isCompleted: false,
                date: new Date().getTime(),
            }
            if (todoItem.title) {
                this.$store.dispatch('createTodo', todoItem)
                this.todoTitle = ''
            }
        }
    }
}
</script>

<style>

</style>