<template>
  <div class="welcome-page">
    <!-- Exit Button -->
    <ExitButton />
    
    <!-- Main heading -->
    <MemoryHeading text="Memory" />
    
    <!-- Player images -->
    <div class="player-images">
      <img src="@/assets/player1.jpg" alt="Player 1" class="player-image">
      <img src="@/assets/player2.jpg" alt="Player 2" class="player-image">
    </div>
    
    <!-- Player input fields -->
    <div class="player-inputs">
      <input type="text" v-model="player1Name" placeholder="Enter Player 1 Name" class="name-input">
      <input type="text" v-model="player2Name" placeholder="Enter Player 2 Name" class="name-input">
    </div>
    
    <!-- Play button -->
    <button @click="startGame" class="play-button">Let's Play</button>
  </div>
</template>

<script>
import MemoryHeading from './MemoryHeading.vue';
import ExitButton from './ExitButton.vue'; // Import ExitButton component

export default {
  components: {
    MemoryHeading,
    ExitButton // Register ExitButton component
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
/* Styling for welcome page */
.welcome-page {
  text-align: center;
  padding: 20px;
}

/* Styling for player images */
.player-images {
  margin-bottom: 20px;
}

/* Styling for player image */
.player-image {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

/* Styling for player input fields */
.player-inputs {
  margin-bottom: 20px;
}

/* Styling for textboxes */
.name-input {
  padding: 10px;
  margin-right: 10px;
  background-color: aliceblue;
}

/* Styling for the Let's Play button */
.play-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
