import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-10 p-5 tab:p-10 bg-white place-content-between w-full gap-5 tab:gap-20 flex flex-col tab:flex-row">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="flex flex-row place-content-between gap-5">
        <Link className="hover:border-b-2 hover:border-gray-300" to="/about">
          About
        </Link>
        <Link className="hover:border-b-2 hover:border-gray-300" to="/history">
          History
        </Link>
        <Link
          className="hover:border-b-2 hover:border-gray-300"
          to="/reservation"
        >
          Reservation
        </Link>
        <Link className="hover:border-b-2 hover:border-gray-300" to="/location">
          Location
        </Link>
        <Link className="hover:border-b-2 hover:border-gray-300" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
