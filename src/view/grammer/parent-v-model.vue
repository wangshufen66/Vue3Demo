<!-- <template>
  <div>
    <Child :val="val" />
    <Child val="name11" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
// 引入子组件
import Child from './child.vue';
let val = ref('小叮当111');
</script> -->
<!-- ------------------------------------------------------ -->
<!-- <template>
  <child @aboutExeVisible="aboutExeHandleCancel" />
</template>
<script setup>
import { reactive } from 'vue';
// 导入子组件
import child from './child.vue';

const data = reactive({
  aboutExeVisible: false,
});
// content组件ref

// 关于系统隐藏
const aboutExeHandleCancel = () => {
  data.aboutExeVisible = false;
};
</script> -->

<!-- ------------------------------------------------------ -->

<!-- <template>
  <button @click="toHome">回首页</button>
  <button @click="onClickSetUp">点击</button>
  <child ref="content" />
</template>

<script setup>
import { ref } from 'vue';
import child from './child.vue';
// content组件ref
const content = ref('content');
console.log('content', content);

// 点击设置
const onClickSetUp = () => {
  console.log('content', content.value);
  content.value.modelVisible = !content.value.modelVisible;
};

import { useRoute, useRouter } from 'vue-router';
//路由跳转
const route = useRoute();
const router = useRouter();
// 获取query
console.log(route.query);
// 获取params
console.log(route.params);
const toHome = () => {
  router.push({
    path: `/`,
    // name: 'home',
  });
};
</script> -->

<!-- ------------------------------------------------------ -->

<!-- <script setup lang="ts">
import { ref, reactive, nextTick, toRefs } from 'vue';
// 引入子组件(组件自动注册)
import child from './child.vue';

const state = reactive({
  msg: '父组件原本的值',
  age: 24,
});
const { msg, age } = toRefs(state);
console.log('msg-', msg);
console.log('age-', age);

nextTick(() => {
  console.log('nextTick执行了...');
  state.msg = '我是nextTick执行后的值';
});

const modelValue = ref<string>('5');
const age = ref<string>('13');
</script>

<template>
  <div>父组件：</div>
  <div>{{ state.msg }}--{{ msg }}</div>
  <div>{{ state.age }}--{{ age }}</div>
  {{ age }}
  <child v-model="msg" />
  <child v-model="age" />
  <input type="text" v-model="state.msg" />--<input type="text" v-model="msg" /> <br />
  <p>{{ age }}</p>
  <input type="text" v-model="state.age" />
  --<input type="text" v-model="age" />

  <child v-model:msg="state.msg" v-model:age="state.age" />

  <child :msg="state.msg" :age="state.age" />

  <h5>h5--{{ modelValue }}</h5>
  <child v-model="modelValue" />
</template>

<style></style> -->

<!-- //父组件： -->

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue';
// 引入子组件(组件自动注册)
import child from './child.vue';

// const state = reactive({
//   msg: '我是父组件原本的值',
//   age: 24,
// });
const msg = ref('我是父组件原本的值');
const age = ref('24');

// watchEffect(() => {
//   console.log('effect:', msg);
// });
</script>

<template>
  <div>父组件：</div>
  <!-- <div>{{ state.msg }}--{{ state.age }}</div> -->
  <div>{{ msg }}--{{ age }}</div>
  <div>
    <input type="text" v-model="msg" />--
    <input type="text" v-model="age" />
  </div>

  <child v-model:msg="msg" v-model:age="age" />
</template>

<style></style>
