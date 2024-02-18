// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../components/StartPage.vue'; // Import the StartPage component
import WelcomePage from '../components/WelcomePage.vue';
import GameBoard from '../components/GameBoard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartPage // Change the component to StartPage
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: WelcomePage
    },
    {
      path: '/game',
      name: 'GameBoard',
      component: GameBoard,
      meta: { requiresGameStarted: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresGameStarted && router.app && router.app.$root && !router.app.$root.gameStarted) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
});

export default router;
