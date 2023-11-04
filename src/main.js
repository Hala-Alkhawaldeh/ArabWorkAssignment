import Vue from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css'; // Import your CSS entry point
import * as VueGoogleMaps from 'vue2-google-maps';
import 'font-awesome/css/font-awesome.css';

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places', // Add any additional libraries if needed
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');



