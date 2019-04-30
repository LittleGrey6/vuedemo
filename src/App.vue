<template>
  <div id="app">
    <!--{{this.$store.state.count}}<el-button @click="add()">- </el-button>-->
    <router-view/>
    <!--<HelloWorld></HelloWorld>-->
  </div>
</template>
<script>
//  import HelloWorld from '@/components/HelloWorld';
import login from '@/view/login'
  export default {
    name: 'App',
    methods:{
        add:function () {
          this.$store.commit('increment')
        },
      dec:function () {
        this.$store.dispatch('del')
      }
    },
    components:{
//      HelloWorld,
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
