import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    // Set the activeRoute state based on the current location.pathname
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={`${
            activeRoute === "/" &&
            "!text-[#ff8080] font-bold underline !bg-inherit"
          }`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={`${
            activeRoute === "/about" &&
            "!text-[#ff8080] font-bold underline !bg-inherit"
          }`}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={`${
            activeRoute === "/contact" &&
            "!text-[#ff8080] font-bold underline !bg-inherit"
          }`}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={`${
            activeRoute === "/login" &&
            "!text-[#ff8080] font-bold underline !bg-inherit"
          }`}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={`${
            activeRoute === "/register" &&
            "!text-[#ff8080] font-bold underline !bg-inherit"
          }`}
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#8ECDDD] sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" className="max-w-[60px] cursor-pointer" />
          <p className="text-2xl font-bold">Dream Wedding</p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
