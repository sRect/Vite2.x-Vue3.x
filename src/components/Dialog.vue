<template>
  <teleport to="body">
    <div class="dialog">
      <div class="dialog_wrapper">
        <div class="dialog_header" v-if="title">
          <slot name="header">
            <span>{{ title }}</span>
          </slot>
        </div>
      </div>
      <div class="dialog_content">
        <slot></slot>
      </div>
      <div class="dialog_footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  title: {
    type: String,
    default: 'title title'
  }
})
</script>

<style lang="less" scope>
  .dialog {
    width: 200px;
    height: 300px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
</style>
