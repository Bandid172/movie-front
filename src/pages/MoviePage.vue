<template>
    <div v-if="loading" class="loading">
        <div v-if="loading" class="loading-spinner">
            <div class="spinner-inner"></div>
        </div>
    </div>
    <div>
        <HeaderRow/>
        <div class="video">
            <video :src="'http://localhost:8505' + getMovie.video" controls></video>
        </div>
        <div class="container-fluid p-5 border-b border-gray-500">
            <div class="flex gap-10 movie-info flex-row items-start">
                <img :src="'http://localhost:8505' + getMovie.moviePoster" alt="..." class="rounded w-64 h-100"/>
                <div class="max-w-sm">
                    <h1 class="text-lg font-bold">{{ getMovie.name }}</h1>
                    <div class="flex items-center gap-1">
                        <img class="w-5 h-5" src="../assets/images/New_Fresh.svg"/>
                        <span class="text-gray-500 text-small"> {{ getMovie.rottenTomatoes }} | {{
                                getMovie.releaseYear
                            }} <span v-for="category of getMovie.category" :key="category">{{ category + ' ' }}</span>
                        </span>
                    </div>
                    <p class="mt-5">{{ getMovie.description }}</p>
                </div>
            </div>
        </div>
        <div class="mt-5 p-5">
            <h1 class="text-bold">Movie Cast</h1>
            <div
                class=" mt-3 grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 justify-center">
                <div v-for="actor of getMovie.actors" :key="actor.id">
                    <img :src="'http://localhost:8505' + actor.picture.contentUrl" class="rounded 2xl:w-64 2xl:h-80"/>
                    <h1>{{ actor.name }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderRow from "@/components/HeaderRow";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "MoviePage",
    components: {
        HeaderRow,
    },

    data() {
        return {
            loading: false,
        }
    },

    methods: {
        ...mapActions(['fetchMovie']),
    },

    computed: {
        ...mapGetters(['getMovie'])
    },

    mounted() {
        this.loading = true
        this.fetchMovie(this.$route.params.movieId)
            .finally(() => {
                this.loading = false
            })
    }
}
</script>

<style scoped>

.loading {
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

@media (max-width: 674px) {
    .movie-info {
        flex-direction: column;
        justify-content: center;
    }
}

.video {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.video video {
    width: 100%;
    padding: 0 10px;
}

@media (max-width: 422px) {
    .video video {
        width: 100%;
    }
}
</style>