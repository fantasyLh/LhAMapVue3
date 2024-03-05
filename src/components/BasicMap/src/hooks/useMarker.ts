import type { ShallowRef } from "vue";

function useMarker(map: ShallowRef<AMap.Map | undefined>) {
  function addMarker(options?: AMap.MarkerOptions) {
    const marker = new AMap.Marker(options);
    map.value?.add(marker);
    return marker;
  }
  return {
    addMarker,
  };
}

export default useMarker;
