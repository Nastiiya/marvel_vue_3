import { createApp } from 'vue'
import App from "./App"
import components from "@/components/UI/index"
import router from "@/router/router";
import directives from "@/directives";


const app = createApp(App)


for (let componentsKey in components) {
    app.component(components[componentsKey].name, components[componentsKey])
}

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(router)
    .mount("#app");
