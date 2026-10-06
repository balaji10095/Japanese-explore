import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `relative font-medium transition duration-300 ${
      isActive
        ? "text-red-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600"
        : "text-gray-700 hover:text-red-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Japan Explorer Logo"
              loading="lazy"
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/places" className={navClass}>
              Places
            </NavLink>

            <NavLink to="/culture" className={navClass}>
              Culture
            </NavLink>

            <NavLink to="/food" className={navClass}>
              Food
            </NavLink>

            <NavLink to="/events" className={navClass}>
              Events
            </NavLink>

            <NavLink to="/seasons" className={navClass}>
              Seasons
            </NavLink>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Japan..."
                className="w-64 px-4 py-2 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              />

              <img
                src="/images/search.png"
                alt="search"
                loading="lazy"
                className="absolute left-4 -mt-2 -translate-y-1/2 w-6 h-6 opacity-60"
              />
            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <Link
              to="/favorites"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              ♡ Favorites
            </Link>

            <Link
              to="/contact"
              className="hidden sm:block bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Plan a Trip
            </Link>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-3xl text-gray-800"
              aria-label="Open Menu"
            >
              ☰
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;