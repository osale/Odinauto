function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-10 py-5 shadow-sm">
      <h2 className="m-0 text-2xl font-bold">Odin Auto</h2>

      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-gray-800 no-underline transition hover:text-gray-500"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-800 no-underline transition hover:text-gray-500"
        >
          About
        </a>
        <a
          href="#"
          className="rounded-md border border-gray-800 bg-gray-800 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-600"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
