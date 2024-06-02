import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white place-content-between w-full gap-5 tab:gap-20 flex flex-col tab:flex-row">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex flex-row place-content-between gap-10">
        <Link to="/makeup">MakeUp</Link>
        <Link to="/service">Service</Link>
        <Link to="/info">Info</Link>
        <Link to="/location">Location</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
