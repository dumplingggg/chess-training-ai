import { createApp } from 'vue'
import App from './App.vue'
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';
//import {router} from 'router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App);
app.use(vuetify);
//app.use(router);    
app.mount('#app');

