import { createApp } from 'vue';
import App from './components/App.vue';

createApp(App).mount("#app")
/*
new createApp({
    render: h => h(App)
}).$mount('#app');*/