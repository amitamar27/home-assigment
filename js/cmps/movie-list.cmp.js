import moviePreview from "./movie-preview.cmp.js"

export default {
    name: 'movie-list',
    props: ['movies'],
    template: `
        <ul class="movie-list app-main">
            <li v-for="movie in movies">
                <movie-preview :movie="movie"></movie-preview>
                <router-link :to="'/home/'+movie.id" >Details</router-link>
            </li>
        </ul>
    `,
    data() {
        return {

        }
    },
    components:{
        moviePreview
    }
}