import type { Ref, ShallowRef } from "vue";
interface MapActionType {
  addMarker: (options?: AMap.MarkerOptions) => AMap.Marker;
  onMapLoaded: (fn: MapCallback) => void;
}
export type MapCallback = (map: ShallowRef<AMap.Map | undefined>) => void;

export type RegisterFn = (
  mapContainerRef: Ref<HTMLDivElement | string>,
  mapcallbacl: MapCallback
) => void;
export type UseMapReturnType = [RegisterFn, MapActionType];
