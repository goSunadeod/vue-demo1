// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueResource from 'vue-resource'
import router from './router'

import store from './store'
import 'com@/filters/money'
import 'com@/directives/focus'
import mixin from 'com@/mixin/formatDate'
import i18n from '@/locales'

import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

Vue.use(VueResource)
// Vue.mixin(mixin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { Layout },
  template: '<Layout/>'
})
