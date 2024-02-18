<template>
  <div class="game-board">
    <!-- Using the MemoryHeading component -->
    <MemoryHeading />

    <!-- Add your game logic and UI components here -->
  </div>
</template>

<script>
import MemoryHeading from './MemoryHeading.vue';

export default {
  components: {
    MemoryHeading
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
.game-board {
  text-align: center;
}
</style>
