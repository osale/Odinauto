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
    <div className="login-page">
      <h1>Welcome back</h1>

      <p>Login to your Odin Auto account</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <p>
        Don't have an account? <a href="#">Register</a>
      </p>
    </div>
  );
}

export default Login;