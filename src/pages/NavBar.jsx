import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => navigate("/"))
      .catch((error) => console.error("Error logging out:", error.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
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
      <div className="navbar-end">
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
