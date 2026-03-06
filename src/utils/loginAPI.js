import { BASE_API_URL } from "../config";

export async function login(username, password) {
    const res = await fetch(`${BASE_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    return res.json();
}

export async function checkAuth(token) {
    const res = await fetch(`${BASE_API_URL}/login`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!res.ok) throw new Error('Not authenticated');
    return res.json();
}

export async function getToken() {
    const match = document.cookie.match(/(?:^|; )token=([^;]+)/);
    return match ? match[1] : null;
}