<template>
    <h1>{{ text }}</h1>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any styling for your heading component */
  h1 {
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  