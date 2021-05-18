<template>
  <div>
    <h3>Suspense 异步组件</h3>
    uuid: {{state.uuid}}
  </div>
</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({
  uuid: null
});

function handleGetUuid() {
  return new Promise((resolve) => {
    fetch('https://httpbin.org/uuid')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTimeout(() => {
          resolve(data.uuid);
        }, 1000)
      })
      .catch(e => {
        console.log(e);
      })
  });
}

const uuid = await handleGetUuid();
state.uuid = uuid;

</script>