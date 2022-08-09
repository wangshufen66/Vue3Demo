//组件内使用

<template>
  <h1>{{ mainStore.count }}</h1>
  <h1>{{ mainStore.info }}</h1>
  <hr />
  <h1>{{ count }}</h1>
  <h1>{{ info }}</h1>

  <h1>{{ mainStore.count11 }}</h1>

  <p>
    <button @click="alertData">修改数据count</button>
  </p>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/store';
const mainStore = useMainStore();
// 解构数据，但是得到的数据是不具有响应式的，只是一次性的
// 相当于仅仅只是...mainStore而已，只是做了reactive处理，并没有做toRefs
// const { count, info } = useMainStore();
// 解决方法：
// 1. 通过使用toRefs函数，因为前面所说相当于是通过reactive处理，因此可以
// const { count, info } = toRefs(mainStore);
// 2. 通过pinia中提供的storeToRefs方法来解决，推荐使用
const { count, info } = storeToRefs(mainStore);
const alertData = () => {
  //方式一
  //   mainStore.count += 10;
  // 方式二：若要同时修改多个数据，建议使用$patch来实现批量更新，在内部做了优化
  //   mainStore.$patch({
  //     count: mainStore.count + 1,
  //     info: "hello"
  //   })
  // 方式三：更好的批量更新方法，通过$patch传递一个函数来实现，这里的state就是useMainStore容器中的state
  //   mainStore.$patch((state) => {
  //     state.count += 10;
  //     state.info = 'pinia批量更新' + state.count;
  //   });
  // 方式四：通过 actions 来修改数据
  mainStore.changeState();
  mainStore.changeStates(10);
};
</script>

<style></style>
