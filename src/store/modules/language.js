// import Cookies from 'js-cookie'

const app = {
  state: {
    language: localStorage.getItem('language') || 'en'
  },
  getters: {
    getLanguage:  state => state.language
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      localStorage.setItem('language', language)
    },
    DEL_LANGUAGE: (state) => {
      localStorage.removeItem('language')
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    delLanguage({ commit }) {
      commit('DEL_LANGUAGE')
    }
  }
}

export default app
