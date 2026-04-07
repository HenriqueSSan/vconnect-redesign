import { createRouter, createWebHistory } from "vue-router";

import SignInScreen from "./app/+page.vue"

import DashboardLayout from "./app/(dashboard)/+layout.vue"

import OverviewScreen from "./app/(dashboard)/+page.vue"

const routes = [{ path: "/sign-in", name: "sign-in", component: SignInScreen }, { path: "/", name: "(overview)", component: DashboardLayout, children: [{ path: "", name: "overview", component: OverviewScreen }] }]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router