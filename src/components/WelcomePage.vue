<template>
  <div class="welcome-container">
    <div class="welcome-page">
      <!-- Exit Button -->
      <ExitButton />
      
      <!-- Main heading -->
      <MemoryHeading text="Memory" />
      
      <!-- Secondary box layout -->
      <div class="secondary-box">
        <!-- Secondary heading -->
        <h2 class="secondary-heading">Are you ready to play?</h2>
        
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
    </div>
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
/* Styling for welcome container */
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Styling for welcome page */
.welcome-page {
  text-align: center;
  padding: 20px;
}

/* Styling for secondary box layout */
.secondary-box {
  background-color: #0F52BA; /* Sapphire Blue */
  padding: 20px;
  border-radius: 10px;
  width: 1000; /* Adjust width as needed */
  height: 400; /* Adjust height as needed */
}

/* Styling for secondary heading */
.secondary-heading {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Styling for player images */
.player-images {
  margin-bottom: 20px;
}

/* Styling for player image */
.player-image {
  width: 200px;
  height: 200px;
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
