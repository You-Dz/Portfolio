import { postFormData } from './http';
const url = import.meta.env.VITE_API_URL;

export async function addProject(formData) {
    return postFormData(`${url}projects`, formData);
}