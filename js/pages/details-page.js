import { movieService } from "../services/movie-service.js"

export default {
    name: 'movie-details',
    template: `     
            <section v-if="movie" class="movie-details app-main">
                <h2>Details</h2>
                <p>{{movie.title}}</p>
                <router-link to="/home">x</router-link>
                <br>
            </section>
    `,
    data(){
        return{
            movie:null,
        }
    },
    created(){
        const {movieId} = this.$route.params
        movieService.getById(movieId)
            .then(movie=>this.movie = movie)
            
    }
}