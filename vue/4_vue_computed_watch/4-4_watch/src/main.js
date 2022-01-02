/*
import Vue from 'vue'
import App from './App.vue'

Vue.createApp(App).mount('#app');
*/

// 위 처럼 작성해도 되고 아래처럼 작성해도 된다
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');