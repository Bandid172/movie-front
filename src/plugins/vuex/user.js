import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8505/api/users/auth', data)
                    .then((response) => {

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch((error) => {
                        if (error.response || error.response.status === 401) {
                            // Handle the specific error
                            const errorMessage = 'Invalid username or password.';
                            context.commit('setError', errorMessage);
                            reject(errorMessage);
                        } else {
                            // Handle other errors
                            const errorMessage = 'An error occurred. Please try again.';
                            context.commit('setError', errorMessage);
                            reject(errorMessage);
                        }
                    });
            })
        }
    },

    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
            state.error = null
        },
        setError(state, errorMessage) {
            state.error = errorMessage
        }
    },

    state: {
        token: localStorage.getItem('token'),
        error: null
    },

    getters: {
        getToken(state) {
            return state.token
        },
        getError(state) {
            return state.error
        }
    }
}