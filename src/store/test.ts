import { defineStore } from 'pinia';
import axios from 'axios';
export default defineStore('main', {
  state: () => {
    return {
      count: 10,
      name: '何志伟',
      list: [
        {
          name: 'ipone',
          price: 5800,
          count: 1,
        },
        {
          name: 'huawei',
          price: 5800,
          count: 2,
        },
      ],
      timuList: [],
    };
  },
  // 使用该插件，开启数据缓存
  persist: {
    //这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        //key的名称
        key: 'my_user',
        //更改默认存储，我更改为localStorage
        storage: localStorage,
        // 可以选择哪些进入local存储，这样就不用全部都进去存储了
        // 默认是全部进去存储
        paths: ['list'],
      },
    ],
  },
});
