<template>
  <div class="map">
    <BasicMap @register="registerMap" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
import { BasicMap, useMap } from "../components/BasicMap";

const [registerMap, { addMarker, onMapLoaded }] = useMap({
  zoom: 12,
  center: [116.406315, 39.908775],
});

onMapLoaded((map) => {
  console.log(map.value);
});

function handleClick(e) {
  addMarker({
    position: [e.lnglat.lng, e.lnglat.lat],
  });
}
</script>
<style scoped>
.map {
  width: 300px;
  height: 300px;
}
</style>
