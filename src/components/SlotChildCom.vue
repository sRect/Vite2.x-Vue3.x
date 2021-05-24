<template>
  <div>
    <slot>默认插槽内容</slot>
    <br />
    <slot name="main">main默认类容</slot>
    <br />
    <slot name="footer" :arr="state.arr" :num="state.num" :handleClick="handleClick">
      footer默认类容
    </slot>
    <br />
    <!-- <slot name="footer2">footer2</slot> -->
  </div>
</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({
  arr: ['a', 'b', 'c'],
  num: 100
})

function handleClick() {
  alert("click")
}

</script>