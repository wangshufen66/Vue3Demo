<!-- <script setup lang="ts">
import { reactive, nextTick } from 'vue';
// 引入子组件(组件自动注册)
import child from './child.vue';

const state = reactive({
  msg: '我是父组件原本的值',
});

// 调用nextTick
nextTick(() => {
  console.log('nextTick执行了...');
  state.msg = '我是nextTick执行后的值';
});
</script>

<template>
  <child v-model:msg="state.msg" />
</template>

<style></style> -->

//slot  插槽


<script setup lang="ts">
import child from "./child.vue";

</script>

<template>
<child>
   <!-- 匿名插槽 -->
    <span>我是默认插槽1</span>
    <span>我是默认插槽2</span>
    <!-- / 具名插槽 -->
    <template #title>
      <h1>我是具名插槽1</h1>
      <h1>我是具名插槽2</h1>
      <h1>我是具名插槽3</h1>
      <h1>我是具名插槽4</h1>
    </template>
    <!-- 作用域插槽 -->
    <template #footer="{ scope }">
      <div>作用域插槽——姓名： {{scope}} {{ scope.name }}，年龄{{ scope.age }}</div>
    </template>
  </child>
</template>

<style>
</style>
