import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faWordpress, faGithub, faLinkedinIn, faTwitter, faInstagram, fa500px,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode, faMobileAlt, faPencilAlt, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Scrollspy, { Easing } from 'vue2-scrollspy';

import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lazysizes';

Vue.config.productionTip = false;
library.add(faCode, faMobileAlt, faPencilAlt, faWordpress,
  faGithub, faLinkedinIn, faTwitter, faInstagram, fa500px, faEnvelope);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Scrollspy, { easing: Easing.Circular.InOut });

new Vue({
  render: h => h(App),
}).$mount('#app');
