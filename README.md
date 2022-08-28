.vue页面基本模板
import { onMounted } from “vue”;
页面加载onMounted
onMounted(()=>{//todo})
路由
import { useRoute, useRouter } from “vue-router”;
const route = useRoute();
const router = useRouter();
获取路由参数：const id = route.query.id
路由跳转： router.push( name: “login” ,query:{id:250});

调整git config