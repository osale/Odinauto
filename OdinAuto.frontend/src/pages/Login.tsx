import { useState, type FormEvent } from "react";
import { login } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      const user = await login(email, password);
      console.log("Logged in as:", user);
    } catch {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="mb-2 text-3xl font-bold">Welcome back</h1>

      <p className="mb-6 text-gray-600">Login to your Odin Auto account</p>

      <form onSubmit={handleLogin} className="flex w-full max-w-sm flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:border-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:border-gray-500"
        />

        <button
          type="submit"
          className="rounded-md bg-gray-800 px-6 py-3 font-semibold text-white transition hover:bg-gray-600"
        >
          Login
        </button>

        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-semibold text-gray-800 no-underline hover:underline"
        >
          Register
        </a>
      </p>
    </div>
  );
}

export default Login;
