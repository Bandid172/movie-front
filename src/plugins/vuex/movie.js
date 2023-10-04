import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchMovies(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/movies')
                    .then((response) => {

                        let movies = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateMovies', movies)

                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },

        fetchMovie(context, movieId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/movies/' + movieId)
                    .then((response) => {

                        let movie = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            releaseYear: response.data.releaseYear,
                            length: response.data.length,
                            moviePoster: response.data.moviePoster.contentUrl,
                            video: response.data.video.contentUrl,
                            category: response.data.category.map(category => category.name),
                            actors: response.data.actors.map(actor => ({
                                name: actor.name,
                                age: actor.age,
                                bio: actor.bio,
                                birthdate: actor.birthdate,
                                picture: actor.picture
                            })),
                            rottenTomatoes: response.data.rottenTomatoes
                        }

                        context.commit('updateMovie', movie)

                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        },

        searchMovie(context, movieName) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/movies?&name=' + movieName)
                    .then((response) => {

                        let searchedMovies = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateMovies', searchedMovies)

                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateMovies(state, movies) {
            state.movies = movies
        },

        updateMovie(state, movie) {
            state.movie = movie
        }
    },

    state: {
        movies: {
            models: [],
            totalItems: 0
        },

        movie: {
            id: null,
            name: null,
            description: null,
            releaseYear: null,
            length: null,
            moviePoster: null,
            video: null,
            category: [],
            actors: [],
            rottenTomatoes: null
        }
    },

    getters: {
        getMovies(state) {
            return state.movies.models
        },

        getMovie(state) {
            return state.movie
        }
    }
}