import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



import HelloWorld from '@/components/HelloWorld'
import test from "@/components/test/test.vue"

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
