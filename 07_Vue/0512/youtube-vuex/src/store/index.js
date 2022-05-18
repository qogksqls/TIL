import Vue from 'vue'
import Vuex from 'vuex'

import _ from 'lodash'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: '',
    videos: [],
    selectedVideo: {},
  },
  getters: {
    isVideos: state => !!state.videos.length,
    isSelectedVideo: state => !_.isEmpty(state.selectedVideo),
    videoSrc: state => {
      const videoId = state.selectedVideo.id?.videoId
      return `https://www.youtube.com/embed/${videoId}`
    },
  },
  mutations: {  // 오직 state를 바꾸는 함수
    SET_KEYWORD: (state, keyword) => state.keyword = keyword,
    SET_VIDEOS: (state, videos) => state.videos = videos,
    SET_SELECTED_VIDEO: (state, video) => state.selectedVideo = video,
  },
  actions: {
    setKeywordAndFetchVideos({commit, dispatch}, keyword) {
      commit('SET_KEYWORD', keyword)
      dispatch('fetchVideos')
    },
    fetchVideos({ state, commit }, ) {
      this.keyword = keyword
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: state.keyword,
      }

      axios
        .get(API_URL, { params })
        .then(res => commit('SET_VIDEOS', res.data.items))
        .catch(err => console.error(err))
      
    },

    setSelectedVideo({commit}, video) {
      commit('SET_SELECTED_VIDEO', video)
    }
  },
})
