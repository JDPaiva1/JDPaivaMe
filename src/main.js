import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// eslint-disable-next-line
import { faWordpress, faGithub, faLinkedinIn, faTwitter, faInstagram, fa500px } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line
import { faCode, faMobileAlt, faPencilAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Scrollspy, { Easing } from 'vue2-scrollspy';
import 'lazysizes';

import App from './App.vue';

Vue.config.productionTip = false;
library.add(faCode, faMobileAlt, faPencilAlt, faWordpress, faGithub, faLinkedinIn, faTwitter,
  faInstagram, fa500px, faEnvelope);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Scrollspy, { easing: Easing.Circular.InOut });

new Vue({
  render: h => h(App),
}).$mount('#app');
