<template>
  <div class="todolist">
    <input type="text" v-model="state.text" />
    <button @click="handleAdd">add</button>
      <ul>
        <li v-for="(item, index) of state.list" key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({list: [], text: ''});

function handleAdd() {
  if(!state.text) return;
  
  state.list.push(state.text);
  state.text = "";
}

</script>

<style lang="less">
  .todolist {
    > button {
      width: 50px;
      height: 30px;
      background: #ccc;
      cursor: pointer;
    }
  }
</style>