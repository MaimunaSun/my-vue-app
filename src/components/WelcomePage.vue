<template>
    <div class="welcome-page">
      <h1>Welcome to Memory Game</h1>
      <div class="player-input">
        <input type="text" v-model="player1Name" placeholder="Enter Player 1 Name">
        <input type="text" v-model="player2Name" placeholder="Enter Player 2 Name">
      </div>
      <!-- Directly navigate to the GameBoard route when the button is clicked -->
      <router-link :to="{ name: 'GameBoard', query: { player1Name, player2Name } }">
        <button>Let's Play</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        player1Name: '',
        player2Name: ''
      };
    }
    
  }
  </script>
  
  <style scoped>
  .welcome-page {
    text-align: center;
  }
  
  .player-input {
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    margin-right: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  