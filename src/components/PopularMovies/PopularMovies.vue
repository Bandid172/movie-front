<template>
    <div v-if="loading" class="loader">
        <div v-if="loading" class="loading-spinner">
            <div class="spinner-inner"></div>
        </div>
    </div>
    <div v-if="loading === false" class="container-fluid ps-5 pe-5">
        <h2 class="mt-5 uppercase text-yellow-400 text-lg mb-5">
            Popular Movies
        </h2>
        <div
            class="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 justify-center">
            <div v-for="movie of getMovies" :key="movie.id" class="movie-card">
                <img :src="'http://localhost:8505' + movie.moviePoster.contentUrl"
                     class="hover:opacity-75 transition easy-in-out duration-150 2xl:h-96"/>
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link :to="'/movie/' + movie.id">{{ movie.name }}</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img class="w-5 h-5" src="../../assets/images/New_Fresh.svg"/>
                        <p>{{ movie.rottenTomatoes }} | {{ movie.releaseYear }} </p>
                    </div>
                    <span v-for="category of movie.category" :key="category">{{ category.name + ' ' }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "PopularMovies",
    data() {
        return {
            loading: false
        }
    },

    methods: {
        ...mapActions(['fetchMovies'])
    },
    computed: {
        ...mapGetters(['getMovies'])
    },

    mounted() {
        this.loading = true
        this.fetchMovies()
            .finally(() => {
                this.loading = false
            })
    }
}
</script>

<style scoped>

.loader {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: relative;
}

.spinner-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #f3f3f3;
    border-top-color: #3498db;
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>