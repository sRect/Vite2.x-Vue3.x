<template>
  <div>
    <!-- 默认插槽-->
    <SlotChildCom>
      任意内容
      <template>内容</template>
      <br />
      中间内容
    </SlotChildCom>

    <p>--------------------------------</p>

    <!-- 独占默认插槽的缩写 -->
    <SlotChildCom >
      <template #main="main">
        v-slot:main 
      </template>
      <template #footer="props">
        v-slot:footer==>, num: {{props.num}}
        <br />
        <b>list:</b>
        <ul>
          <li v-for="item in props.arr">{{item}}</li>
        </ul>
        <button @click="props.handleClick()">click!!!</button>
      </template>
      <!-- <template #footer2>#footer2</template> -->
    </SlotChildCom>
  </div>
</template>

<script setup>
import SlotChildCom from '@/components/SlotChildCom.vue';


</script>