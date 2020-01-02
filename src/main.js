import Vue from 'vue'
import AtUI from 'at-ui';
import 'at-ui-style';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import truncate from 'vue-truncate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.prototype.$http = axios
Vue.use(truncate)
Vue.use(AtUI)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
