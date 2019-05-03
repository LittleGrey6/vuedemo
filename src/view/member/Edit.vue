<template>
    <el-container>
        我是修改页
    </el-container>
</template>

<script>
//引入布局头部

export default {
    mounted: function () {
        console.log(this.$route.query.id);
    }
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
