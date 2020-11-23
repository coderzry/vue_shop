import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element ui 通过cdn优化 就不用在此导入了
// import './plugins/element.js'
// 导入字体图标
import './assets/font/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入树形表格组件
import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

// 导入 Nprogress 包对应的JS和CSS
import Nprogress from 'nprogress'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://47.96.17.139:3001/api/private/v1/'
// 在 request 拦截器中，展示进度条 Nprogress.start()
axios.interceptors.request.use(config => {
  Nprogress.start()
  // 为请求头对象 添加Token 验证的 Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
// 在 request 拦截器中，隐藏进度条 Nprogress.done()
axios.interceptors.response.use(config => {
  Nprogress.done()
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 注册树形表格组件为全局可用组件
Vue.component('tree-table', TreeTable)

// 将富文本编辑器注册为全局可用的组件
Vue.use(VueQuillEditor)

// 时间格式化过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
