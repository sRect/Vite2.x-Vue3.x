<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p class="p">name: <span>{{jsonData.name}}</span>, age: {{jsonData.age}}</p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
import jsonData from '@/assets/test.json';
import './helloWorld.css';

defineProps({
  msg: {
    type: String,
    default: 'hello'
  }
})

const state = reactive({ count: 0 })
</script>

<style scoped lang="less">
@import './test.less';
a {
  color: #42b983;
}
</style>
