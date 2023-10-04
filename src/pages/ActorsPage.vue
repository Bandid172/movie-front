<template>
    <HeaderRow/>
    <div class="p-5 grid gap-10 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
        <div v-for="actor of getActors" :key="actor.name">
            <img :src="'http://localhost:8505' + actor.picture.contentUrl" class="w-64 h-80 rounded"/>
            <router-link :to="'/actors/' + actor.id">{{ actor.name }}</router-link>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import HeaderRow from "@/components/HeaderRow";

export default {
    name: "ActorsPage",
    components: {HeaderRow},
    methods: {
        ...mapActions(['fetchActors'])
    },

    computed: {
        ...mapGetters(['getActors'])
    },

    mounted() {
        this.fetchActors()
    }
}
</script>

<style scoped>

</style>