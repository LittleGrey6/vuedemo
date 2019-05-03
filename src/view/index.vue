<template>
    <el-container>
        <el-header>
            <vheader></vheader>
        </el-header>
        <el-container>
            <el-aside >
                <vmenu></vmenu>
            </el-aside>
            <el-main>
                <vtabs></vtabs>
                <div class="mainpage">
                <router-view name="main" class="main"/>
                </div>
                <el-footer>
                   	 我是页脚 版权所有
                </el-footer>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
//引入布局头部
import vheader from "@/components/Header"
import vmenu from "@/components/Menu"
import vtabs from "@/components/Vtabs"
export default {
    name: 'Index',
    components: {vheader, vmenu, vtabs},
    beforeMount() {
        this.$router.push({name:'messageIndex'})
    },
    watch:{
        '$route':function(to,from){
            this.$store.commit('addtab',{title:to.meta.title, name:to.path});
        }
    }
}
</script>

<style scoped>
el-container{ height: 100vh;}
.el-container >>>el-header{
    margin: 0;
    padding: 0;
    height: 10vh;
}
.el-header{padding: 0px!important;margin: 0px}
.el-aside{ height: 90vh;}
.el-main{ height: 90vh; padding:10px;}
.el-main .el-tabs{height: 10vh;}
.el-main .mainpage{height: 67vh;}
.el-main .el-footer{ height: 5vh; }
</style>
