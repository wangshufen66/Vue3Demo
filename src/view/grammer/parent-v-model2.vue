<script setup lang="ts">
import { reactive, ref } from 'vue';
// 引入子组件(组件自动注册)
// import child from './child.vue';
import child2 from './child-v-model2.vue';
const state = reactive({
  msg: '我是父组件原本的值',
  age: 24,
});
const name = ref('wsf');
const modelValue = ref('AA');
</script>

<template>
  <div>父组件：</div>
  <div>{{ state.msg }}--{{ state.age }}</div>
  <div>{{ name }}</div>
  <div>
    <!-- <input type="text" v-model="state.msg" />
    <input type="text" v-model="state.age" /> -->
    <input type="text" v-model="name" />
    <!-- <input type="text" v-model="modelValue" /> -->
  </div>

  <!-- <child v-model:msg="state.msg" v-model:age="state.age" v-model:name="name" v-model="modelValue"/> -->
  <!-- <child  v-model:name="name"/> -->
  <child2 v-model:name="name" />
</template>

<style></style>
