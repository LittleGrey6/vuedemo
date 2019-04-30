<template>
  <el-row class="tac">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>

        <el-submenu index="1" v-for="item in fig">
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="submenu in item.children">
            <template slot="title"  >{{submenu.name}}</template>
            <el-menu-item :index="submenu2.path" v-for="submenu2 in submenu.children">{{submenu2.name}}</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      </el-menu>
  </el-row>
</template>

<script>

export default {
  name: 'Left',
  data(){
    let fig = [
      {id:1,name:"系统设置",children:[
        {id:2,name:"用户管理",children:[
          {id:3,name:"用户列表",path:"/index/user/index"},
          {id:4,name:"用户添加",path:"/index/user/create"}
        ]},
        {id:2,name:"分组管理",children:[
          {id:3,name:"分组列表",path:"/index/group/index"},
          {id:4,name:"分组添加",path:"/index/group/create"}
        ]}
      ]
      },
      {id:1,name:"内容管理",children:[
        {id:2,name:"角色管理",children:[
          {id:3,name:"角色列表",path:"/index/role/index"},
          {id:4,name:"角色添加",path:"/index/role/create"}
        ]},
        {id:2,name:"技术管理",children:[
          {id:3,name:"技术列表",path:"/index/technology/index"},
          {id:4,name:"技术添加",path:"/index/technology/create"}
        ]}
      ]
      }
    ];
    return {fig}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-submenu el-menu-item{min-width: 195px}
el-menu{ height: 100vh;}
</style>
