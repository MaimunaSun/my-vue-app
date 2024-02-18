<template>
    <button class="exit-button" @click="exit">Exit</button>
  </template>
  
  <script>
  export default {
    methods: {
      exit() {
        // Close the window when the exit button is clicked
        window.close();
      }
    }
  }
  </script>
  
  <style scoped>
  .exit-button {
    background-color: #ff0000; /* Red */
    color: #fff; /* White */
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
  }
  </style>
  