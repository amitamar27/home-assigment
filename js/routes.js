import welcomePage from "./pages/welcome-page.js";
import homePage from "./pages/home-page.js";
import detailsPage from "./pages/details-page.js";


const routes = [
    {
        path : '/',
        component: welcomePage
    },
    {
        path:'/home/:movieId',
        component : detailsPage
    },
    {
        path : '/home',
        component: homePage
    }

];


export const router = new VueRouter({ routes });