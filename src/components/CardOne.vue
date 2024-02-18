<template>
    <div :class="{ 'card': true, 'flipped': flipped }" @click="flipCard">
      <div class="front">
        <!-- Front of Card: Only club.png image and letter "A" -->
        <div class="card-content">
          <div class="letter">A</div>
          <img src="@/assets/club.png" alt="Club" class="suit-image">
        </div>
      </div>
      <div class="back"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        flipped: false // Initially the card is not flipped
      };
    },
    methods: {
      flipCard() {
        // Toggle the flipped state when the card is clicked
        this.flipped = !this.flipped;
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 50px;
    height: 60px;
    perspective: 1000px;
  }
  
  .card div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid #ccc;
  }
  
  .front {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d; /* Add this property */
    transition: transform 0.5s ease; /* Add transition for smooth flipping effect */
  }
  
  .back {
    background-color: #4a90e2; /* Cobalt Blue */
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d; /* Add this property */
    transform: rotateY(180deg); /* Initially show the back of the card */
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .letter {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    font-size: 10px; /* Adjust font size as needed */
  }
  
  .suit-image {
    width: 30px; /* Adjust image width as needed */
    height: auto; /* Maintain aspect ratio */
  }
  
  .flipped .card {
    transform: rotateY(180deg); /* Rotate the card to show the front */
  }
  </style>
  