import type { ShallowRef } from "vue/dist/vue.js";
import { CircleEditorEvent, CircleEditorReturnFnType } from "../types/map";

function registerCircleEditorEvent(
  circleEditor: AMap.CircleEditor,
  eventType: "move" | "adjust" | "end",
  fn: (e: any) => void
) {
  circleEditor.on([eventType], (e: any) => {
    fn(e.target);
  });
}

const defaultCircleOptions: AMap.CircleOptions = {
  radius: 1000, //半径
  strokeColor: "#FF33FF",
  strokeOpacity: 1,
  strokeWeight: 6,
  fillOpacity: 0.4,
  strokeStyle: "dashed",
  strokeDasharray: [10, 10],
  fillColor: "#1791fc",
  zIndex: 50,
};

function useCircleEditor(map: ShallowRef<AMap.Map | undefined>) {
  const drawCircle = (
    circleOptions: AMap.CircleOptions,
    callback?: CircleEditorEvent
  ): CircleEditorReturnFnType => {
    const circle = new AMap.Circle({
      ...defaultCircleOptions,
      ...circleOptions,
    });
    map.value?.add(circle);
    map.value?.setFitView([circle]);
    const circleEditor = new AMap.CircleEditor(map.value!, circle);
    if (callback?.adjust) {
      registerCircleEditorEvent(circleEditor, "adjust", callback.adjust);
    }
    if (callback?.end) {
      registerCircleEditorEvent(circleEditor, "end", callback.end);
    }
    if (callback?.move) {
      registerCircleEditorEvent(circleEditor, "move", callback.move);
    }
    return {
      open: circleEditor.open.bind(circleEditor),
      close: circleEditor.close.bind(circleEditor),
    };
  };
  return {
    drawCircle,
  };
}

export default useCircleEditor;
