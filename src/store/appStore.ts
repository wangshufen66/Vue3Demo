import { defineStore } from 'pinia'

//  menuCollapse:false, 侧边栏收缩
 const appStore = defineStore({
  id: 'app',
  state: () => {
    return {
      user:{id: 0,userId:""},
      token: "xxxoooxoxox",
      menuCollapse:false,
      temp:{
        vendorId:"0",
        selectedProducts:[]
      }
    }
  },
  getters: {
  },
  actions: {
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'appid',
        storage: localStorage,
      }
    ]
  }
})

export default appStore;
