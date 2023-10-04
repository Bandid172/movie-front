import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage";

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/movie/:movieId',
        component: () => import('@/pages/MoviePage')
    },
    {
        path: '/home',
        component: () => import('@/pages/HomePage')
    },
    {
        path: '/profile',
        component: () => import('@/pages/ProfilePage')
    },
    {
        path: '/actors',
        component: () => import('@/pages/ActorsPage')
    },
    {
        path: '/add-movie',
        component: () => import('@/pages/AddMovie')
    },
    {
        path: '/actors/:actorId',
        component: () => import('@/pages/ActorProfile')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})