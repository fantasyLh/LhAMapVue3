<template>
  <div class="map">
    <button @click="handleStart">开始绘制</button>
    <button @click="handleEnd">结束绘制</button>
    <BasicMap @register="registerMap" />
  </div>
</template>

<script setup lang="ts">
import { BasicMap, useMap } from "../components/BasicMap";
import { CircleEditorReturnFnType } from "../components/BasicMap/src/types/map";

const [registerMap, { onMapLoaded, drawCircle }] = useMap({
  zoom: 12,
  center: [116.406315, 39.908775],
});

let circleEditor: CircleEditorReturnFnType;
onMapLoaded(() => {
  circleEditor = drawCircle(
    {
      center: [116.406315, 39.908775],
      strokeColor: "#234222",
    },
    {
      end(c) {
        console.log(c.getCenter());
      },
    }
  );
});
function handleStart() {
  circleEditor?.open();
}
function handleEnd() {
  circleEditor?.close();
}
</script>
<style scoped>
.map {
  width: 300px;
  height: 300px;
}
</style>
