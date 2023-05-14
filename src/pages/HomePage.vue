<template>
    <div class="container-fluid mx-auto">
        <HeaderRow />
        <PopularMovies />
    </div>
</template>

<script>
import HeaderRow from "@/components/HeaderRow";
import PopularMovies from "@/components/PopularMovies/PopularMovies";

export default {
    name: "HomePage",
    components: {PopularMovies, HeaderRow}
}
</script>

<style scoped>

</style>