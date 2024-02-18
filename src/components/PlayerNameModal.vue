<template>
    <div class="modal">
      <input v-model="player1Name" placeholder="Enter Player 1 Name">
      <input v-model="player2Name" placeholder="Enter Player 2 Name">
      <button @click="submit">Submit</button>
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
      submit() {
        this.$emit('submit', { player1Name: this.player1Name, player2Name: this.player2Name });
      }
    }
  }
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  
  