import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';

// 全局引入message（模拟Vuex的引用方式）
import message from "./lib/message"
Vue.use(message)

Vue.config.productionTip = false

Vue.prototype.$dispatch = function (eventName, value) {
  let target = this;
  while (target) {
    target.$emit(eventName, value);
    target = target.$parent
  }
}
Vue.prototype.$broadcast = function (eventName, value) {
  const broadcast = (children) => {
    children.forEach(child => {
      child.$emit(eventName, value);
      if (child.$children) {
        broadcast(child.$children);
      }
    });
  }
  broadcast(this.$children);

}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
