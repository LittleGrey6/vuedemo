<template>
    <el-tabs v-model="this.$store.state.activeIndex" type="card"  closable @tab-remove="deleteTabs" @tab-click="clickTabs" style="margin-bottom: 10px;">
        <el-tab-pane
            v-for="(item, index) in this.$store.state.tabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        beforeMount() {
            this.$store.state.tabs.push({  //初始化tab的第一个选项
                title: '消息中心',
                name: '/index/message/index',
            });
            this.$store.state.activeIndex = '/index/message/index';   //初始化tab默认项
        },
        methods: {
            clickTabs(targetItem){
                let name = targetItem.name;
                this.$store.commit('changetab', name);   //tab选中状态
                this.$router.push({path:name});   //路由跳转
            },
            deleteTabs(targetName) {
                if (targetName != '/index/message/index') {
                    this.$store.commit('deletetab', targetName);
                    let lastTab = this.$store.state.tabs[this.$store.state.tabs.length-1];
                    this.$router.push(lastTab['name']);
                }
            }
        }
    }
</script>

<style scoped>
/*.el-tabs{ height: 5vh;}*/
</style>
