<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#F2F6FC"
        text-color="#303133"
        active-text-color="#C0C4CC"
        router

        :collapse="isCollapse"

        >
        <el-menu-item @click="dianji" v-model="isCollapse"></el-menu-item>
        <el-submenu index="1" v-for="menu in menuconfig">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.name}}</span>
            </template>
            <el-menu-item-group v-for="submenu in menu.chilren" title="分组1">
                <template slot="title">{{submenu.name}}</template>
                <el-menu-item :index="childmenu.path" v-for="childmenu in submenu.children">{{childmenu.name}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'vmenu',
    data() {
    	let isCollapse = false;
        let menuconfig = [
            {
                id:1, name:'系统设置', chilren:
                    [
                        {
                            id: 2, name: '用户管理',
                            children: [
                                {id: 3, name: "用户列表", path: '/index/user/index'}
                            ]
                        },
                        {
                            id: 2, name: '分组管理',
                            children: [
                                {id: 3, name: "分组列表", path: '/index/group/index'}
                            ]
                        }
                    ]
            },
            {
                id:1, name:'内容管理', chilren:
                    [
                        {
                            id: 2, name: '分类管理',
                            children: [
                                {id: 3, name: "分类列表", path: '/index/category/index'}
                            ]
                        },
                        {
                            id: 2, name: '文章管理',
                            children: [
                                {id: 3, name: "文章列表", path: '/index/artical/index'}
                            ]
                        }
                    ]
            }
        ]
        return {menuconfig,isCollapse}
    },
    methods: {
        handleOpen(key, keyPath) {
        },
        handleClose(key, keyPath) {
        },
        dianji(){
			this.isCollapse = !this.isCollapse
		}
    }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
			    width: 200px;
			    min-height: 400px;
			  }
.el-menu-vertical{ background: #F2F6FC; height: 90vh;}
</style>
