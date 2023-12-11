const tabs = {
  state: {
    tab: 'article'
  },
  getters: {
    getTab(state) {
      return state.tab;
    }
  },
  mutations: {
    setTab(state, data) {
      state.tab = data;
    }
  },
  actions: {
    setTabData({ commit }, data) {
      commit('setTab', data);
    }
  }
};

export default tabs;
