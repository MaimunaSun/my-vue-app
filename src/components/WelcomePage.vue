<template>
  <div class="welcome-page">
    <MemoryHeading text="Welcome to Memory Game" />
    <div class="player-input">
      <input type="text" v-model="player1Name" placeholder="Enter Player 1 Name" class="name-input">
      <input type="text" v-model="player2Name" placeholder="Enter Player 2 Name" class="name-input">
    </div>
    <!-- Call startGame method when the button is clicked -->
    <button @click="startGame" class="play-button">Let's Play</button>
  </div>
</template>

<script>
import MemoryHeading from './MemoryHeading.vue';

export default {
  components: {
    MemoryHeading
  },
  data() {
    return {
      player1Name: '',
      player2Name: ''
    };
  },
  methods: {
    startGame() {
      // Set gameStarted to true before navigating to GameBoard
      this.$root.gameStarted = true;
      // Navigate to GameBoard route with player names as query parameters
      this.$router.push({ 
        name: 'GameBoard', 
        query: { 
          player1Name: this.player1Name, 
          player2Name: this.player2Name 
        } 
      });
    }
  }
}
</script>

<style scoped>
.welcome-page {
  background-color: #0047ab; /* Cobalt blue */
  text-align: center;
}

.name-input {
  padding: 10px;
  margin-right: 10px;
  background-color: aliceblue; /* Alice Blue */
}

.play-button {
  padding: 10px 20px;
  background-color: #4caf50; /* Green */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
