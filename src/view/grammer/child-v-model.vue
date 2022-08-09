<!-- <template>
  <span class="epam">{{ props.val }}</span>
  <div class="ss">kkk</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// 声明props
const props = defineProps({
  val: {
    type: String,
    default: '22',
  },
});
console.log(props.val);
// 或者
//const props = defineProps(['name'])
</script> -->

<!-- <template>
  <button @click="isOk"> 确定 </button>
</template>
<script setup>
import { defineEmits } from 'vue';

// emit
const emit = defineEmits(['aboutExeVisible']);

// 点击确定按钮
const isOk = () => {
    console.log('确定...');
  emit('aboutExeVisible');
};
</script> -->

<!-- ------------------------------------------------------ -->

<!-- <template>
  <div>child</div>
  <p>{{ data }}</p>
</template>

<script setup>
import { reactive, toRefs } from 'vue';

// 数据部分
const data = reactive({
  modelVisible: false,
  detail:'ddd'
});
defineExpose({
  ...toRefs(data),
});
</script> -->

<!-- ------------------------------------------------------ -->

<!-- <script setup lang="ts">
import { defineEmits, nextTick } from 'vue';

// import { defineEmits, defineProps } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】

// 声明props
const props = defineProps({
  msg: {
    type: String,
    default: '默认值',
  },
  age: {
    type: String,
    default: 2,
  },
  modelValue: String,
  //   age: String,
});
// console.log('props-msg', props.msg);
console.log('props-age', props.age);
console.log('props-age', props.age);

// 声明emit
const emit = defineEmits(['updata:age']);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>(); //同下面
const emit = defineEmits(['update:modelValue']);

const changeMsg = (e) => {
  console.log('changeMsg', e.target.value);
  emit('updata:msg', e.target.value);
};
const changeAge = (e) => {
  console.log('changeAge', e.target.value);
  emit('updata:age', e.target.value);
};

const input = (e) => {
  emit('update:modelValue', e.target.value);
};

调用nextTick
nextTick(() => {
  console.log('nextTick执行了...');
});
</script>

<template>
  <hr />
  <div>子组件：</div>
  <input :value="modelValue" @input="input" />
  <div> {{modelValue}} </div>
  <input type="text" v-model="msg" @input="changeMsg" />
  <input type="text" v-model="age" @input="changeAge" />
  <h1>{{ msg }}</h1>
  <h1>{{ age }}</h1>
</template>

<style scoped></style> -->

<!-- //子组件： -->

<script setup lang="ts">
import { defineEmits,computed } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
  age: {
    type: String,
    default: 0,
  },
});
 

const emit = defineEmits(['updata:msg', 'updata:age']);
</script>

<template>
  <hr />
  <div>子组件：</div>
  <h1>666--{{ msg }}</h1>
  <h1>777--{{ age }}</h1>
  <input type=" text" v-model="msg" @input="$emit('update:msg', $event.target.value)"/>
  <input type="text" v-model="age" @input="$emit('update:age', $event.target.value)"/>
</template>

<style scoped></style>
