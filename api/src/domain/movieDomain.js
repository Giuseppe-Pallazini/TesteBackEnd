import MovieRepository from '../repository/movieRepository.js';
const movieRepository = new MovieRepository()


export default class MovieDomain {

    async insert(movie) {
        await movieRepository.insert(movie);
    }

}