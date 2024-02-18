<template>
  <div class="game-board">
    <MemoryHeading text="Memory" />
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
  background-color: #0047ab; /* Cobalt blue */
  text-align: center;
}
</style>
