import Vue from 'vue'
// 按需导入组件
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 挂载到vue原型 每个组件都可使用
Vue.prototype.$message = Message
