import { useState, type FormEvent } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Email:", email);
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
      </form>

      <p>
        Don't have an account? <a href="#">Register</a>
      </p>
    </div>
  );
}

export default Login;
