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
    margin-top: 0; /* Set margin-top to 0 to place it at the top */
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  