// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '../components/WelcomePage.vue';
import GameBoard from '../components/GameBoard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage
    },
    {
      path: '/game',
      name: 'GameBoard',
      component: GameBoard
    }
  ]
});
