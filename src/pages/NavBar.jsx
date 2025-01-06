import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleLogout = () => {
    signOutUser()
      .then(() => navigate("/"))
      .catch((error) => console.error("Error logging out:", error.message));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar sticky top-0 z-20 bg-base-100 shadow-md px-4">
      {/* Navbar Left */}
      <div className="navbar-start flex items-center">
        <img
          src="/logo.webp"
          alt="Website Logo"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-xl font-bold">Chill Gamer</span>
      </div>

      {/* Navbar Right */}
      <div className="navbar-end flex lg:hidden">
        <ThemeProvider />
        <button
          onClick={toggleMenu}
          className="btn btn-ghost lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Navbar Center */}
      <div
        className={`navbar-center absolute top-full left-0 w-full lg:static lg:block bg-base-100 shadow-lg lg:shadow-none transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="menu menu-vertical lg:menu-horizontal px-4 lg:px-1 py-2 lg:py-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              All Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addReview"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myReviews"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watchlist"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Game WatchList
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Authentication Section */}
      <div
        className={`navbar-end hidden lg:flex ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {!user ? (
          <ul className="menu menu-horizontal">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="text-sm font-semibold">
                  {user.displayName || "User"}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline w-full"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
