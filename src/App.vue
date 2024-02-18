<template>
  <div id="app">
    <router-view /> <!-- Render the appropriate component based on the route -->
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'; // Import the WelcomePage component

export default {
  name: 'App',
  components: {
    WelcomePage // Register the WelcomePage component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
