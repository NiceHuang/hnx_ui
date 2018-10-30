// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import NxButton from '../packages/components/button/src/Button'

Vue.config.productionTip = false
/* eslint-disable no-new */
// Vue.components("nx-button", {NxButton});
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
