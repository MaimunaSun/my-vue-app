<template>
    <div class="welcome-page">
      <h1>Welcome to Memory Game</h1>
      <div class="player-input">
        <input type="text" v-model="player1Name" placeholder="Enter Player 1 Name">
        <input type="text" v-model="player2Name" placeholder="Enter Player 2 Name">
      </div>
      <button @click="startGame">Let's Play</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        player1Name: '',
        player2Name: ''
      };
    },
    methods: {
      startGame() {
        // Emit an event to notify the parent component to start the game
        this.$emit('start-game', { player1Name: this.player1Name, player2Name: this.player2Name });
      }
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
  