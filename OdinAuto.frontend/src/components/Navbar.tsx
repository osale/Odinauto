import odinAutoImage from "../assets/odin-auto.png.png";
import { getCurrentUser, logout } from "../services/authService";

function Navbar() {
  const user = getCurrentUser();

  function handleLogout() {
    logout();
    window.location.href = "/";
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5">
        <a
          href="#"
          className="flex items-center gap-2 rounded no-underline focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
        >
          <img
            src={odinAutoImage}
            alt=""
            aria-hidden="true"
            className="h-8 w-8 rounded-full object-contain"
          />

          <span className="text-xl font-bold tracking-widest text-gray-900">
            ODIN AUTO
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/"
            className="rounded px-2 py-1 text-gray-800 no-underline transition hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            Home
          </a>

          <a
            href="/about"
            className="rounded px-2 py-1 text-gray-800 no-underline transition hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            About
          </a>

          {user ? (
            <>
              <a
                href="/chat"
                className="rounded px-2 py-1 text-gray-800 no-underline transition hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              >
                Chat
              </a>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-md border border-gray-800 bg-gray-800 px-4 py-1.5 font-semibold text-white transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              >
                Log out
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="rounded-md border border-gray-800 bg-gray-800 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
