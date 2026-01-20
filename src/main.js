import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store";

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 사용할 아이콘 불러오기 (+근데 하나씩 추가할때마다 이렇게 여기다가 추가해야해..?)
import {
  faBarsStaggered,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// 아이콘 등록하기
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
