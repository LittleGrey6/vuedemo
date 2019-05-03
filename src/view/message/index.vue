<template>
    <el-table
        style="width: 100%">
        <el-table-column
            label="id"
            width="180">
            1
        </el-table-column>
        <el-table-column
            label="标题"
            width="180">
            新留言
        </el-table-column>
        <el-table-column
            label="内容">
            询问相关vue学习的信息
        </el-table-column>
        <el-table-column
            label="状态">
            已读
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'MessageIndex',
}
</script>

<style scoped>
.el-card >>>.el-card__body{
    padding-top: 5px;
}
</style>
