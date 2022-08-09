<template>
  {{ props.msg }}

  <!-- 可省略props -->
  <h1>{{ msg }}</h1>

  <!-- 调用子传父事件 -->
  <button @click="changeMsg">点我</button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

// import { defineEmits, defineProps } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】

// 声明props
const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
});

// 声明emit
const emit = defineEmits(['changeMsg']);

// 声明子传父事件
const changeMsg = () => {
  emit('changeMsg', '我是子组件传过来的值');
};
</script>

<style scoped></style>
