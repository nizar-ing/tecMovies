import http from './httpService';
const moviesApiEndpoint = 'http://localhost:3900/api/movies';
export function getMovies() {
    return http.get(moviesApiEndpoint);
}

export function deleteMovie(movieId) {
    return http.delete(`${moviesApiEndpoint}/${movieId}`);
}