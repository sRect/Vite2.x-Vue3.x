<template>
  <div>about page</div>
  vuex num: {{$store.state.num}}

  <br />

  <router-link to="/about/1/foo">foo</router-link> | 
  <router-link to="/about/2/jsx">jsx</router-link>

  <router-view />
</template>

<script setup>

</script>