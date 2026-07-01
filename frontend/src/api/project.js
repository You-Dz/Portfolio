export async function addProject(data) {
    console.log("Données envoyées :", data);

    // simule une réponse serveur (résout après un court instant)
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ok: true }), 500);
    });
}
import { getUrl, postUrl, deleteUrl } from '../api/http';


const url = import.meta.env.VITE_API_URL;

/**
 * Get the projects from the API via fetch
 * @returns {Promise<any[]>}
 */
export async function getProjects() {

    //Ici JSON.parse transforme une string JSON en objet JS
    let projects = JSON.parse(window.localStorage.getItem("projects"))
    if (projects === null) {
        projects = await getUrl(`${url}projects`)
        window.localStorage.setItem("projects", JSON.stringify(projects))
    }
    return projects
}

// export function deleteProject(deleteButton, id, projects) {
//     // Delete button behavior

//     deleteButton.addEventListener("click", async () => {
//         const success = await deleteUrl(baseUrl + "projects/", id)
//         if (success) {
//             figure.remove()
//             project = await actualizeLocalStorage("projects", getProject) // "projects" => nom de clé de stockage
//         }
//     })
// }