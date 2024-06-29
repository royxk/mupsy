import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full fixed z-10 top-0 left-0 right-0 bg-white flex justify-center items-center py-4 px-6 sm:px-10">
      <div className="tab:flex-row tab:p-10 flex-col gap-3 max-w-screen-xl w-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-8" />
        </Link>
        <nav className="flex items-center justify-center space-x-5">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/reservation">Reservation</NavLink>
          <NavLink to="/location">Location</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
    >
      {children}
    </Link>
  );
};

export default Header;
