import { postUrl } from '../api/http';
const url = import.meta.env.VITE_API_URL;

export async function login(credentials) {
    return postUrl(`${url}auth/login`, credentials);
}






