<template>
    <el-menu
        class="el-menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :defaultActive ="index"
        >
        <el-menu-item>后台管理系统</el-menu-item>
        <template v-for="nav in navconfig">
            <el-submenu v-if="nav.children" :index="nav.index" style="float:right">
                <template slot="title">{{nav.name}}</template>
                <el-menu-item v-for="subnav in nav.children" :index="subnav.index">{{subnav.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item  v-else style="float:right" :index="nav.index">
                {{nav.name}}
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
export default {
    name: 'vheader',
    data() {
     let index = '/index/message/index';
        let navconfig = [
	        {index:'/logout', name:'安全退出'},
            {
                index:'/index/member/index', name:'个人中心',children:
                [
                    {index: '/index/member/index', name:"用户信息"},
                    {index: '/index/member/history', name:'登录历史'}
                ]
            },
            {index:'/index/message/index', name:'消息中心'}
        ];
        return {
            index,
            navconfig
        };
    },


     methods: {
			      handleOpen(key, keyPath) {
                      console.log(key, keyPath);
			      },
			      handleClose(key, keyPath) {
                      console.log(key, keyPath);
			      }
     }
}
</script>
<style scoped>
.el-menu a{ text-decoration: none;}
</style>
