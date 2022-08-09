<script setup lang="ts">
// import useCounterStore from '@/store/counter';
// 使用 Store
// const counter = useCounterStore();
// console.log(counter);
import { storeToRefs } from 'pinia';

import useStore from '@/store';
const { counter } = useStore();
// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { count, double } = storeToRefs(counter);
console.log('count',count);
</script>

<template>
  <h1>轻量状态管理库 Pinia</h1>
  <h2>Store：{{ count }}</h2>
  <h2>状态 count：{{ counter.count }}</h2>

  <h1>根组件---{{ counter.count }}</h1>
  <button @click="counter.add">加1</button>
  <button @click="counter.addAsync">异步加1</button>
</template>
