import type { Ref, ShallowRef } from "vue";

export interface CircleEditorEvent {
  move?: (circle: AMap.Circle) => void;
  adjust?: (circle: AMap.Circle) => void;
  end?: (circle: AMap.Circle) => void;
}
export interface CircleEditorReturnFnType {
  open: () => void;
  close: () => void;
}
interface MapActionType {
  addMarker: (options?: AMap.MarkerOptions) => AMap.Marker;
  addTextMarker: (options?: AMap.TextOptions) => AMap.Text;
  drawCircle: (
    circleOptions: AMap.CircleOptions,
    callback?: CircleEditorEvent
  ) => CircleEditorReturnFnType;

  onMapLoaded: (fn: MapCallback) => void;
}
export type MapCallback = (map: ShallowRef<AMap.Map | undefined>) => void;

export type RegisterFn = (
  mapContainerRef: Ref<HTMLDivElement | string>,
  mapcallbacl: MapCallback
) => void;
export type UseMapReturnType = [RegisterFn, MapActionType];
