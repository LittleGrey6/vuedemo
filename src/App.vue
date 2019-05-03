<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
body{margin: 0; padding: 0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header{padding: 0px!important;margin: 0px}
.el-aside{ height: 90vh; width: auto!important;}
el-main{ height: 90vh; padding:10px;}
el-main .main{ height: 90vh; }
el-main el-footer{ height: 10vh; }
</style>
