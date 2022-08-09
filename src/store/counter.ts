import { defineStore } from 'pinia';

// 定义 Store, 命名建议： useXxxxStore
// 参数1：Store 的唯一标识
// 参数2：配置对象，可以提供 state actions getters
const useCounterStore = defineStore('counter', {
  // 相当于组件 data
  state() {
    return {
      count: 0,
    };
  },
  // 相当于组件 computed
  getters: {},
  // 相当于组件 methods
  actions: {
    add() {
      this.count++;
    },
    addAsync() {
      console.log('addAsync');

      setTimeout(() => {
        this.count += 3;
      }, 1000);
    },
  },
});

// 导出 Store
export default useCounterStore;
