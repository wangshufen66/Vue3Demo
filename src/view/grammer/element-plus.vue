<template>
  <div>
    <el-button @click.prevent="deleteRow(scope.$index)"> 删除 </el-button>
  </div>
</template>

<script setup lang="ts">
const deleteRow = (index: number) => {
  //todo
};
</script>

<style lang="scss" scoped></style>
