<template>
  <div>
    <!-- 属性的动态绑定和事件的动态绑定 -->
    <button @[state.event]="handleClick" :[state.name]="state.msg">btn</button>
  </div>
</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({
  event: 'click',
  name: 'title',
  msg: 'hello'
});

function handleClick() {
  alert('click')
}
</script>