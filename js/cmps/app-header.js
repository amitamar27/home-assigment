

export default {
    name: 'app-header',
    template: `
        <div class="app-header">
            <p>{{title}}</p>
            <div class="navs">
                <router-link exact to="/">Home |</router-link>
                <router-link to="/home">Movies</router-link>
            </div>
        </div>
    `,
    data() {
        return {
            title: 'MovieApp'
        }
    }
}