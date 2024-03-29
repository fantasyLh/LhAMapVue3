import AMapLoader from "@amap/amap-jsapi-loader";
import useMap from "./hooks/useMap";

type AMapPluginsType = ["AMap.CircleEditor"];

type MapLoaderOptions = {
  key: string; // 申请好的Web端开发者Key，首次调用 load 时必填
  version: string; // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins?: AMapPluginsType; //插件列表
  // 是否加载 AMapUI，缺省不加载
  AMapUI?: {
    version?: string; // AMapUI 缺省 1.1
    plugins?: string[]; // 需要加载的 AMapUI ui插件
  };
  // 是否加载 Loca， 缺省不加载
  Loca?: {
    version?: string; // Loca 版本，缺省 1.3.2
  };
};

function initMapLoader(
  options: MapLoaderOptions & {
    securityJsCode: string;
  }
) {
  window._AMapSecurityConfig = {
    securityJsCode: options.securityJsCode,
  };
  return AMapLoader.load(options);
}

export default initMapLoader;

export { useMap };
