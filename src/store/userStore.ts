import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state:()=>{
  	return {
        name:""
  	}
  },
  getters:{

  },
  actions:{
  	
  },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
              key: 'my_user',
              storage: localStorage,
            }
          ]
      }
})
