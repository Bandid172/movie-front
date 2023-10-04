import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchActors(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8505/api/actors?id=&order%5Bname%5D=asc\n')
                    .then((response) => {

                        let actors = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateActors', actors)

                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateActors(state, actors) {
            state.actors = actors
        }
    },

    state: {
        actors: {
            models: [],
            totalItems: 0
        }
    },

    getters: {
        getActors(state) {
            return state.actors.models
        }
    }
}