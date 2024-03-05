<template>
  <div class="map">
    <button @click="() => (show = !show)">点击</button>
    <P1 v-if="show"></P1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import P1 from "./views/index.vue";

const show = ref(true);
</script>
<style scoped></style>
