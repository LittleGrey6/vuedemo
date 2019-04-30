<template>
  <el-tabs v-model="this.$store.state.activeIndex" type="card" editable @tab-click="clickTabs">
    <el-tab-pane
      :key="item.name"
      v-for="(item, index) in editableTabs"
      :label="item.title"
      :name="item.name"
    >
  </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Vtabs',
  beforeMount(){
      this.$store.state.tabs.push({
        title:'消息中心',
        name:'/index/massage/index'
      });
      this.$store.state.activeIndex='/index/message/index'
  },
  data() {
  },
  methods: {
    clicktabs(targetName, event) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
