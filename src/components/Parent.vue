 <template>
  <HelloWorld :msg='state.msg' @changeMsg="changeMsg" />
</template>
 
<script setup lang="ts">
import { reactive } from "vue";
// 引入子组件(组件自动注册)
import HelloWorld from "./components/HelloWorld.vue";
 
const state = reactive({
  msg: "我是父组件原本的值",
});
 
const changeMsg = (val) => {
  state.msg = val;
};
</script>
 

<style>
</style>