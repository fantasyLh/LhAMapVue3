<template>
  <div class="map-container" ref="mapContainerRef"></div>
</template>

<script lang="ts" setup>
import { ShallowRef, onMounted, ref } from "vue";
import useMapEvents from "./hooks/useMapEvents";

const emits = defineEmits(["register", "click"]);
const mapContainerRef = ref<HTMLDivElement>();

onMounted(() => {
  emits("register", mapContainerRef, (map: ShallowRef<AMap.Map>) => {
    useMapEvents(map, emits);
  });
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
