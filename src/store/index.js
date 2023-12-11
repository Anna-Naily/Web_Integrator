import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';
import profile from './profile';
import directions from './directions';
import cards from './cards';
import reviews from './reviews';
import tabs from './tabs';
import news from './news';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    profile,
    directions,
    cards,
    reviews,
    tabs,
    news
  }
});
