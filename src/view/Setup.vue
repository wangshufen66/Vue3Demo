<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
import Child from '../components/Child.vue';

// ref声明响应式数据，用于声明基本数据类型
const name = ref('哈哈哈');
// 修改
name.value = '小鲁班';

// reactive声明响应式数据，用于声明引用数据类型
const state = reactive({
  age: 18,
  sex: '男',
  info: {
    height: 180,
    hobby: 'ppp',
  },
  friends: [
    { id: 'a', name: 'mary' },
    { id: 'b', name: 'tom' },
    { id: 'c', name: 'peter' },
  ],
});
setTimeout(() => {
  state.info.hobby = 'rap';
  state.info.height = 199;
  state.friends = [
    { id: 'a1', name: 'mary1' },
    { id: 'b1', name: 'tom1' },
    { id: 'c1', name: 'peter1' },
  ];
}, 3000);
const appInfo = reactive({
  appName: 'APP 名字',
  appVersion: 'APP 版本',
  detail: {
    size: '99M',
    author: 'ddxx',
  },
});
const {appName, detail } = toRefs(appInfo);
console.log('detail-parent',detail);


// 修改
state.age = 28;

setTimeout(() => {
  state.age = 38;
}, 5000);


// console.log('qqq',toRefs(appInfo));

// console.log('appName',appName);
// console.log(detail.value);
</script>

<template>
  <h1>h1--{{ name }}</h1>
  <h1>h1--{{ state.age }}</h1>
  <h1>h1--{{ sex }}</h1>
  <h3>h3--{{ state.sex }}</h3>
  <Child :state="state" :appInfo="appInfo" :detail="detail"/>
</template>

<style scoped></style>
