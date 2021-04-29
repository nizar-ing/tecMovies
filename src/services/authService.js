import http from './httpService';
import {apiUrl} from "../config.json";

export function login(email, password){
    return http.post(`${apiUrl}/auth`, {email, password});
}