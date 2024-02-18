<template>
  <div id="app">
    <WelcomePage v-if="!gameStarted" @start-game="handleStartGame" />
    <router-view v-else /> <!-- Render the appropriate component based on the route -->
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'; // Import the WelcomePage component

export default {
  name: 'App',
  components: {
    WelcomePage // Register the WelcomePage component
  },
  data() {
    return {
      gameStarted: false
    };
  },
  methods: {
    handleStartGame(players) {
      // Start the game with the provided players' names
      console.log('Game starting with players:', players);
      // Set gameStarted to true to hide the WelcomePage and show the GameBoard
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
