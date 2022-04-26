import appHeader from "./cmps/app-header.js";
import homePage from "./pages/home-page.js";
import {router} from './routes.js'

const options = {
    el: "#app",
    router,
    template: `
        <section>
            <!-- <user-msg /> -->
            <app-header/>
            <router-view/>
            <!-- <app-footer/> -->
        </section>
    `,
    components:{
        appHeader,
        homePage,
        // appFooter,
        // userMsg
    }
};

new Vue(options);