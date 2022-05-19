import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    completedTodoCount(state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === true
      }).length
    },
    uncompletedTodoCount(state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === false
      }).length
    },
    allCompletedTodoCount(state) {
      return state.todos.length
    },
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO(state, todoItem) {
      state.todos = state.todos.map(todo => {
        if (todo === todoItem) {
          return {
            title: todoItem.title,
            date: new Date().getTime(),
            isCompleted: !todo.isCompleted
          }
        } else {
          return todo
        }
      })
    }
  },
  actions: {
    createTodo({ commit }, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodoStatus({ commit }, todoItem) {
      commit('UPDATE_TODO', todoItem)
    }
  },
  modules: {
  }
})
