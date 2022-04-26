import {movieService} from '../services/movie-service.js'
import movieList from '../cmps/movie-list.cmp.js'
import movieFilter from '../cmps/movie-filter.cmp.js'

export default {
    name: 'home-app',
    components: {
        movieList,
        movieFilter
    },
    template: `
        <section class="movie-app app-main">
            <movie-filter @filtered="setFilter"></movie-filter>
            <movie-list :movies="moviesToShow"></movie-list>
        </section>
    `,
    data(){
        return{
            movies:[],
            filterBy : null
        }
    },
    created(){
        this.loadMovies()
    },
    methods:{
        loadMovies(){
            movieService.getPopularMoview()
                .then(movies=>{
                    this.movies = movies
                })
        },
        setFilter(filterBy){
            this.filterBy = filterBy
            
        }
    },
    computed:{
        moviesToShow(){
            if(!this.filterBy) return this.movies
            const {title} = this.filterBy
            const searchStr = this.filterBy.title.toLowerCase()
            const moviesToShow = this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(searchStr)
            })
            return moviesToShow
        }
    }
}