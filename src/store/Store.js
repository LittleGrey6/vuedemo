import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default  new Vuex.Store({
    state: {
        activeIndex: '',   //设定默认tab
        tabs: []
    },
    mutations: {
        addtab (state, tabitem) {
            let flag = false;   //关
            for ( let item of state.tabs) {
                if (item.name == tabitem.name) {
                    flag = true;
                }
            }
            if (flag) {
                state.activeIndex = tabitem.name;  //已经存在的话 变成选中状态
            } else {
                state.tabs.push(tabitem);
                state.activeIndex = tabitem.name;
            }
            return
        },
        changetab(state, name) {
            for ( let item of state.tabs) {
                if (item.name == name) {
                    state.activeIndex = item.name;  //已经存在的话 变成选中状态
                    break
                }
            }
            return;
        },
        deletetab(state, name) {
            for ( let [key, item] of state.tabs.entries()) {
                if (item.name == name) {
                    state.tabs.splice(key, 1);  //已经存在的话 变成选中状态
                    let lastitem = state.tabs[state.tabs.length-1];
                    state.activeIndex = lastitem['name'];
                    break
                }
            }
        }
    },
})
