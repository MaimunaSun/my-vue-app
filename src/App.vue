<template>
  <div id="app">
    <!-- Layout with cobalt blue background -->
    <div class="layout">
      <!-- Content area with router views -->
      <router-view v-if="!gameStarted" />
      <router-view v-else />
    </div>
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

/* Ensure the #app div takes up the full height of the viewport */
#app {
  height: 100vh; /* Make the app container take the full height of the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout {
  background-color: #0047ab; /* Cobalt blue */
  width: 100vw; /* Full width of the viewport */
  min-height: 100vh; /* Minimum height of the layout to cover the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}


/* Adjust styles for the entire webpage */
.welcome-page, .game-board {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Styles for MemoryHeading */
.memory-heading {
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
