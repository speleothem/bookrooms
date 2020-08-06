import React from "react";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

function Navbar() {
  {
    /* This is the hook to change the state of a menu item */
  }
  const [clicked, setState1] = useState(false);

  const handleClick = () => setState1((clicked) => !clicked);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">BookRooms</h1>

      {/* This is taking that array of menu items and making each of them into links.
      You could alternatively make a component for menu button, and initialize each of those. */}
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.clsName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
