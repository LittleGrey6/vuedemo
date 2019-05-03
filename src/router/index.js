import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Index from '@/view/Index'

import UserList from '@/view/user/Index'
import Grouplist from '@/view/group/Index'
import CategoryList from '@/view/category/Index'
import ArticalList from '@/view/artical/Index'



import memberIndex from '@/view/member/Index'
import memberEdit from '@/view/member/Edit'
import messagIndex from '@/view/message/Index'


Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
        {
            //登录页面的路由
            path: '/',
            name: 'Login',
            component: Login
        },
        {
          //登录页面的路由
          path: '/login',
          name: 'login',
          component: Login
        },
        {
            //后台页面
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                //消息中心
                {path:'message/index', name:"messageIndex", meta:{title:'消息中心'}, components:{main:messagIndex}},
                //个人中心
                {path: 'member/index', name:"memberIndex", meta:{title:'用户信息'},components:{main:memberIndex}},
                {path: 'member/edit', name:"memberEdit",components:{main:memberEdit}},
                {path: 'member/history', name:"memberhistory", meta:{title:'登录历史'}, components:{main:{template:'<h1>历史</h1>'}}},
                //用户管理
                {path: 'user/index', name:'userlist', meta:{title:'用户列表'}, components: {main:UserList}},
                {path: 'group/index', name:'Grouplist', meta:{title:'分组列表'}, components: {main:Grouplist}},
                {path: 'category/index', name:'CategoryList', meta:{title:'分类列表'}, components: {main:CategoryList}},
                {path: 'artical/index', name:'ArticalList', meta:{title:'文章列表'}, components: {main:ArticalList}},
                /*{path: '/user/index', name:'userlist', components: {main:userlist}},
                {path: '/user/index', name:'userlist', components: {main:userlist}},*/
                //分类管理模块

                //内容管理模块*/
            ]
        }
  ]
})
