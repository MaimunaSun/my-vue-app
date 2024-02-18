<template>
  <div id="app">
    <!-- Apply background color to the entire webpage -->
    <router-view v-if="!gameStarted" :style="{ backgroundColor: '#0047ab' }" />
    <router-view v-else />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      gameStarted: false
    };
  }
}
</script>

<style>
/* Reset body margin and padding */
body {
  margin: 0;
  padding: 0;
}

/* Center the content vertically */
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Make the app container take the full height of the viewport */
}

/* Adjust styles for the entire webpage */
router-view {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Styles for WelcomePage */
.WelcomePage {
  /* Set the background color */
  background-color: #0047ab; /* Cobalt blue */
}

/* Styles for GameBoard */
.GameBoard {
  /* Set the background color */
  background-color: #0047ab; /* Cobalt blue */
}

/* Styles for MemoryHeading */
.MemoryHeading {
  /* Set the text color */
  color: #fff; /* White */
}

/* Styles for textboxes */
input {
  /* Set the background color for input boxes */
  background-color: aliceblue;
}

/* Styles for the Let's Play button */
button {
  /* Set the background color for the button */
  background-color: green;
  /* Add other button styles as needed */
}
</style>
