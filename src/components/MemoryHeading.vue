<template>
    <h1 class="memory-heading">{{ text }}</h1>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .memory-heading {
    margin-top: 20px; /* Adjust the margin-top value to your preference */
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  