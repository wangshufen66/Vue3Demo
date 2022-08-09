<!-- <script setup lang="ts">
import { defineProps, nextTick } from 'vue';
// 声明props
const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
});

// 调用nextTick
nextTick(() => {
  console.log('nextTick执行了...');
});
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style> -->


<script setup lang="ts">
  import { useSlots, reactive } from 'vue'
  const state = reactive({
    name: '东东吖',
    age: '25岁'
  })
  
  const slots = useSlots()
  // 匿名插槽使用情况
  console.log('slots.default',slots.default());
  const defaultSlot = reactive(slots.default && slots.default().length)
  console.log("defaultSlot",defaultSlot) // 1
  // 具名插槽使用情况
  console.log('slots.title()',slots.title());
  
  const titleSlot = reactive(slots.title && slots.title().length)
  console.log("titleSlot",titleSlot) // 3
</script>

<template>
<!-- 匿名插槽 -->
  <slot/>
  <!-- 具名插槽 -->
  <slot name='title'/>
   <!-- 作用域插槽 -->
  <slot name="footer" :scope="state" />


</template>

<style scoped>
</style>
