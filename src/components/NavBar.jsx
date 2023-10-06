import { NavLink } from "react-router-dom";

import "../App.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar"> 
        <ul>
          <li>
            <NavLink to="/" className="link-text">
              <span>00 </span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="destination" className="link-text">
              <span>01 </span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="crew" className="link-text">
              <span>02 </span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="technology" className="link-text">
              <span>03 </span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
