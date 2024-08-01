import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { hash, pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(hash ? hash : "");
  const [navActive, setNavActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const { cart, showCartDispatch } = useCart();

  const handleShowCart = () => {
    showCartDispatch({ type: "SHOW_CART" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${isScroll ? "scroll" : ""}`} id="navbar">
      <div className="container navbar-container">
        <div className="nav-brand">
          <img src="assets/logo-brand.png" alt="" className="logo" />
          <div className="text">
            <h1>Anime House</h1>
            <h4>Comics & Coffee</h4>
          </div>
        </div>
        <div className="nav">
          <div
            id="cart-mobile"
            className="relative px-2 mt-2 py-0.5 cursor-pointer lg:hidden"
            onClick={handleShowCart}>
            <div
              id="quantity"
              className="absolute text-[10px] bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center border-white right-0 top-0 p-0.5">
              {cart.length || 0}
            </div>
            <FaCartShopping className="mt-0.5 text-xl" />
          </div>
          <div>
            <div
              className={`nav-toggle ${navActive ? "active" : ""}`}
              onClick={() => setNavActive(!navActive)}>
              <span id="toogle-top" className={navActive ? "top" : ""}></span>
              <span
                id="toogle-middle"
                className={navActive ? "middle" : ""}></span>
              <span
                id="toogle-bottom"
                className={navActive ? "bottom" : ""}></span>
            </div>
            <ul
              className={`nav-menu ${navActive ? "active" : ""}`}
              id="nav-menu">
              <li>
                <Link
                  to={pathname == "/" ? "#" : "/"}
                  className={`nav-link ${
                    activeMenu == "" ? "active-menu" : ""
                  }`}
                  onClick={() => setActiveMenu("")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={pathname == "/" ? "#product" : "/#product"}
                  className={`nav-link ${
                    activeMenu == "#product" ? "active-menu" : ""
                  }`}
                  onClick={() => setActiveMenu("#product")}>
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to={pathname == "/" ? "#about" : "/#about"}
                  className={`nav-link ${
                    activeMenu == "#about" ? "active-menu" : ""
                  }`}
                  onClick={() => setActiveMenu("#about")}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={pathname == "/" ? "#testimonial" : "/#testimonial"}
                  className={`nav-link ${
                    activeMenu == "#testimonial" ? "active-menu" : ""
                  }`}
                  onClick={() => setActiveMenu("#testimonial")}>
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  to={pathname == "/" ? "#contact" : "/#contact"}
                  className={`nav-link ${
                    activeMenu == "#contact" ? "active-menu" : ""
                  }`}
                  onClick={() => setActiveMenu("#contact")}>
                  Contact
                </Link>
              </li>
              <li
                id="cart"
                className="px-3 py-0.5 relative hidden hover:text-primary lg:inline-block cursor-pointer"
                onClick={handleShowCart}>
                <div
                  id="quantity"
                  className="absolute text-[10px] bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center border-white right-0 top-0 p-0.5">
                  {cart.length || 0}
                </div>
                <FaCartShopping className="mt-0.5 text-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
