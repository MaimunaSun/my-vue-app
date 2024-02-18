<template>
  <div class="game-board">
    <!-- Exit Button -->
    <ExitButton />

    <MemoryHeading text="Memory" />
    <!-- Add your game logic and UI components here -->
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
</style>
