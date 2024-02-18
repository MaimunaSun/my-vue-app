<template>
  <div class="game-board">
    <!-- Exit Button -->
    <ExitButton />

    <!-- Memory Heading -->
    <MemoryHeading text="Memory" />

    <!-- Game Board Layout -->
    <div class="game-board-layout">
      <!-- Three Box Layouts -->
      <div class="box-layout"></div>
      <div class="box-layout"></div>
      <div class="box-layout"></div>
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
  created() {
    // Access player names from route query parameters
    const { player1Name, player2Name } = this.$route.query;
    console.log('Player 1:', player1Name);
    console.log('Player 2:', player2Name);
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
  background-color: #0F52BA; /* Sapphire Blue */
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px; /* Add space between the heading/exit button and game board layout */
}

/* Styling for Box Layouts */
.box-layout {
  background-color: #87CEEB; /* Sky Blue */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px; /* Add space between box layouts */
}
</style>
