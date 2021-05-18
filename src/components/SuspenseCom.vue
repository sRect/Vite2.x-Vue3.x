<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>

    <template #fallback>
      <div class="loading">
        Loading...
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import AsyncComponent from '@/components/AsyncComponent.vue'
</script>


<style lang="less" scope>
  .loading {
    color: #fff;
    font-size: 30px;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
</style>