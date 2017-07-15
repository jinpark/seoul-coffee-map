// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import backand from '@backand/vanilla-sdk'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAV4SPB8Q4B7yPVzeKgNYi1PjIPnzunlLA',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeMount: () => {
    backand.init && backand.init({
      appName: 'coffeemap',
      signUpToken: '9d6ccfb4-6afd-4213-88fb-e0140b52fdee',
      anonymousToken: 'ca6e2608-f65e-4673-875a-131b51071c4e'
    })
  }
})
