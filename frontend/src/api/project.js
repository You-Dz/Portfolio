export async function addProject(data) {
    console.log("Données envoyées :", data);

    // simule une réponse serveur (résout après un court instant)
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ok: true }), 500);
    });
}