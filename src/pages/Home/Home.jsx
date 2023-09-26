import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Preloader from "../../components/Preloader";
import WaveVideo from "../../components/WaveVideo";
import "./Home.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Starvideo from "../../components/Starvideo";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [sub1, setsub1] = useState(false);
  const [sub2, setsub2] = useState(false);
  const [sub3, setsub3] = useState(false);
  const [isfixed, setisfixed] = useState(false);
  const pinContainerRef = useRef(null);

  useEffect(() => {
    if (!animationPlayed) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".theme-background",
        {
          y: "-300",
        },
        {
          y: "0",
          duration: 1,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".wavevideo",
          {
            opacity: 0,
            y: "-100",
          },
          {
            opacity: 1,
            y: "0",
            duration: 1,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".navbar",
          {
            opacity: 0,
            y: "-100",
          },
          {
            opacity: 1,
            y: "0",
            duration: 1,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".header-content-text",
          {
            opacity: 0,
            y: "100",
          },
          {
            opacity: 1,
            y: "0",
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
          }
        );

      tl.play();
      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  function vhToPx(valueInVh) {
    const viewportHeight = window.innerHeight;
    const valueInPx = (parseFloat(valueInVh) / 100) * viewportHeight;
    return valueInPx;
  }
  gsap.from(".five-pointed-star", {
    opacity: 0,
  });
  gsap.to(".five-pointed-star", {
    y: "50vh",
    x: "-15vw",
    duration: 10,
    delay: 3,
    opacity: 1,
    rotate: 360,
    scale: 0.75,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star",
      start: "top 10vh",
      end: "top 30vh",
      scrub: 1,
    },
  });

  gsap.to(".five-pointed-star", {
    y: "105vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0,
    opacity: 1,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star",
      start: "top 50vh",
      scrub: 1,
    },
  });
  gsap.from(".five-pointed-starleft", {
    opacity: 0,
  });
  gsap.to(".five-pointed-starleft", {
    y: "25vh",
    x: "-15vw",
    duration: 10,
    delay: 3,
    opacity: 1,
    rotate: 360,
    scale: 0.75,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-starleft",
      start: "top 10vh",
      end: "top 30vh",
      scrub: 1,
    },
  });
  gsap.to(".five-pointed-starleft", {
    y: "105vh",
    x: "-50vw",
    duration: 10,
    delay: 3,
    scale: 0,
    opacity: 1,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-starleft",
      start: "top 50vh",
      scrub: 1,
    },
  });
  gsap.from(".five-pointed-starright", {
    opacity: 0,
  });
  gsap.to(".five-pointed-starright", {
    y: "15vh",
    x: "0",
    duration: 10,
    delay: 3,
    opacity: 1,
    rotate: 360,
    scale: 0.75,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-starright",
      start: "top 10vh",
      end: "top 30vh",
      scrub: 2,
    },
  });
  gsap.to(".five-pointed-starright", {
    y: "105vh",
    x: "-5vw",
    duration: 10,
    delay: 3,
    scale: 0,
    opacity: 1,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-starright",
      start: "top 50vh",
      scrub: 2,
    },
  });
  gsap.from(".list1", {
    opacity: 0,
    y: 100,
    x: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  });

  gsap.fromTo(
    ".list1",
    {
      opacity: 0,
      y: "100",
    },
    {
      opacity: 1,
      y: "0",
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    ".list2",
    {
      opacity: 0,
      y: "100",
    },
    {
      opacity: 1,
      y: "0",
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    }
  );
  gsap.fromTo(
    ".list3",
    {
      opacity: 0,
      y: "100",
    },
    {
      opacity: 1,
      y: "0",
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    }
  );

  window.addEventListener("scroll", () => {
    console.log(isfixed);
    console.log((window.scrollY / window.innerHeight) * 100);

    if (window.scrollY > vhToPx(550) || window.scrollY < vhToPx(200)) {
      console.log("Setting isfixed to false");
      setisfixed(false);
    }
    if (window.scrollY < vhToPx(550) && window.scrollY > vhToPx(200)) {
      console.log("Setting isfixed to true");
      setisfixed(true);
    }

    if (window.scrollY < vhToPx(249)) {
      setsub1(false);
      setsub2(false);
      setsub3(false);
    }
    if (window.scrollY > vhToPx(250) && window.scrollY < vhToPx(350)) {
      console.log("object1");
      setsub1(true);
      setsub2(false);
      setsub3(false);
    } else if (window.scrollY > vhToPx(350) && window.scrollY < vhToPx(450)) {
      console.log("object2");
      setsub1(false);
      setsub2(true);
      setsub3(false);
    } else if (window.scrollY > vhToPx(450) && window.scrollY < vhToPx(550)) {
      console.log("object3");
      setsub1(false);
      setsub2(false);
      setsub3(true);
    }
  });
  for (let i = 1; i < 11; i++) {
    gsap.from(`.five-pointed-star${i}`, {
      opacity: 0,
      scale: 0.25 + Math.random() * 0.5,
    });
    gsap.to(`.five-pointed-star${i}`, {
      y: Math.floor(Math.random() * (31 - 10 + 1)) + 10,
      x: Math.floor(Math.random() * 51),
      duration: 10,
      delay: Math.floor(Math.random() * 6),
      scale: 0.25 + Math.random() * 0.5,
      opacity: Math.random(),
      rotate: Math.floor(Math.random() * (720 - 180 + 1)) + 180,
      ease: "power2.out",
      scrollTrigger: {
        trigger: `.five-pointed-star${i}`,
        start: "top 10vh",
        end: "top 30vh",
        scrub: 2,
      },
    });
    gsap.to(`.five-pointed-star${i}`, {
      y: Math.floor(Math.random() * (130 - 100 + 1)) + 100,
      x: Math.floor(Math.random() * 51),
      duration: 10,
      delay: Math.floor(Math.random() * 6),
      scale: 0,
      opacity: Math.random(),
      rotate: Math.floor(Math.random() * (720 - 180 + 1)) + 180,
      ease: "power2.out",
      scrollTrigger: {
        trigger: `.five-pointed-star${i}`,
        start: "top 50vh",
        scrub: 2,
      },
    });
  }

  return (
    <section id="home">
      {/* <Preloader /> */}
      <div className="navbar">
        <Navbar />
      </div>
      <header>
        <div className="header-content">
          <h2>
            <span className="header-content-text">West</span>&nbsp;
            <span className="header-content-text">Coast</span>&nbsp;
            <span className="header-content-text">Brandmakers</span>&nbsp;
            <br />
            <span className="header-content-text">With a</span>&nbsp;
            <span className="header-content-text">global</span>&nbsp;
            <span className="header-content-text">edge.</span>
          </h2>

          <h1 className="header-content-text">
            Meet <i className="header-content-text">Revolve</i>
          </h1>
        </div>
      </header>
      <div className="wavevideo">
        <WaveVideo />
      </div>
      <div className="theme-background theme-background-animation"></div>
      <div className="five-pointed-starleft"></div>
      <div className="five-pointed-star"></div>
      <div className="five-pointed-starright"></div>
      <img src="./star.png" alt="" className="five-pointed-star1 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star2 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star3 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star4 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star5 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star6 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star7 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star8 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star9 star-img" />
      <img src="./star.png" alt="" className="five-pointed-star10 star-img" />

      <section id="clients">
        <div className="client-logos">
          <div>
            <img src="./Assets/Images/tata.png" width={75} alt="" />
            <img src="./Assets/Images/tata.png" width={75} alt="" />
            <img src="./Assets/Images/tata.png" width={75} alt="" />
          </div>
          <div>
            <img src="./Assets/Images/tata.png" width={75} alt="" />
            <img src="./Assets/Images/tata.png" width={75} alt="" />
            <img src="./Assets/Images/tata.png" width={75} alt="" />
          </div>
        </div>
        <h3>
          We are a global creative agency that combines design expertise with
          technology and intelligence to revolutionize your business.
        </h3>
        <div className="starvideo">
          <Starvideo />
        </div>
      </section>
      <section id="services">
        <div
          className="scroll-container"
          ref={pinContainerRef}
          style={{
            position: isfixed ? "fixed" : "",
            transform: isfixed ? "translate(-50%, -50%)" : "none",
          }}
        >
          <div className="main-points-1 main-points">
            <div className="main-points-1-div main-points-div">
              <img
                src="./Assets/Images/dotted_star.png"
                alt=""
                className="dotted-star"
              />
              <h1>Design</h1>
              {sub1 ? (
                <ul className="list-container">
                  <li className="list1">UI Design</li>
                  <li className="list1">UX Design</li>
                  <li className="list1">UX Consultancy</li>
                  <li className="list1">Design System</li>
                  <li className="list1">Animation</li>
                  <li className="list1">Illustration</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {sub1 ? (
              <img src="./Assets/Images/tata.png" width={75} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="main-points-2 main-points">
            <div className="main-points-2-div main-points-div">
              <img
                src="./Assets/Images/dotted_star.png"
                alt=""
                className="dotted-star"
              />
              <h1>Technology</h1>
              {sub2 ? (
                <ul>
                  <li className="list2">Web Design</li>
                  <li className="list2">Softwares</li>
                  <li className="list2">Mobile Apps</li>
                  <li className="list2">Front-End</li>
                  <li className="list2">Backend</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {sub2 ? (
              <img src="./Assets/Images/tata.png" width={75} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="main-points-3 main-points">
            <div className="main-points-3-div main-points-div">
              <img
                src="./Assets/Images/dotted_star.png"
                alt=""
                className="dotted-star"
              />
              <h1>Business</h1>
              {sub3 ? (
                <ul>
                  <li className="list3">Branding</li>
                  <li className="list3">Brand Name</li>
                  <li className="list3">Brand Guidelines</li>
                  <li className="list3">Strategy</li>
                  <li className="list3">S.E.O</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {sub3 ? (
              <img src="./Assets/Images/tata.png" width={75} alt="" />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      <section className="section1"></section>
      <section className="section2"></section>
      <section className="section3"></section>
      <section className="section4"></section>
    </section>
  );
}
