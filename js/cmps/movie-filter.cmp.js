export default {
    name: 'movie-filter',
    template: `
        <div class="movie-filter">
            <h3>Filter</h3>
            <input @input='filter' v-model="filterBy.title" type="text" placeholder = 'name...'>
        </div>
    `,
    data() {
        return {
            filterBy:{
                title:'',
            }
        }
    },
    methods:{
        filter(){
            this.$emit('filtered' , {...this.filterBy})
        }
    }  
}