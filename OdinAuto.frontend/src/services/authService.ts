const API_URL = "http://localhost:5169/api/users";
const USER_KEY = "odinauto.user";

export interface User {
  id: number;
  email: string;
  name: string;
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid email or password");
  }

  const user: User = await res.json();
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function getCurrentUser(): User | null {
  const stored = localStorage.getItem(USER_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as User;
  } catch {
    localStorage.removeItem(USER_KEY);
    return null;
  }
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}