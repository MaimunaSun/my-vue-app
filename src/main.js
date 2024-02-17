import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Import the router instance

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app'); // Use the router with the Vue application instance