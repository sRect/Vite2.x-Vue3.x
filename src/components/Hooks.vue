<template>
  <div>
    <h3>hooks</h3>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="increase(4)">increase</button>
    <button @click="decrease(2)">increase</button>
    
    <div>
      <Dialog v-if="state.visible" />

      <button @click="handleDialogVisible">dialog</button>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import useCount from "@/hooks/useCount";
import Dialog from "@/components/Dialog.vue";

const state = reactive({
  visible: false
});

const { count, doubleCount, increase, decrease } = useCount(10);

function handleDialogVisible() {
  state.visible = !state.visible;
}
</script>
