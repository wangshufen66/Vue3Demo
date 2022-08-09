<template>
  <!-- <div>{{ sum }}</div> -->
  <!-- <div>{{ person.fullName }}</div> -->
  <parent />
  <!-- <parent2 /> -->
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, watch, computed,getCurrentInstance } from 'vue';
import parent from './parent.vue';
// import parent2 from './parent-v-model2.vue'

// 获取原型
const instance  = getCurrentInstance();
// console.log('instance',instance.proxy)

let sum = ref(0);
// let msg = ref('你好啊');
// let person = reactive({
//   name: '张三',
//   age: 18,
//   job: {
//     j1: {
//       salary: 20,
//     },
//   },
// });

// 监听  watch  watchEffect
// 两种监听格式
// watch(
//   [sum, msg],
//   (newValue, oldValue) => {
//     console.log('sum或msg变了', newValue, oldValue);
//   },
//   { immediate: true }
// );

// watch(
//   () => person.job,
//   (newValue, oldValue) => {
//     console.log('person的job变化了', newValue, oldValue);
//   },
//   { deep: true }
// );
// watchEffect(() => {
//   const x1 = sum.value;
//   console.log('watchEffect所指定的回调执行了');
// });

//计算属性
//数据
let person = reactive({
  firstName: '小',
  lastName: '叮当',
});
// 计算属性简写
person.fullName = computed(() => {
  return person.firstName + '-' + person.lastName;
});
// 完整写法
// person.fullName = computed({
//   get() {
//     return person.firstName + '-' + person.lastName;
//   },
//   set(value) {
//     const nameArr = value.split('-');
//     person.firstName = nameArr[0];
//     person.lastName = nameArr[1];
//   },
// });
</script>

<style></style>
