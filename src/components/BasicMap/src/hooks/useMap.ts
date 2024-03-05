import type { Ref } from "vue";
import { onUnmounted, shallowRef } from "vue";

import type { MapCallback, UseMapReturnType } from "../types/map";
import useMarker from "./useMarker";

function useMap(
  options?: Partial<AMap.MapOptions> | undefined
): UseMapReturnType {
  const mapRef = shallowRef<AMap.Map>();

  let loaded: MapCallback;
  function onMapLoaded(fn: MapCallback) {
    loaded = fn;
  }

  function register(
    mapContainerRef: Ref<HTMLDivElement | string>,
    callback: MapCallback
  ) {
    mapRef.value = new window.AMap.Map(mapContainerRef.value, options);
    mapRef.value.on("complete", () => {
      loaded && loaded(mapRef!);
      callback(mapRef!);
    });
  }

  onUnmounted(() => {
    mapRef.value?.destroy();
  });

  const { addMarker } = useMarker(mapRef);
  return [
    register,
    {
      addMarker,
      onMapLoaded,
    },
  ];
}

export default useMap;
