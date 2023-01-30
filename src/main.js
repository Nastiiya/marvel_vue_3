import { createApp } from 'vue'
import App from "./App"
import components from "@/components/UI/index"
import router from "@/router/router";
import directives from "@/directives";
import scss from "@/scss/style.scss";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'


const app = createApp(App)


for (let componentsKey in components) {
    app.component(components[componentsKey].name, components[componentsKey])
}

directives.forEach(directive => {
    app.directive(directive.name, directive)
})
library.add(faBars, faMagnifyingGlass, faXmark);
app .use(scss)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
