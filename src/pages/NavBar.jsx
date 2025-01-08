import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const handleLogout = () => {
    signOutUser()
      .then(() => navigate("/"))
      .catch((error) => console.error("Error logging out:", error.message));
  };

  return (
    <div className="navbar sticky top-0 z-20 bg-base-100 shadow-md px-4">
      {/* Navbar Left */}
      <div className="navbar-start">
        <img
          src="/logo.webp"
          alt="Website Logo"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-xl font-bold">Chill Gamer</span>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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

      {/* Navbar Right */}
      <div className="navbar-end flex items-center">
        <ThemeProvider />
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl p-2"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        {!user ? (
          <ul className="menu menu-horizontal hidden lg:flex">
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
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-green-500" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        ) : (
          <div className="dropdown dropdown-end hidden lg:block">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-base-100 bg-opacity-90 z-10 flex justify-center items-center">
          {/* Close Button (X) */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl text-red-500"
          >
            &#10005; {/* Close (X) icon */}
          </button>

          <ul className="menu menu-vertical p-4 space-y-4">
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
        </div>
      )}
    </div>
  );
};

export default NavBar;
