import React, { useState } from "react";
import "./Navbar.scss";
import { logo } from "../../assets";
import ContactBtn from "../../components/Buttons/ContactBtn";
import MenuLink from "../../components/Llinks/MenuLink";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const menuf=()=>{
    setmenu(!menu)
  }
  return (
    <nav>
      <img src="./Assets/Images/logo.png" alt="" className="logo-img" />
      {menu ? (
        <>
          <div className="navbar-mobile-menu">
            <ul>
              <li onClick={menuf}>HOME</li>
              <li onClick={menuf}>ABOUT US</li>
              <li onClick={menuf}>SERVICES</li>
              <li onClick={menuf}>WORK</li>
              <li onClick={menuf}>CAREERS</li>
            </ul>
            <ContactBtn />
          </div>
          <div className="navbar-mobile-overlay" onClick={menuf}></div>
        </>
      ) : (
        ""
      )}

      {window.innerWidth > 1000 ? (
        <div>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>WORK</li>
            <li>CAREERS</li>
          </ul>
          <ContactBtn/>
        </div>
      ) : (
        <FontAwesomeIcon icon={faBars} style={{ fontSize: "150%" }} onClick={menuf}/>
      )}

      {/* <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="" className="w-16 cursor-pointer animate-wave" />
        </a>

        <div className="flex justify-between items-center">
          <ul className="uppercase  flex mr-14 space-x-24">
            {menu.map((value, i) => {
              return <MenuLink key={i} slug={value.slug} page={value.page} />;
            })}
          </ul>

          <ContactBtn />
        </div>
      </div> */}
    </nav>
  );
}
