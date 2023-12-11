const cards = {
  state: {
    cards: [
      {
        id: 0,
        pic: 'card-experience.png',
        text: 'Опыт внедрения в компаниях с 50 тысячами сотрудников',
        date: '05.04.2019',
        link: '#'
      },
      {
        id: 1,
        pic: 'card-stuff.png',
        text: 'Передовые кадровые решения',
        date: '05.04.2019',
        link: '#'
      },
      {
        id: 2,
        pic: 'card-analysis.png',
        text: 'Глубокий анализ процессов и требований, применение лучших практик',
        date: '05.04.2019',
        link: '#'
      },
      {
        id: 3,
        pic: 'card-modules.png',
        text: 'Разработка сложных модулей и глубокая интеграция',
        date: '05.04.2019',
        link: '#'
      }
    ]
  },
  getters: {
    getCards(state) {
      return state.cards;
    }
  },
  mutations: {},
  actions: {}
};

export default cards;
