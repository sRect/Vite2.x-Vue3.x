<template>
  <div>
    <h3>hooks</h3>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="increase(4)">increase</button>
    <button @click="decrease(2)">increase</button>
  </div>
</template>

<script setup>
import useCount from "@/hooks/useCount";

const { count, doubleCount, increase, decrease } = useCount(10);
</script>
