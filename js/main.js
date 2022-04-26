import appHeader from "./cmps/app-header.js";
import homePage from "./pages/home-page.js";
import {router} from './routes.js'

const options = {
    el: "#app",
    router,
    template: `
        <section>
            <app-header/>
            <router-view/>
        </section>
    `,
    components:{
        appHeader,
        homePage,
    }
};

new Vue(options);