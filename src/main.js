import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { faCode, faBlog, faUser, faAddressCard, faAt, faFileCode } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faCode, faBlog, faUser, faAddressCard, faLinkedin, faTwitter, faAt, faFileCode, faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
