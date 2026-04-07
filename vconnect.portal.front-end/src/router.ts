import { createRouter, createWebHistory } from "vue-router";

import SignInScreen from "./app/+page.vue"

const routes = [{ path: "/", name: "home", component: SignInScreen }]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router