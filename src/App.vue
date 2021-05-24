<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <JsxCom />
  <hr />
  <SuspenseCom />
  <hr />
  <AsyncComponent2 />
  <hr />
  <Todolist />
  <hr />
  <Vbind />
  <hr />
  <DynamicArg />
  <hr />
  <CompositionApi />
  <hr />
  <LifeCycle />
  <hr />
  <Hooks />
  <hr />
  <SlotParentCom />
  
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import JsxCom from '@/components/JsxCom.vue';
import Todolist from '@/components/Todolist.vue';
import Vbind from '@/components/Vbind.vue';
import DynamicArg from '@/components/DynamicArg.vue';
import CompositionApi from '@/components/CompositionApi.vue';
import LifeCycle from '@/components/LifeCycle.vue';
import Hooks from '@/components/Hooks.vue';
import SuspenseCom from '@/components/SuspenseCom.vue';
import AsyncComponent2 from '@/components/AsyncComponent2.vue';
import SlotParentCom from '@/components/SlotParentCom.vue';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
