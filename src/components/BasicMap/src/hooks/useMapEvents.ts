import { type ShallowRef } from "vue";
function useMapEvents(map: ShallowRef<AMap.Map | undefined>, emits: any) {
  map.value?.on("click", (e) => {
    emits("click", e);
  });
}

export default useMapEvents;
