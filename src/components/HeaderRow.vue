<template>
    <div class="flex justify-between items-center p-5 border-b border-gray-500">
        <div class="logo flex gap-4 items-center ">
            <img src="../assets/images/tv.png" />
            <router-link to="/" class="">MovieBox</router-link>
        </div>
        <ul class="flex gap-7">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/login">Sign In</router-link>
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
        <div class="search-bar me-5 flex">
            <input type="text" class="rounded-full bg-gray-600 px-5 w-50 h-10 mr-4 outline-none" placeholder="Search..."/>
            <img src="../assets/images/1od0i5.jpg" class="h-10 rounded-full"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderRow"
}
</script>

<style scoped>

.logo a {
    font-size: 24px;
}

</style>