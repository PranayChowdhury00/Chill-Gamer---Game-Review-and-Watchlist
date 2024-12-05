import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider"; 
import { Typewriter } from 'react-simple-typewriter';

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser().then(() => {
      navigate("/"); 
    }).catch((error) => {
      console.error("Error logging out:", error.message);
    });
  };

  const commonLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
          All Reviews
        </NavLink>
      </li>
    </>
  );

  const loggedInLinks = (
    <>
      <li>
        <NavLink to="/addReview" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
          Add Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/myReviews" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/watchlist" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
          My WatchList
        </NavLink>
      </li>
      <li className="dropdown relative">
        <div tabIndex={0} className="btn btn-ghost">
          <img src={user?.photoURL || "/default-avatar.png"} alt="User Avatar" className="w-8 h-8 rounded-full" />
        </div>
        <ul className="dropdown-content bg-base-100 rounded-box w-52 p-2 shadow absolute left-0 transform -translate-y-full mt-5 z-20">
          <li><span>{user?.displayName || "User"}</span></li>
          <li>
            <button onClick={handleLogout} className="btn btn-ghost">Log Out</button>
          </li>
        </ul>
      </li>
    </>
  );

  const loggedOutLinks = (
    <li>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "text-green-500" : "")}>
        Login
      </NavLink>
    </li>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start relative">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <img src="/logo.webp" alt="Chill Gamer Logo" className="w-10 h-10 rounded-full" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow absolute left-0 transform -translate-y-full z-10"
          >
            {commonLinks}
            {user ? loggedInLinks : loggedOutLinks} 
          </ul>
        </div>
        <img className="w-10 h-10 rounded-full lg:block hidden" src="/logo.webp" alt="Chill Gamer Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {commonLinks}
          {user ? loggedInLinks : loggedOutLinks} 
        </ul>
      </div>
      <div className="navbar-end">
        <Typewriter
          words={['Chill Gamer', 'Game Reviews', 'Your Watchlist']}
          loop={true}
          cursor
          cursorColor="green"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default NavBar;
