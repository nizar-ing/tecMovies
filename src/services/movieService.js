import http from './httpService';
import {apiUrl} from "../config.json";
export function getMovies() {
    return http.get(`${apiUrl}/movies`);
}

export function deleteMovie(movieId) {
    return http.delete(`${apiUrl}/movies/${movieId}`);
}