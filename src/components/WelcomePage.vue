<template>
  <div class="welcome-page">
    <!-- Main heading -->
    <MemoryHeading text="Memory" />
    
    <!-- Layout box for player input and play button -->
    <div class="layout-box">
      <!-- Secondary heading -->
      <h2 class="secondary-heading">Are you ready to play?</h2>
      
      <!-- Player input fields -->
      <div class="player-input">
        <input type="text" v-model="player1Name" placeholder="Enter Player 1 Name" class="name-input">
        <input type="text" v-model="player2Name" placeholder="Enter Player 2 Name" class="name-input">
      </div>
      
      <!-- Play button -->
      <button @click="startGame" class="play-button">Let's Play</button>
    </div>
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
/* Styling for layout box */
.layout-box {
  background-color: #57B3DB; /* Cobalt Blue */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px; /* Adjust the height of the layout box as needed */
}

/* Styling for secondary heading */
.secondary-heading {
  color: #fff; /* White */
  font-size: 28px;
  font-weight: bold;
  margin-top: 0; /* Remove top margin */
  margin-bottom: 350px; /* Increase space between heading and textboxes */
}

/* Styling for textboxes */
.name-input {
  padding: 10px;
  margin-right: 10px;
  background-color: aliceblue; /* Alice Blue */
  margin-bottom: 5px; /* Add some space between textboxes and button */
}

/* Styling for the Let's Play button */
.play-button {
  padding: 10px 20px;
  background-color: #4caf50; /* Green */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center; /* Center button horizontally */
  margin-top: auto; /* Align button to the bottom of the layout box */
}

</style>
