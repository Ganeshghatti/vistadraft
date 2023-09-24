import React, { useRef, useEffect, useState } from "react";
import "./Intro.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);

  const [sub1, setsub1] = useState(false);
  const [sub2, setsub2] = useState(false);
  const [sub3, setsub3] = useState(false);

  // Add a ref for the container you want to pin
  const pinContainerRef = useRef(null);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition < 1000) {
      setsub1(false);
      setsub2(false);
      setsub3(false);
    }
    if (scrollPosition > 1000 && scrollPosition < 1150) {
      setsub1(true);
      setsub2(false);
      setsub3(false);
    }
    if (scrollPosition > 1150 && scrollPosition < 1300) {
      console.log("object");
      setsub1(false);
      setsub2(true);
      setsub3(false);
    }
    if (scrollPosition > 1300 && scrollPosition < 1450) {
      console.log("object");
      setsub1(false);
      setsub2(false);
      setsub3(true);
    }
  });

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Use gsap to animate the list items individually
    gsap.from(".list", {
      y: "50px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".list",
        scrub: 0.5,
      },
    });

    ScrollTrigger.create({
      trigger: pinContainerRef.current,
      start: "center center", // Pin to the center of the viewport
      end: "+=300vh",
      pin: true,
      pinSpacing: false,
    });
  }, [sub1]);

  useEffect(() => {
    gsap.from(".list2", {
      y: "50px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".list2",
        scrub: 0.5,
      },
    });

    gsap.from(".list3", {
      y: "50px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".list3",
        scrub: 0.5,
      },
    });
  });

  return (
    <div>
      <div className="scroll-container" ref={pinContainerRef}>
        <div className="main-points-1">
          <div className="main-points-1-div">
            <img
              src="./Assets/Images/dotted_star.png"
              alt=""
              className="dotted-star"
            />
            <h2>Design</h2>
          </div>
          {sub1 ? (
            <ul>
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
        <div className="main-points-2">
          <div className="main-points-2-div">
            <img
              src="./Assets/Images/dotted_star.png"
              alt=""
              className="dotted-star"
            />
            <h2>Technology</h2>
          </div>
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
        <div className="main-points-3">
          <div className="main-points-3-div">
            <img
              src="./Assets/Images/dotted_star.png"
              alt=""
              className="dotted-star"
            />
            <h2>Business</h2>
          </div>
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
      </div>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
