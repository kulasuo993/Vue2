import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Focus from '@/directives/Focus'
// import myMixin from '@/mixins/mixin.js'
import myPlugins from '@/plugins/index'

// Vue.mixin(myMixin) // 全局混入mixin
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Focus)
Vue.use(myPlugins, {name: 'xiaoming'})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
