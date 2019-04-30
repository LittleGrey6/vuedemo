<template>
  <div>
    <el-header>
      <vheader></vheader>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <vleft></vleft>
      </el-aside>
      <el-main>
        <vtable></vtable>
        <router-view name="main" class="main"/>
      </el-main>
    </el-container>
    <el-footer>
      我是页脚
    </el-footer>

  </div>
</template>


<script>
  import Header from '@/components/header';
  import Left from '@/components/left';
  import vtables from '@/components/Vtabs'
  import Vue from 'vue';

Vue.component("vheader",Header);
Vue.component("vleft",Left);
Vue.component("vtable",vtables);
export default {
 name: 'index',
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
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

  el-aside{ height: 100vh; background-color: rgb(84, 92, 100) }
  el-main{ height: 100vh;}
  .main{ height: 90vh;}
  el-footer{ height: 10vh;}
 *{
   margin: 0px;
   padding: 0px;
 }
</style>
