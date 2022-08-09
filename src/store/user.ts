import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'zs',
      age: 18,
    };
  },
});

export default useUserStore;
