import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWecharTitleTitle from 'vue-wechat-title';
import App from './App'
import store from './store/store'
import {APIS} from './service/apis'
import {HTTP_CODE} from "./service/axios_constants";
Vue.config.productionTip = false

// vue-devTools 正式禁用
const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.devtools = isDebug_mode;

Vue.prototype.$apis = APIS;
Vue.prototype.$httpCode = HTTP_CODE;
Vue.use(ElementUI);
Vue.use(VueWecharTitleTitle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 配置路由名称
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
