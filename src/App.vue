<template>
  <button @click="goHome">回首页</button>
  <router-view />
</template>

<script setup lang="ts">
const goHome = () => {
  window.location.href = '/'
};
</script>

<style></style>
