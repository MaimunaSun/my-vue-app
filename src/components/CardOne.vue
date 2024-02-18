<template>
    <div :class="{ 'card': true, 'flipped': flipped }" @click="flipCard">
      <div class="front">Front of Card</div>
      <div class="back">
        <div class="card-content">
          <img src="@/assets/club.png" alt="Club" class="suit-image">
          <div class="letter">A</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        flipped: false
      };
    },
    methods: {
      flipCard() {
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
  }
  
  .back {
    background-color: #4a90e2; /* Cobalt Blue */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px; /* Adjust font size as needed */
    font-weight: bold;
    transform: rotateY(180deg);
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .letter {
    margin-bottom: 5px;
  }
  
  .suit-image {
    width: 30px; /* Adjust image width as needed */
    height: auto; /* Maintain aspect ratio */
  }
  </style>
  