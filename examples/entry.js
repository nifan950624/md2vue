import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import routes from './route.config'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css'
import './assets/style/common.scss'

Vue.use(VueRouter)
Vue.component('demo-block', demoBlock)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  document.title = 'NUI';
});

new Vue({ // eslint-disable-line
  template: '<App/>',
  components: {App},
  router
}).$mount('#app')

