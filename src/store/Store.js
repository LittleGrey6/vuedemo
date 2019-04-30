/**
 * Created by Administrator on 2019/4/27.
 */
import  Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex: '',
    tabs: []
  },
  mutations: {
    addtab (state, tabitem) {
      for ( let item of state.tabs) {
        if (item.name == tabitem.name) {
          alert('已存在');
          state.activeIndex = tabitem.name;  //已经存在的话 变成选中状态
        } else {
          alert('新加入');
          state.tabs.push(tabitem);
        }
      }
    }
  }
})
