import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})