<template>
  <el-container>
    <el-header>
      <vheader></vheader>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <vmenu></vmenu>
      </el-aside>
      <el-main>
        <router-view name="main"/>
        <el-footer>
          我是页脚 版权所有
      </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  //引入布局头部
  import vheader from "@/components/header"
  import vleft from "@/components/left"
  export default {
    name: 'Index',
    components: {vheader, vleft},
  }
</script>

<style scoped>
  .el-header{
    margin: 0;
    padding: 0;
  }
  .el-header a{
    text-decoration: none;
  }
</style>
