import { useState, useEffect } from "react";
import "./Navbar.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { logo } from "../../assets";
import ContactBtn from "../../components/Buttons/ContactBtn";
// import MenuLink from "../../components/Llinks/MenuLink";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const menuf = () => {
    setmenu(!menu);
  };
  useEffect(() => {
    const tl = gsap.timeline();

    if (menu) {
      // If the menu is open, play the animation for opening
      tl.fromTo(
        ".navbar-mobile-menu",
        {
          opacity: 0,
          x: "100vw",
        },
        {
          opacity: 1,
          x: "0",
          duration: 1,
          ease: "power2.out",
        }
      );

      tl.fromTo(
        ".menu-options",
        {
          opacity: 0,
          x: "-100",
        },
        {
          opacity: 1,
          x: "0",
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tl.fromTo(
        ".cancel-icon",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=0.5"
      );
    } else {
      // If the menu is closed, play the animation for closing
      tl.to(".navbar-mobile-menu", {
        opacity: 0,
        x: "100vw",
        duration: 1,
        ease: "power2.in",
      });

      tl.to(
        ".menu-options",
        {
          opacity: 0,
          x: "-100",
          stagger: -0.1,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.5"
      );

      tl.to(
        ".cancel-icon",
        {
          opacity: 0,
        },
        "-=0.5"
      );
    }
  }, [menu]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <nav>
      <Link to="/">
        <img src="./Assets/Images/logo.png" alt="" className="logo-img" />
      </Link>
      {menu ? (
        <>
          <div className="navbar-mobile-menu">
            <ul>
              <Link to="/#hero" className="navbar-list">
                <li onClick={menuf} className="menu-options navbar-list">
                  HOME
                </li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li className="menu-options navbar-list" onClick={menuf}>
                  ABOUT US
                </li>
              </Link>
              <a href="/#services">
                <li onClick={menuf} className="menu-options navbar-list">
                  SERVICES
                </li>
              </a>
              <a href="/#videosec">
                <li onClick={menuf} className="menu-options navbar-list">
                  WORK
                </li>
              </a>
              <Link to="/career" className="navbar-list">
                <li onClick={menuf} className="menu-options navbar-list">
                  CAREERS
                </li>
              </Link>
            </ul>
            <Link to="/contact">
              <ContactBtn className="menu-options navbar-list" />
            </Link>
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={menuf}
            className="cancel-icon"
            style={{
              position: "absolute",
              top: "6vh",
              right: "4vw",
              transform: "translate(-95%, 0)",
              color: "black",
              fontSize: "150%",
              cursor: "pointer",
              zIndex: "999",
            }}
          />
          {/* <div className="navbar-mobile-overlay" onClick={menuf}></div> */}
        </>
      ) : (
        ""
      )}

      {window.innerWidth > 1000 ? (
        <div>
          <ul>
            <Link to="/" className="navbar-list">
              <li className="navbar-list">HOME</li>
            </Link>
            <Link to="/about" className="navbar-list">
              <li className="navbar-list">ABOUT US</li>
            </Link>
            <a href="/#services">
              <li className="navbar-list">SERVICES</li>
            </a>
            <a href="/#videosec">
              <li className="navbar-list">WORK</li>
            </a>
            <Link to="/career" className="navbar-list">
              <li className="navbar-list">CAREERS</li>
            </Link>
          </ul>
          <Link to="/contact">
            <ContactBtn className="navbar-list" />
          </Link>
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "150%", color: "black", cursor: "pointer" }}
          onClick={menuf}
        />
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
