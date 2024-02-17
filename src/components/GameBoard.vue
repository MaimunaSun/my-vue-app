export default {
  created() {
    // Access player names from route query parameters
    const { player1Name, player2Name } = this.$route.query;
    console.log('Player 1:', player1Name);
    console.log('Player 2:', player2Name);
  }
}
