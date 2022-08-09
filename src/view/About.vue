<template>
  <hello-world />
  <HelloWorld msg="from about"></HelloWorld>

  <h1>{{ count }}</h1>
  <h1>{{doubleCount}}</h1>
  <h1>{{ age }}</h1>
  <h3>{{ sex }}</h3>
  <!-- 调用方法 -->
  <button @click="changeAge()">点我</button>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, computed } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

// ref声明响应式数据，用于声明基本数据类型
const count = ref(1);

//computed获取双倍count'
const doubleCount = computed(() => {
  return count.value * 2;
});
// reactive声明响应式数据，用于声明引用数据类型
const state = reactive({
  age: 24,
  sex: '男',
});
// 使用toRefs解构  template可直接使用{{name}}、{{sex}}
const { age, sex } = toRefs(state);

// 声明method方法
const changeAge = () => {
  state.age += 1;
};
</script>

<style scoped></style>
