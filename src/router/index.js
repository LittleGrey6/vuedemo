import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
// import Layout from '@/components/Layout'
import ElementUI from 'element-ui'
import index from '@/view/index'
import UserList from '@/view/user/index'
import memberIndex from '@/view/member/Index'
import memberEdit from '@/view/member/Edit'
import messageIndex from '@/view/message/index'




Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        //消息中心
        {path:'message/index',name:'messageIndex',components:{main:messageIndex}},
        //个人中心
        {path: 'member/index', name:"memberIndex", components:{main:memberIndex}},
        {path: 'member/edit', name:"memberEdit", components:{main:memberEdit}},
        {path: 'member/history', name:"memberhistory", components:{main:{template:'<h1>历史</h1>'}}},
        //用户管理
        {path: 'user/index', name:'userlist', components: {main:UserList}},
        /*{path: '/user/index', name:'userlist', components: {main:userlist}},
         {path: '/user/index', name:'userlist', components: {main:userlist}},*/
        //分类管理模块

        //内容管理模块*/
      ]
    }

  ]
})
