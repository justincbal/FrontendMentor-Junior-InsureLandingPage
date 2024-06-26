import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [navOpen, setNav] = useState(false);

  const openNav = () => {
    const mobileNav = document.querySelector(".mobileMenu");
    const menuIcon = document.querySelector(".menuIcon");
    if (!navOpen) {
      mobileNav.style.display = "flex";
      menuIcon.src = "/images/icon-close.svg";
      setNav(true);
    } else {
      mobileNav.style.display = "none";
      menuIcon.src = "/images/icon-hamburger.svg";
      setNav(false);
    }
  };

  return (
    <>
      <nav>
        <div className="companyLogo">
          <img src="/images/logo.svg" alt="" />
        </div>

        <button
          className="hamburgerMenu"
          type="button"
          onClick={() => openNav()}
        >
          <img
            src="/images/icon-hamburger.svg"
            alt="menu open"
            className="menuIcon"
          />
        </button>

        <ul className="menu mobileMenu">
          <li>
            <a href="#">HOW WE WORK</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">ACCOUNT</a>
          </li>
          <li>
            <a className="viewPlans" href="#">VIEW PLANS</a>
          </li>
          <img
            src="/images/bg-pattern-mobile-nav.svg"
            alt=""
            className="mobileNavPattern"
          />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
