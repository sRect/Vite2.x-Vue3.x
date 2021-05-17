<template>
  <div>
    <!-- 我们给span标签加入一个title属性，属性的值也想使用message -->
    <span v-bind:title="state.message">mesage: {{state.message}}</span> | 
    <!-- 简写 -->
    <span :title="state.message">{{state.message}}</span>
  </div>
</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({
  message: 'hello'
})
</script>
