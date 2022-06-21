import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: '',
  },
  getters: {
  },
  mutations: {
    SET_KEYWORD: (state, keyword) => state.keyword = keyword,
  },
  actions: {
    setKeyword({ commit, state }, keyword) {
      commit('SET_KEYWORD', keyword)

      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: state.keyword
      }
      axios
        .get(API_URL, { params: params})
        .then(res => console.log('ok', res.data))
        .catch(err => console.error(err))
    },
  },
  modules: {
  }
})
