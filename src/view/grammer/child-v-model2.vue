<script setup lang="ts">
import { defineEmits } from 'vue';

// import { defineEmits, defineProps } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】

const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
  age: {
    type: Number,
    default: 0,
  },
  name: String,
  modelValue: String,
});
console.log('props.name',props.name);


const emit = defineEmits(['updata:msg', 'updata:age']);

const changeMsg = (e) => {
  emit('updata:msg', e.target.value);
};
const changeAge = (e) => {
  console.log('e.target', e.target.value);
  emit('update:age', e.target.value);
};
const changeName = (e) => {
  console.log('e.target', e.target.value);
  emit('update:name', e.target.value);
};
</script>

<template>
  <br /><br />
  <hr />
  <br /><br />
  <div>子组件：</div>
  <div>
    <!-- <input type="text" v-model="msg" @input="$emit('update:msg', $event.target.value)" />
    <input type="text" v-model="age" @input="changeAge" />
    <input type="text" v-model="name" @input="changeName" />
    <input type="text" v-model="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
  </div>
<input type="text" :value="name" @input="changeName" />
  <h1>{{ name }}</h1>
  <!-- <h1>{{ msg }}--{{ age }}--{{ name }}--{{ modelValue }}</h1> -->
</template>

<style scoped></style>
