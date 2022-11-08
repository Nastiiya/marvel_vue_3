import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HeroesPage from "@/pages/HeroesPage";
import About from "@/pages/About";
import HeroPage from "@/pages/HeroPage";

const routes = [
    {
        path: '/',
        component: Main
    },

    {
        path: '/heroes',
        component: HeroesPage
    },

    {
        path: '/about',
        component: About
    },

    {
        path: '/hero/:id',
        component: HeroPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;