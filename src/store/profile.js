const profile = {
  state: {
    profile: { id: 0, name: 'Александр', pic: 'avatar-pic.png', link: '#' }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  },
  mutations: {},
  actions: {}
};

export default profile;
