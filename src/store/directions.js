const directions = {
  state: {
    directions: [
      {
        id: 0,
        title: 'E-commerce',
        text: 'Лучшее в России портфолио крупных интернет-магазинов',
        icon: 'pic-ecommerce.png'
      },
      {
        id: 1,
        title: 'Intranet',
        text: 'Cамый опытный разработчик корпоративных порталов',
        icon: 'pic-intranet.png'
      },
      {
        id: 2,
        title: 'Mobile',
        text: 'Разработка нативных мобильных приложений',
        icon: 'pic-mobile.png'
      },
      {
        id: 3,
        title: 'SLA 24/7',
        text: 'Выделенный отдел технической поддержки с SLA 24/7',
        icon: 'pic-sla.png'
      },
      {
        id: 4,
        title: 'Personal',
        text: 'Большой опыт в разработке Личных Кабинетов',
        icon: 'pic-personal.png'
      },
      {
        id: 5,
        title: 'Digital',
        text: 'Комплексная интеграция информационных систем',
        icon: 'pic-digital.png'
      }
    ]
  },
  getters: {
    getDirections(state) {
      return state.directions;
    }
  },
  mutations: {},
  actions: {}
};

export default directions;
