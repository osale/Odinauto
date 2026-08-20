function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Odin Auto</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a className="login-button" href="#">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
