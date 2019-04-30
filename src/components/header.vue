<template>
  <el-menu
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
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
    let index = '/index/mesage/index';
    let navconfig = [
      {index:'/', name:'安全退出'},
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
      navconfig,
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu{
    border-right:0px;
  }

  .el-menu-demo1 el-menu-item{
    color:  rgb(255, 255, 255)
  }

</style>
