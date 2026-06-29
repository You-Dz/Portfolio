export async function login(data) {
    console.log("Login :", data);
    return new Promise((resolve) => setTimeout(() => resolve({ token: "fake-123" }), 500));
}