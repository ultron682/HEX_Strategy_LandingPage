import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from "aos";
import 'aos/dist/aos.css';

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      delay: 150,
    })
  },
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
