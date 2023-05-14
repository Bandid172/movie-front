<template>
    <div class="container-fluid ps-5 pe-5">
        <h2 class="mt-5 uppercase text-yellow-400 text-lg mb-5">
            Popular Movies
        </h2>
        <div class="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 justify-center">
            <div class="movie-card">
                <img src="../../assets/images/71Yt-BtAfEL._AC_UF894,1000_QL80_.jpg" />
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link to="/movies/">Harry Potter and The Prisoner of Azkaban</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img src="../../assets/images/New_Fresh.svg" class="w-5 h-5"/>
                        <p>47% | 2020-10-01</p>
                    </div>
                    <span>Science Fiction, Thriller, Drama</span>
                </div>
            </div>
            <div class="movie-card">
                <img src="../../assets/images/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg" />
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link to="/movies/">Harry Potter and The Goblet of Fire</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img src="../../assets/images/New_Fresh.svg" class="w-5 h-5"/>
                        <p>47% | 2020-10-01</p>
                    </div>
                    <span>Science Fiction, Thriller, Drama</span>
                </div>
            </div>
            <div class="movie-card">
                <img src="../../assets/images/02def587918a88fcec51b5f2eb1c1897.jpg"  />
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link to="/movies/">The Village</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img src="../../assets/images/New_Fresh.svg" class="w-5 h-5"/>
                        <p>47% | 2020-10-01</p>
                    </div>
                    <span>Science Fiction, Thriller, Drama</span>
                </div>
            </div>
            <div class="movie-card">
                <img src="../../assets/images/8e2SowBz7plSPrayGdUeGJKrC8.jpg"  />
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link to="/movies/">Till Death</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img src="../../assets/images/New_Fresh.svg" class="w-5 h-5"/>
                        <p>47% | 2020-10-01</p>
                    </div>
                    <span>Science Fiction, Thriller, Drama</span>
                </div>
            </div>
            <div class="movie-card">
                <img src="../../assets/images/chamber-of-secrets-wizarding-world-poster.jpg" />
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link to="/movies/">Harry Potter and The Chamber of Secrets</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img src="../../assets/images/New_Fresh.svg" class="w-5 h-5"/>
                        <p>47% | 2020-10-01</p>
                    </div>
                    <span>Science Fiction, Thriller, Drama</span>
                </div>
            </div>
            <div class="movie-card">
                <img src="../../assets/images/71C4bkYFWSL._AC_SY741_.jpg"  />
                <div class="movie-info 2xl:pe-5 mt-2 mb-2">
                    <router-link to="/movies/">Harry Potter and The Half Blood Prince</router-link>
                    <div class="flex gap-2 items-center mb-1 mt-2">
                        <img src="../../assets/images/New_Fresh.svg" class="w-5 h-5"/>
                        <p>47% | 2020-10-01</p>
                    </div>
                    <span>Science Fiction, Thriller, Drama</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopularMovies"
}
</script>

<style scoped>

</style>