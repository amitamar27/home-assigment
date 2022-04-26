

export default {
    name: 'movie-preview',
    props: ['movie'],
    template: `
            <section class="movie-preview">
                <h3>Movie title : {{movie.title}}</h3>
                <hr>
                <h3>Release date : {{movie.release_date}}</h3>
                <hr>
                <p>Rating : {{movie.vote_average}}</p>
            </section>
        
    `,
    data() {
        return {
           
        }
    },

}