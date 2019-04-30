<template>
  <div>
    <div class="left">
      <router-link to="/layout/men1">菜单1</router-link>
      <router-link to="/layout/men2">菜单2</router-link>
    </div>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'HelloWorld页面内容'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left{width: 20%;float: left;height: 500px;background: skyblue}
  .main{width: 75%;float: left;height: 500px;background: lightpink}
</style>
