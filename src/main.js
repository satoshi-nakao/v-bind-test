import Vue from 'vue'
import App from './App.vue'
import Vbind from './Vbind.vue'
import Title from './Title.vue'

Vue.config.productionTip = false
Vue.component('Vbind', Vbind);
Vue.component('Title',Title);
new Vue({
  render: h => h(App),
}).$mount('#app')
