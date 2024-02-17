<template>
  <!-- <h1>looser</h1> -->
  <WelcomePage v-if="!gameStarted" @start-game="handleStartGame" />
</template>

<script>

import WelcomePage from './components/WelcomePage.vue';

export default {
  name: 'App',
  components: {
    WelcomePage
  },
  data() {
    return {
      gameStarted: false,
      // Other data properties
    };
  },
  methods: {
    handleStartGame(players) {
      // Start the game with the provided players' names
      console.log('Game starting with players:', players);
      // Set gameStarted to true to hide the WelcomePage
      this.gameStarted = true;
    }
  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
