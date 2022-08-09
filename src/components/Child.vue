<template>
  <div>Child</div>
  11-- {{ appInfo.appName }} <br />
  22-- {{ appName }}<br />
  33-- {{ appInfo.appVersion }}<br />
  44-- {{ appVersion }} <br />
  height:{{ state.info.height }}<br />
  hobby:{{ state.info.hobby }}<br />
  <hr />
  height:{{ height }}<br />
  hobby:{{ hobby }}<br />
  <div>
      <li v-for="item in state.friends">{{item.name}}</li>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps({
  appInfo: {
    type: Object,
    default: {},
  },
  state: {
    type: Object,
    default: {},
  },
  detail: {
    type: Object,
    default: {},
  },
});
const { appName, appVersion } = props.appInfo;
// console.log('appInfo',props.appInfo);
// console.log('state.info',props.state.info);

// const { height, hobby } = props.state.info;  // 第二层对象state.info里属性的响应式会丢失
const { height, hobby } = toRefs(props.state.info);

// console.log('appInfo', props.appInfo);
// console.log('state.info', props.state.info);
// console.log('state.info', props.state);
console.log('detail-child', props.detail);
</script>

<style scoped></style>
