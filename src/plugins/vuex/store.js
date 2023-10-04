import {createStore} from "vuex";
import user from "@/plugins/vuex/user";
import movie from "@/plugins/vuex/movie";
import actor from "@/plugins/vuex/actor";

export default createStore({
    modules: {
        user,
        movie,
        actor
    }
})