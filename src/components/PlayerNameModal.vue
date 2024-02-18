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
  /* Styles for modal popup */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #87CEEB; /* Light Blue */
  padding: 20px;
  border-radius: 10px;
  width: 80%; /* 80% width */
  max-width: 400px; /* Maximum width */
}

input {
  width: calc(100% - 20px); /* 100% width with 10px padding on each side */
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #fff; /* White */
  color: #000; /* Black */
}

button {
  background-color: #15ff00; /* Green */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0; /* Centered vertically, with 20px top margin */
}
</style>
  
  