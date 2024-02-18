<template>
    <div class="start-page">
      <!-- Memory Heading Component -->
      <MemoryHeading text="Memory" />
  
      <!-- Sapphire Background Layout -->
      <div class="sapphire-layout">
        <!-- Secondary Layout with Light Blue Background -->
        <div class="secondary-layout">
          <h1 class="welcome-heading">Welcome to Memory Game</h1>
          <button class="start-button" @click="showModal">Start Game</button>
        </div>
      </div>
  
      <!-- Player Name Modal -->
      <PlayerNameModal v-if="showPlayerNameModal" @submit="handleNamesSubmit" />
    </div>
  </template>
  
  <script>
  import MemoryHeading from './MemoryHeading.vue';
  import PlayerNameModal from './PlayerNameModal.vue';
  
  export default {
    components: {
      MemoryHeading,
      PlayerNameModal
    },
    data() {
      return {
        showPlayerNameModal: false
      };
    },
    methods: {
      showModal() {
        this.showPlayerNameModal = true;
      },
      handleNamesSubmit(names) {
        // Close the modal after submitting names
        this.showPlayerNameModal = false;
  
        // Navigate to WelcomePage with player names as query parameters
        this.$router.push({ 
          name: 'Welcome',
          query: {
            player1Name: names.player1Name,
            player2Name: names.player2Name
          }
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles for StartPage */
  .start-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .sapphire-layout {
    background-color: #0F52BA; /* Sapphire Blue */
    padding: 20px;
    border-radius: 10px;
  }
  
  .secondary-layout {
    background-color: #87CEEB; /* Light Blue */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .welcome-heading {
    font-size: 24px;
    color: #fff; /* White */
  }
  
  .start-button {
    padding: 10px 20px;
    background-color: #4caf50; /* Green */
    color: #fff; /* White */
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  