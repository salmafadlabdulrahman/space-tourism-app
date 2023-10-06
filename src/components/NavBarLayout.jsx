import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/shared/logo.svg";
import menuIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import NavBar from "./NavBar";

function NavBarLayout() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const path = useLocation().pathname;
  const location = path.split("/")[1];

  function handleResize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function openList() {
    setVisibleMenu((prev) => !prev);
  }

  return (
    <div className={"header " + location}>
      <div className="shared-images">
        <img src={logo} className="logo" />
        {windowSize > 640 && <NavBar />}
        <div className="menu" onClick={openList}>
          <img src={menuIcon} className="menu-icon" />
        </div>
        <img
          src={closeIcon}
          className="close-icon"
          onClick={openList}
          style={{ display: visibleMenu ? "block" : "none" }}
        />
      </div>

      <nav
        className="navigation"
        style={{ display: visibleMenu ? "block" : "none" }}
      >
        <NavBar />
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBarLayout;
