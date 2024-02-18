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
      <PlayerNameModal v-if="showPlayerNameModal" @submit="startGame" />
    </div>
  </template>
  
  <script>
  import MemoryHeading from './MemoryHeading.vue';
  import PlayerNameModal from './PlayerNameModal.vue'; // Import the PlayerNameModal component
  
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
      startGame(playerNames) {
        // Navigate to WelcomePage with player names as query parameters
        this.$router.push({ 
          name: 'Welcome',
          query: playerNames
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles for StartPage */
  </style>
  