<template>
  <button class="exit-button" @click="exit">Exit</button>
</template>

<script>
export default {
  methods: {
    exit() {
      // Navigate to the StartPage route when the exit button is clicked
      this.$router.push({ name: 'Start' });
    }
  }
}
</script>

<style scoped>
.exit-button {
  background-color: #ff0000; /* Red */
  color: #fff; /* White */
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>
