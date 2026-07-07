/**
* Get datas from api via fetch
* @param {string} url - full Url of the API
* @returns {promise<any[]>}
*/
export async function getUrl(url) {
    console.log("URL appelée :", url) // 👈 DEBUG
    try {
        const response = await fetch(url)
        if (!response.ok) {
            const errData = await response.json();
            console.log("Erreur serveur :", errData);
            return [];
        }
        return await response.json()
    }
    catch (error) {
        console.log("Erreur lors de la récupération des données", error)
        return []
    }
}



/**
 * Delete data in API via fetch
 * @param {string} url - url of the API must include path before ID
 * @param {string} id - ID Mongo du projet à supprime
 * @returns {promise<boolean>}
*/
export async function deleteUrl(url, id) {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${url}${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errData = await response.json();  // message back
            console.log("Erreur suppression", response.status, errData);
        }
        return response.ok;
    }
    catch (error) {
        console.log("Erreur lors de la suppression des données", error)
        return false
    }
}



/**
 *  Send datas to the API via fetch
 * @param {string} url - full URL of API 
 * @param {formData|Object} data - Datas you want to send to the API
 * @returns {promise<boolean>}
*/
export async function postUrl(url, data) {
    try {
        const token = localStorage.getItem("token");

        const headers = {
            "Content-Type": "application/json"
        };

        // N'ajoute Authorization que si un token existe réellement
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errData = await response.json();
            console.log("Erreur serveur", response.status, errData);
            //  THROW pour que useFormSubmit aille dans son catch
            throw new Error(errData.message || `Erreur ${response.status}`);
        }


        return await response.json();
    }
    catch (error) {
        console.log("impossible de communiquer avec le serveur", error);
        //  Relance l'erreur pour que useFormSubmit la capte
        throw error;
    }
}

/**
 * Envoie des données multipart/form-data (avec fichier) à l'API
 * @param {string} url - URL complète de l'API
 * @param {FormData} formData - objet FormData (fichier + JSON stringifié)
 * @returns {Promise<any>}
*/
export async function postFormData(url, formData) {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const contentType = response.headers.get("content-type");
            let errData;

            if (contentType?.includes("application/json")) {
                errData = await response.json();
            } else {
                errData = { message: await response.text() };
            }

            console.error("Erreur serveur", response.status, errData);
            throw new Error(errData.message || `Erreur ${response.status}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error("Impossible de communiquer avec le serveur", error);
        throw error;
    }
}
