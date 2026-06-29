export async function login(credentials) {
    console.log("Login tenté avec :", credentials);
    return new Promise((resolve) =>
        setTimeout(() => resolve({ token: "fake-token-123" }), 500)
    );
}