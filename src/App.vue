<template>
  <div id="app">
    <!-- Layout with cobalt blue background -->
    <div class="layout">
      <!-- Content area with router views -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  background-color: #0F52BA; /* SAPHIRE Blue */
  width: 100vw; /* Full width of the viewport */
  min-height: 100vh; /* Minimum height of the layout to cover the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
