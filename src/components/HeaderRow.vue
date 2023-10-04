<template>
    <div :class="{ navbar: isActive}" class="flex justify-between items-center p-5 border-b border-gray-500">
        <div class="logo flex gap-4 items-center ">
            <img src="../assets/images/tv.png"/>
            <router-link class="" to="/home">MovieBox</router-link>
        </div>
        <ul :class="{ navigation: isActive }" class="flex gap-7 list-items">
            <li>
                <router-link to="/home">Home</router-link>
            </li>
            <li>
                <router-link to="/">Sign In</router-link>
            </li>
            <li>
                <router-link to="/add-movie">Add Movie</router-link>
            </li>
            <li>
                <router-link to="/profile">Profile</router-link>
            </li>
            <li>
                <router-link to="/actors">Actors</router-link>
            </li>
        </ul>
        <div :class="{ profile: isActive }" class="search-bar me-5 flex items-center">
            <input v-model="movieName"
                   class="rounded-full bg-gray-600 px-5 w-50 h-10 mr-4 outline-none"
                   placeholder="Search..."
                   type="text"
                   @change="search"
            />
            <img class="h-10 rounded-full" src="../assets/images/1od0i5.jpg"/>
        </div>
        <div class="hamburger">
            <div :class="{ open: isOpen}" class="hamburger-menu" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "HeaderRow",

    data() {
        return {
            isOpen: false,
            isActive: false,
            movieName: ''
        }
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
            this.isActive = !this.isActive
        },

        ...mapActions(['searchMovie']),

        search() {
            this.searchMovie(this.movieName)
        },
    }
}
</script>

<style scoped>

.logo a {
    font-size: 24px;
}

.hamburger {
    display: none;
}

.hamburger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
}

.hamburger-menu span {
    display: block;
    height: 4px;
    background-color: #fff;
    transition: transform 0.3s, opacity 0.3s;
}

.hamburger-menu.open span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.hamburger-menu.open span:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 1053px) {

    .hamburger {
        display: flex;
        position: absolute;
        right: 0;
        margin-right: 30px;
        margin-top: 5px;
    }

    .hamburger-menu {
        display: flex;
    }

    .list-items {
        display: none;
    }

    .search-bar {
        display: none;
    }

    .profile {
        display: flex;
        flex-direction: row-reverse;
        gap: 16px;
    }

    .navigation {
        display: flex;
        flex-direction: column;
    }

    .navbar {
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
    }
}
</style>