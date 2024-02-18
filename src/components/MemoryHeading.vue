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
    color: #fff; /* White */
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  