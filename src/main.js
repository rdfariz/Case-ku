import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeResolve((to, from, next) => {
  if (`${to.meta.title}` != 'Daftar Produk') {
    document.title = `Case-ku / ${to.meta.title}`
  }else {
    document.title = `Case-ku / ${to.meta.title}`
  }

	if (to.name) {
	    NProgress.start()
	}
	next()
})

router.afterEach((to, from) => {
	NProgress.done()
})

import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
Vue.use(PerfectScrollbar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
