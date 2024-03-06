import type { ShallowRef } from "vue";

function useMarker(map: ShallowRef<AMap.Map | undefined>) {
  const addMarker = (options?: AMap.MarkerOptions) => {
    const marker = new AMap.Marker(options);
    map.value?.add(marker);
    return marker;
  };
  const addTextMarker = (options?: AMap.TextOptions) => {
    const textMarker = new AMap.Text(options);
    map.value?.add(textMarker);
    return textMarker;
  };

  return {
    addMarker,
    addTextMarker,
  };
}

export default useMarker;
