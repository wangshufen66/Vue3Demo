<template>
  <div>Home Page</div>
  <div>
    <router-link to="api"><span>to Api</span> </router-link>
    ||
    <router-link to="hello"><span>to helloworld</span> </router-link>
    ||
    <router-link to="about"> <span>to about</span></router-link>
    ||
    <router-link to="setup"> <span>to setup</span></router-link>
    ||
    <router-link to="grammer"> <span>to grammer</span></router-link>
    ||
    <router-link to="pinia"> <span>to pinia</span></router-link>
    <hello-world />
    <HelloWorld msg="from home"></HelloWorld>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
</script>

<style></style>
