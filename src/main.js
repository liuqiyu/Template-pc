import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/reset.css';
import './needs';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
