import {
  utilService
} from "./util-service.js"
import {
  storageService
} from "./async-storage-service.js"


const MOVIES_KEY = 'movies'



export const movieService = {
  query,
  getPopularMoview,
  getById
}



function query() {
  return storageService.query(MOVIES_KEY)

}


function getById(movieId) {
  return storageService.get(MOVIES_KEY, movieId)
}



function getPopularMoview(){
  var movies = utilService.loadFromStorage(MOVIES_KEY) || {}
  return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d44b12eead87aca558c3d0b8a14d7786&language=en-US`)
    .then(res=>{
       movies = res.data.results
      console.log('res',movies);
      utilService.saveToStorage(MOVIES_KEY, movies)
      return res.data.results
    })
}