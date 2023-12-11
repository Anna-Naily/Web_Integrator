const menu = {
  state: {
    menu: [
      { id: 0, text: 'Правила', link: '#' },
      { id: 1, text: 'Документы', link: '#' },
      { id: 2, text: 'Политика конфиденциальности', link: '#' }
    ]
  },
  getters: {
    getMenu(state) {
      return state.menu;
    }
  },
  mutations: {},
  actions: {}
};

export default menu;
