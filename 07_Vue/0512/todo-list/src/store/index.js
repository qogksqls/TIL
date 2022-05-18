import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    completedTodosCount(state) {
      return state.todos.fillter( todo => {
        return todo.isCompleted === true
      }).length
    },
    uncompletedTodosCount(state) {
      return state.todos.fillter( todo => {
        return todo.isCompleted === false
      }).length
    },
    allTodosCount(state) {
      return state.todos.length
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO_STATUS(state, todoItem) {
      state.todos = state.todos.map(todo => {
        if (todo === todoItem) {
          return {
            title: todoItem.title,
            isCompleted: !todo.isCompleted,
            date: new Date().getTime(),
          }
        } else {
          return todo
        }
      })
    }
  },
  actions: {
    createTodo({commit}, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo({commit}, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodoStatus({commit}, todoItem) {
      commit('UPDATE_TODO_STATUS', todoItem)
    }
  },
})
