<template>
    <div class="h-screen flex items-center w-100 justify-center flex-col">
        <h2 class="mb-5 text-2xl">Log In</h2>
        <form class="flex flex-col gap-5 items-center" @submit.prevent="auth">
            <div class="UserName flex flex-col gap-2">
                <label for="userName">UserName</label>
                <input
                    id="userName"
                    v-model="form.userName"
                    class="w-80 ps-3 pt-1 pb-1 text-black outline-none rounded-full"
                    type="text"
                />
                <p v-if="userNameIsEmpty" class="error">Username is required</p>
            </div>
            <div class="Password flex flex-col gap-2">
                <label for="password">Password</label>
                <input
                    id="password"
                    v-model="form.password"
                    class="w-80 ps-3 pt-1 pb-1 text-black outline-none rounded-full"
                    type="password"
                />
                <p v-if="passwordIsEmpty" class="error">Password is Required</p>
            </div>
            <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Submit
            </button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "LoginPage",
    data() {
        return {
            form: {
                userName: null,
                password: null
            },
            userNameIsEmpty: false,
            passwordIsEmpty: false,
        }
    },

    computed: {
        ...mapGetters(['getError']),
        errorMessage() {
            return this.getError;
        }
    },

    methods: {
        ...mapActions(['fetchToken']),
        auth() {
            this.$store.commit('setError', null);

            this.userNameIsEmpty = !this.form.userName;
            this.passwordIsEmpty = !this.form.password;

            if (this.form.userName && this.form.password) {
                this.fetchToken(this.form)
                    .then(() => {
                        this.$router.push('/home')
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 401) {
                            const errorMessage = 'Invalid username or password.';
                            this.$store.commit('setError', errorMessage);
                        }
                    });
            }
        }
    },
}
</script>

<style scoped>
.error {
    color: #ff3333;
    margin-left: 5px;
}
</style>