import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import ReviewsView from '../views/ReviewsView.vue';
import ArticlesAndNewsView from '../views/ArticlesAndNewsView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/article',
    name: 'article',
    component: ArticlesAndNewsView
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewsView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
