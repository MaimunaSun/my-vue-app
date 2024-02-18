// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../components/WelcomePage.vue';
import GameBoard from '../components/GameBoard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage
    },
    {
      path: '/game',
      name: 'GameBoard',
      component: GameBoard,
      meta: { requiresGameStarted: true } // Add meta field to indicate route guard requirement
    }
  ]
});

router.beforeEach((to, from, next) => {
  // Check if the route requires the game to be started
  if (to.meta.requiresGameStarted && router.app && router.app.$root && !router.app.$root.gameStarted) {
    next({ name: 'Welcome' }); // Redirect to WelcomePage if game has not started
  } else {
    next(); // Proceed to the next route
  }
});

export default router;
