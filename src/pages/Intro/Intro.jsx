import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Intro.scss";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const [sub1, setsub1] = useState(false);
  const [sub2, setsub2] = useState(false);
  const [sub3, setsub3] = useState(false);
  const [isfixed, setisfixed] = useState(false);
  const pinContainerRef = useRef(null);
  const sub1Animated = useRef(false);
  const sub2Animated = useRef(false);
  const sub3Animated = useRef(false);

  function vhToPx(valueInVh) {
    const viewportHeight = window.innerHeight;
    const valueInPx = (parseFloat(valueInVh) / 100) * viewportHeight;
    return valueInPx;
  }

  const animateSub1 = () => {
    gsap.fromTo(
      ".list1",
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
      }
    );
    gsap.fromTo(
      ".main-points-1-div-title",
      {
        opacity: 0,
        y: "-100",
      },
      {
        opacity: 1,
        y: "0",
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      }
    );
    sub1Animated.current = true;
  };

  const animateSub2 = () => {
    gsap.fromTo(
      ".list2",
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
      }
    );
    sub2Animated.current = true; // Mark it as animated
  };
  const animateSub3 = () => {
    gsap.fromTo(
      ".list3",
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
      }
    );
    sub3Animated.current = true; // Mark it as animated
  };
  useEffect(() => {
    if (sub1) {
      animateSub1();
    }
    if (sub2) {
      animateSub2();
    }
    if (sub3) {
      animateSub3();
    }
  }, [sub1, sub2, sub3]);
  window.addEventListener("scroll", () => {
    console.log((window.scrollY / window.innerHeight) * 100);

    if (window.scrollY > vhToPx(550) || window.scrollY < vhToPx(170)) {
      setisfixed(false);
    }
    if (window.scrollY < vhToPx(550) && window.scrollY > vhToPx(170)) {
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
  return (
    <>
      <section id="services">
        <div
          className="scroll-container"
          ref={pinContainerRef}
          style={{
            position: isfixed ? "fixed" : "",
            transform: isfixed ? "translate(-50%, -50%)" : "none",
          }}
        >
          <div className="main-points-1 main-points sticky-header">
            <div className="main-points-1-div main-points-div">
              <div>
                {!sub2 && !sub3 && (
                  <>
                    <img
                      src="./star1.png"
                      alt=""
                      className="dotted-star"
                    />
                    <h1 className="main-points-1-div-title">Design</h1>
                  </>
                )}
              </div>
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
          <div className="main-points-2 main-points sticky-header">
            <div className="main-points-2-div main-points-div">
              <div>
                {!sub1 && !sub3 && (
                  <>
                    <img src="./star1.png" alt="" className="dotted-star" />
                    <h1>Technology</h1>
                  </>
                )}
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
            {sub2 ? (
              <img src="./Assets/Images/tata.png" width={75} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="main-points-3 main-points sticky-header">
            <div className="main-points-3-div main-points-div">
              <div>
                {!sub1 && !sub2 && (
                  <>
                    <img src="./star1.png" alt="" className="dotted-star" />
                    <h1>Business</h1>
                  </>
                )}
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
    </>
  );
}
