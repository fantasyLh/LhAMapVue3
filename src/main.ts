import { createApp } from "vue";
import App from "./App.vue";
import { initMapLoader } from "./components/BasicMap";

async function bootstrap() {
  await initMapLoader({
    securityJsCode: "",
    key: "",
    version: "2.0",
  });
  createApp(App).mount("#app");
}

bootstrap();
