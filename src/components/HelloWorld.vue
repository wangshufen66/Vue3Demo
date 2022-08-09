
<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h3>{{props.msg}}</h3>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref,defineProps } from "vue";

// defineProps<{ msg: string }>();


const count = ref(0);
// 声明props
const props = defineProps({
  msg: {
    type: String,
    default: "",
  },
});




</script>


<style scoped>

</style>
