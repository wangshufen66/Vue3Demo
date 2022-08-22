<template>
  <div>
    <el-button @click.prevent="onGetInfo"> 获取信息 </el-button>
  </div>
</template>

<script setup lang="ts">
import { getInfo } from '@/api/index';

const onGetInfo = async () => {
  console.log('哈哈哈哈');
  const res = await getInfo();
  console.log('resoo', res);
};
</script>

<style scoped></style>
