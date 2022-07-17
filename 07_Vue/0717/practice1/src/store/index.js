import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, newTodo) {
      state.todos.push(newTodo)
    },
    DELETE_TODO(state, newTodo) {
      const index = state.todos.indexOf(newTodo)
      state.todos.splice(index, 1)
    },
  },
  actions: {
    createTodo({ commit }, newTodo) {
      // context.commit = { commit }
      commit('CREATE_TODO', newTodo)
    },
    deleteTodo({ commit }, newTodo) {
      // context.commit = { commit }
      commit('DELETE_TODO', newTodo)
    },
  },
})
