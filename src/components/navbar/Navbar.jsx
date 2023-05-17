import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
         <img src="/images/logoiiita.png" height={"80px"} style={{alignItems:'center',transform: 'translateY(30%) translateX(50%)'}}/> DoMS
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>ANNOUNCEMENTS</Button>
    </nav>
  );
};

export default Navbar;
