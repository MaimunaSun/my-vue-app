<template>
    <div class="start-page">
      <!-- Memory Heading Component -->
      <MemoryHeading text="Memory" />
      
      <!-- Sapphire Background Layout -->
      <div class="sapphire-layout">
        <!-- Secondary Layout with Light Blue Background -->
        <div class="secondary-layout">
          <h1 class="welcome-heading">Welcome to Memory Game</h1>
          <button class="start-button" @click="startGame">Start Game</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MemoryHeading from './MemoryHeading.vue';
  import { useRouter } from 'vue-router'; // Import useRouter from vue-router
  
  export default {
    components: {
      MemoryHeading
    },
    setup() {
      const router = useRouter(); // Initialize router
  
      const startGame = () => {
        // Navigate to the WelcomePage route when startGame button is pressed
        router.push({ name: 'Welcome' });
      };
  
      return { startGame };
    }
  }
  </script>
  
  <style scoped>
  /* Styling for the StartPage */
  .start-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  /* Sapphire Background Layout */
  .sapphire-layout {
    background-color: #0F52BA; /* Sapphire Blue */
    padding: 20px;
    border-radius: 10px;
  }
  
  /* Secondary Layout with Light Blue Background */
  .secondary-layout {
    background-color: #87CEEB; /* Light Blue */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  /* Styling for the Welcome Heading */
  .welcome-heading {
    font-size: 36px; /* Bigger font size */
    color: #fff; /* White */
  }
  
  /* Styling for the Start Button */
  .start-button {
    padding: 10px 40px;
    background-color: #4caf50; /* Green */
    color: #fff; /* White */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px; /* Add space between heading and button */
  }
  </style>
  