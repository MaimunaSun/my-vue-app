<template>
  <div class="game-board">
    <!-- Exit Button -->
    <ExitButton />

    <!-- Memory Heading -->
    <MemoryHeading text="Memory" />
    
    <!-- Game Board Layout -->
    <div class="game-board-layout">
      <!-- Left Box -->
      <div class="box-layout left">
        <div class="player-details">
          <img src="@/assets/player1.jpg" alt="Player 1" class="player-image">
          <div class="player-name">{{ player1Name }}</div>
          <div class="player-score">Score: {{ player1Score }}</div>
        </div>
      </div>
      
      <!-- Middle Box -->
      <div class="box-layout middle">
        <!-- Display CardOne.vue component here -->
        <CardOne />
      </div>
      
      <!-- Right Box -->
      <div class="box-layout right">
        <div class="player-details">
          <img src="@/assets/player2.jpg" alt="Player 2" class="player-image">
          <div class="player-name">{{ player2Name }}</div>
          <div class="player-score">Score: {{ player2Score }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemoryHeading from './MemoryHeading.vue';
import ExitButton from './ExitButton.vue'; // Import ExitButton component
import CardOne from './CardOne.vue'; // Import CardOne component

export default {
  components: {
    MemoryHeading,
    ExitButton, // Register ExitButton component
    CardOne // Register CardOne component
  },
  data() {
    return {
      player1Name: '',
      player2Name: '',
      player1Score: 0, // Initialize scores
      player2Score: 0
    };
  },
  created() {
    // Access player names from route query parameters
    const { player1Name, player2Name } = this.$route.query;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }
}
</script>

<style scoped>
/* Add styles specific to GameBoard content */
.game-board {
  text-align: center;
}

/* Styling for Game Board Layout */
.game-board-layout {
  background-color: #0F52BA; /* SAPHIRE Blue */
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px; /* Add space between the heading/exit button and game board layout */
  display: flex;
  justify-content: space-around;
  width: 1500px; /* Adjust width as needed */
  height: 600px; /* Adjust height as needed */
}

/* Styling for Box Layouts */
.box-layout {
  background-color: #87CEEB; /* Sky Blue */
  padding: 20px;
  border-radius: 10px;
}

.left,
.right {
  margin-top: 100px; /* Add space between the heading/exit button and game board layout */
  width: 200px; /* Set the width of the left and right boxes */
  height: 350px; /* Adjust height as needed */
}

.middle {
  width: 900px; /* Set the width of the middle box */
}

.left {
  margin-right: 10px;
}

.right {
  margin-left: 10px;
}

/* Styling for Player Name */
.player-name {
  color: #fff; /* White */
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

/* Styling for Player Score */
.player-score {
  color: #fff; /* White */
  font-size: 16px;
  text-align: center;
}

/* Styling for Player Image */
.player-image {
  display: block;
  margin: 0 auto;
  width: 200px; /* Adjust image width as needed */
  height: 260px; /* Adjust image height as needed */
  border-radius: 50%; /* Make the image circular */
}
</style>
