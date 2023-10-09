import { useEffect, useState, useRef } from "react";
// import Preloader from "../../components/Preloader";
import WaveVideo from "../../components/WaveVideo";
import "./Hero.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Starvideo from "../../components/Starvideo";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Faq from "react-faq-component";
import Designbtn from "../../components/Buttons/Designbtn";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Customers from "../Customers/Customers";

// import Intro from "../Intro/Intro";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [star1visible, setstar1visible] = useState(false);
  const [star2visible, setstar2visible] = useState(false);
  const [star3visible, setstar3visible] = useState(false);
  const [sec4, setsec4] = useState(false);
  const [sec4star, setsec4star] = useState(false);
  const [borderRight, setBorderRight] = useState(1);
  const [borderLeft, setBorderLeft] = useState(1);
  const [borderBottom, setBorderBottom] = useState(0.7);
  const [vidstarvisible, setvidstarvisible] = useState(false);
  const [vidbgColor, setvidBgColor] = useState("");

  const data = {
    rows: [
      {
        title: (
          <h4>
            <b>Services</b>
          </h4>
        ),
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <a href="#" style={{ color: "black" }}>
              Design
            </a>
            <a href="#" style={{ color: "black" }}>
              Technology
            </a>
            <a href="#" style={{ color: "black" }}>
              Neuromarketing
            </a>
          </div>
        ),
      },
      {
        title: (
          <h4>
            <b>About</b>
          </h4>
        ),
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <a href="#" style={{ color: "black" }}>
              About Us
            </a>
            <a href="#" style={{ color: "black" }}>
              Team
            </a>
            <a href="#" style={{ color: "black" }}>
              Career
            </a>
          </div>
        ),
      },

      {
        title: (
          <h4>
            <b>Quick Links</b>
          </h4>
        ),
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <a href="#" style={{ color: "black" }}>
              Work
            </a>
            <a href="#" style={{ color: "black" }}>
              Client
            </a>
            <a href="#" style={{ color: "black" }}>
              Blog
            </a>
            <a href="#" style={{ color: "black" }}>
              Reach us
            </a>
          </div>
        ),
      },
      {
        title: (
          <h4>
            <b>Quick Links</b>
          </h4>
        ),
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <a href="#" style={{ color: "black" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "black" }}>
              Terms of use
            </a>
            <a href="#" style={{ color: "black" }}>
              Site Map
            </a>
            <a href="#" style={{ color: "black" }}>
              Refund Policy
            </a>
          </div>
        ),
      },
    ],
  };

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
          ".header-content-text-span",
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
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".header-content-text-span",
  //     {
  //       opacity: 0,
  //       y: "100",
  //     },
  //     {
  //       opacity: 1,
  //       y: "0",
  //       stagger: 0.1,
  //       duration: 1,
  //       delay: 3,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".header-content-text-span",
  //       },
  //     }
  //   );
  // }, []);

  gsap.from(".five-pointed-star", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star", {
    y: "75vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star",
      start: "top 105vh",
      scrub: 1,
    },
  });
  gsap.from(".five-pointed-starleft", {
    scale: 0,
    opacity: 1,
  });

  gsap.to(".five-pointed-starleft", {
    y: "75vh",
    x: "-50vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-starleft",
      start: "top 105vh",
      scrub: 1,
    },
  });
  gsap.from(".five-pointed-starright", {
    scale: 0,
    opacity: 1,
  });

  gsap.to(".five-pointed-starright", {
    y: "75vh",
    x: "-5vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-starright",
      start: "top 105vh",
      scrub: 2,
    },
  });
  gsap.from(".five-pointed-star1", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star1", {
    y: "75vh",
    x: "-5vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star1",
      start: "top 105vh",
      scrub: 3,
    },
  });

  gsap.from(".five-pointed-star2", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star2", {
    y: "75vh",
    x: "-5vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star1",
      start: "top 105vh",
      scrub: 2,
    },
  });
  gsap.from(".five-pointed-star3", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star3", {
    y: "75vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star3",
      start: "top 105vh",
      scrub: 1,
    },
  });

  gsap.from(".five-pointed-star4", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star4", {
    y: "75vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star4",
      start: "top 105vh",
      scrub: 1,
    },
  });

  gsap.from(".five-pointed-star5", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star5", {
    y: "75vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star5",
      start: "top 105vh",
      scrub: 1,
    },
  });

  gsap.from(".five-pointed-star3", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star3", {
    y: "75vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star3",
      start: "top 105vh",
      scrub: 1,
    },
  });

  gsap.from(".five-pointed-star6", {
    scale: 0,
    opacity: 1,
  });
  gsap.to(".five-pointed-star6", {
    y: "75vh",
    x: "-25vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    opacity: 0,
    rotate: 720,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".five-pointed-star6",
      start: "top 105vh",
      scrub: 1,
    },
  });
  gsap.from(".stars-set2-1", {
    y: "90vh",
    x: "-35vw",
    scale: 0,
  });
  gsap.to(".stars-set2-1", {
    y: "150vh",
    x: "-40vw",
    duration: 10,
    scale: 2,
    delay: 3,
    rotate: 360,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stars-set2-1",
      start: "top 105vh",
      scrub: 1.5,
    },
  });

  gsap.from(".stars-set2-2", {
    y: "90vh",
    scale: 0,
    x: "-45vw",
  });
  gsap.to(".stars-set2-2", {
    y: "175vh",
    x: "-73vw",
    duration: 10,
    opacity: 1,
    delay: 3,
    scale: 0.75,
    rotate: 360,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stars-set2-2",
      start: "top 105vh",
      scrub: 1.5,
    },
  });
  gsap.from(".stars-set2-3", {
    y: "90vh",
    x: "25vw",
    scale: 0,
  });
  gsap.to(".stars-set2-3", {
    y: "160vh",
    x: "-33vw",
    duration: 10,
    delay: 3,
    scale: 0.75,
    rotate: 360,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stars-set2-3",
      start: "top 105vh",
      scrub: 1.5,
    },
  });
  gsap.from(".logo-star", {
    scale: 0,
    y: "-2.5vh",
    x: "0",
  });
  gsap.to(".logo-star", {
    y: "75vh",
    x: "70vw",
    duration: 10,
    delay: 3,
    scale: 4,
    rotate: 360,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".logo-star",
      start: "top 10vh",
      scrub: 3,
    },
  });
  gsap.fromTo(
    ".clients-title",
    {
      opacity: 0,
      y: "100",
    },
    {
      opacity: 1,
      y: "0",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".clients-title",
      },
    }
  );
  function vhToPx(valueInVh) {
    const viewportHeight = window.innerHeight;
    const valueInPx = (parseFloat(valueInVh) / 100) * viewportHeight;
    return valueInPx;
  }
  const [sub1, setsub1] = useState(false);
  const [sub2, setsub2] = useState(false);
  const [sub3, setsub3] = useState(false);
  const [sub4, setsub4] = useState(false);
  const [isfixed, setisfixed] = useState(false);
  const pinContainerRef = useRef(null);
  const sub1Animated = useRef(false);
  const sub2Animated = useRef(false);
  const sub3Animated = useRef(false);
  const sub4Animated = useRef(false);

  // function vhToPx(valueInVh) {
  //   const viewportHeight = window.innerHeight;
  //   const valueInPx = (parseFloat(valueInVh) / 100) * viewportHeight;
  //   return valueInPx;
  // }

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
    // gsap.fromTo(
    //   ".main-points-1-div-title",
    //   {
    //     opacity: 0,
    //     y: "-100",
    //   },
    //   {
    //     opacity: 1,
    //     y: "0",
    //     stagger: 0.1,
    //     duration: 1,
    //     ease: "power2.out",
    //   }
    // );
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
    sub2Animated.current = true;
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
    sub3Animated.current = true;
  };
  const animateSub4 = () => {
    gsap.fromTo(
      ".list4",
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
    sub4Animated.current = true;
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
    if (sub4) {
      animateSub4();
    }
  }, [sub1, sub2, sub3]);

  window.addEventListener("scroll", () => {
    console.log((window.scrollY / window.innerHeight) * 100);
    let value;
    if (window.innerWidth > 700) {
      value = 199;
    } else {
      value = 159;
    }
    if (
      window.scrollY > vhToPx(value + 400) ||
      window.scrollY < vhToPx(value)
    ) {
      setisfixed(false);
    }
    if (
      window.scrollY < vhToPx(value + 400) &&
      window.scrollY > vhToPx(value)
    ) {
      setisfixed(true);
    }

    if (window.scrollY < vhToPx(value)) {
      setsub1(false);
      setsub2(false);
      setsub3(false);
      setsub4(false);
    }
    if (
      window.scrollY > vhToPx(value) &&
      window.scrollY < vhToPx(value + 100)
    ) {
      setsub1(true);
      setsub2(false);
      setsub3(false);
      setsub4(false);
    } else if (
      window.scrollY > vhToPx(value + 100) &&
      window.scrollY < vhToPx(value + 200)
    ) {
      setsub1(false);
      setsub2(true);
      setsub3(false);
      setsub4(false);
    } else if (
      window.scrollY > vhToPx(value + 200) &&
      window.scrollY < vhToPx(value + 300)
    ) {
      setsub1(false);
      setsub2(false);
      setsub3(true);
      setsub4(false);
    } else if (
      window.scrollY > vhToPx(value + 300) &&
      window.scrollY < vhToPx(value + 400)
    ) {
      setsub1(false);
      setsub2(false);
      setsub3(false);
      setsub4(true);
    }
    if (window.scrollY > vhToPx(value + 400)) {
      setsec4(true);
    } else {
      setsec4(false);
    }
    if (
      window.scrollY > vhToPx(value + 400) &&
      window.scrollY < vhToPx(value + 485)
    ) {
      setsec4star(true);
    } else {
      setsec4star(false);
    }

    if (window.scrollY > vhToPx(156)) {
      setstar1visible(true);
    } else if (window.scrollY < vhToPx(156)) {
      setstar1visible(false);
    }
    if (window.scrollY > vhToPx(160)) {
      setstar2visible(true);
    } else if (window.scrollY < vhToPx(160)) {
      setstar2visible(false);
    }
    if (window.scrollY > vhToPx(165)) {
      setstar3visible(true);
    } else if (window.scrollY < vhToPx(165)) {
      setstar3visible(false);
    }
    if (
      window.scrollY > vhToPx(value + 475) &&
      window.scrollY < vhToPx(value + 500)
    ) {
      setBorderRight(2);
      setBorderLeft(2);
      setBorderBottom(0.7);
      setvidstarvisible(true);
    } else {
      setBorderRight(1);
      setBorderLeft(1);
      setBorderBottom(0.7);
      setvidstarvisible(false);
    }
    if (window.scrollY >= vhToPx(695) && window.scrollY <= vhToPx(755)) {
      setvidBgColor("#646464");
    } else {
      setvidBgColor("");
    }
  });
  useEffect(() => {
    gsap.fromTo(
      ".five-pointed-star-explode",
      {
        scale: 0,
        borderBottomWidth: `${borderBottom}em`,
        borderRightWidth: `${borderRight}em`,
        borderLeftWidth: `${borderLeft}em`,
      },
      {
        scale: 10,
        duration: 5,
        delay: 5,
        borderBottomWidth: `${borderBottom}em`,
        borderRightWidth: `${borderRight}em`,
        borderLeftWidth: `${borderLeft}em`,
        ease: "slow",
        scrollTrigger: {
          trigger: ".five-pointed-star-explode",
          scrub: 1,
        },
      }
    );
  }, [borderRight, borderLeft, borderBottom]);

  let image1Styles;
  let image2Styles;
  let image3Styles;
  if (window.innerWidth < 700) {
    image1Styles = {
      opacity: "1",
    };
    image2Styles = {
      opacity: "1",
    };
    image3Styles = {
      opacity: "1",
    };
  } else {
    image1Styles = {
      opacity: star1visible ? "1" : "0",
    };
    image2Styles = {
      opacity: star2visible ? "1" : "0",
    };
    image3Styles = {
      opacity: star3visible ? "1" : "0",
    };
  }

  // function pxToVh(px) {
  // Get the total viewport height
  // const vh = window.innerHeight;

  // Calculate the value in vh units
  //   const vhValue = (px / vh) * 100;

  //   return vhValue;
  // }

  // const elementToMove = elementToMoveRef.current;
  // elementToMove.style.position = "absolute";
  // elementToMove.style.left = `${initialPosition.left}px`;
  // elementToMove.style.top = `${initialPosition.top + vhToPx(100)}px`;

  // const elementToMoveRef = useRef(null);
  // const targetElementRef = useRef(null);
  // const pointaRef = useRef(null);

  // useEffect(() => {
  //   const targetElement = targetElementRef.current;
  //   const pointaElement = pointaRef.current;

  //   const initialPosition = pointaElement.getBoundingClientRect();
  //   const targetRect = targetElement.getBoundingClientRect();

  //   const initialPositiontop = initialPosition.top + window.scrollY;
  //   const initialPositionleft = initialPosition.left + window.scrollX;

  //   const targettop = targetRect.top + window.scrollY;
  //   const targetleft = targetRect.left + window.scrollX;
  //   console.log(pxToVh(targettop));
  //   console.log(targetleft, targettop);
  //   gsap.fromTo(
  //     ".stars-set2-1",
  //     { x: `${initialPositionleft}px`, y: `${initialPositiontop}px` },
  //     {
  //       x: `${targetleft}px`,
  //       y: `${targettop}px`,
  //       duration: 10,
  //       delay: 3,
  //       rotate: 360,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".stars-set2-1",
  //         start: "top center",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, []);

  useEffect(() => {
    gsap.fromTo(
      ".design_acode",
      { backgroundSize: "0%, 0%" },
      {
        duration: 3,
        backgroundSize: "100% , 100%",
        ease: "slow",
        scrollTrigger: {
          trigger: ".design_acode",
          start: "top bottom",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".design_acode-h2",
      { color: "black" },
      {
        duration: 1,
        color: "white",
        ease: "slow",
        scrollTrigger: {
          trigger: ".design_acode-h2",
          scrub: true,
          start: "top bottom",
          end: "top 20vh",
        },
      }
    );
  }, []);

  return (
    <section id="home">
      {/* <Preloader /> */}
      <header className="sticky-header">
        <div className="header-content">
          <h2>
            <span className="header-content-text-span">Creative</span>&nbsp;
            <span className="header-content-text-span">Alchemy</span>&nbsp;
            {/* <span className="header-content-text-span">in</span>&nbsp; */}
            <br />
            <span className="header-content-text-span">in</span>&nbsp;
            <span className="header-content-text-span">action</span>&nbsp;
            {/* <span className="header-content-text-span">edge.</span> */}
          </h2>
          <h1 className="header-content-text-span header-content-text-span-h1">
            From Concept to Connection,
            <br />
            <i className="header-content-text-span">
              Crafting Remarkable Stories that Resonates
            </i>
          </h1>
        </div>
      </header>
      <div className="wavevideo">
        <WaveVideo />
      </div>
      <div className="theme-background theme-background-animation"></div>
      {window.innerWidth > 770 && window.screenY < vhToPx(10) && (
        <img src="./star1.png" alt="" className="logo-star" />
      )}

      {window.innerWidth > 770 ? (
        <>
          <div className="five-pointed-starleft"></div>
          <div className="five-pointed-star"></div>
          <div className="five-pointed-starright"></div>
          <div className="five-pointed-star1"></div>
          <div className="five-pointed-star2"></div>
          <div className="five-pointed-star3"></div>
          <div className="five-pointed-star4"></div>
          <div className="five-pointed-star5"></div>
          <div className="five-pointed-star6"></div>
        </>
      ) : (
        ""
      )}

      <section id="clients">
        <h3 className="clients-title">
          We are Uniquely Designing Communication to effectively Communicate,
          amplifying through strategic Media, and building brands since 2000.
        </h3>
        <div className="starvideo">
          <Starvideo />
        </div>
      </section>
      {window.innerWidth > 770 ? (
        <>
          {star1visible ? "" : <div className="stars-set2-1"></div>}
          {star2visible ? "" : <div className="stars-set2-2"></div>}
          {star3visible ? "" : <div className="stars-set2-3"></div>}
        </>
      ) : (
        ""
      )}
      <section id="services">
        <div
          className="scroll-container"
          ref={pinContainerRef}
          style={{
            position: isfixed ? "fixed" : "",
            transform: isfixed ? "translate(-50%, -42%)" : "none",
          }}
        >
          <div className="main-points-1 main-points sticky-header">
            <div className="main-points-1-div main-points-div">
              <div>
                {!sub2 && !sub3 && !sub4 && (
                  <>
                    <img
                      src="./star1.png"
                      alt=""
                      className="dotted-star"
                      style={image1Styles}
                    />
                    <h2 className="main-points-1-div-title">
                      Creative and Design
                    </h2>
                  </>
                )}
              </div>
              {sub1 ? (
                <ul className="list-container">
                  <li className="list1">Brand Identity and Design</li>
                  <li className="list1">Creative Production</li>
                  <li className="list1">TVC and DVC</li>
                  <li className="list1">Branded Music Production</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {sub1 ? <div className="scroll-container-right"></div> : ""}
          </div>

          <div className="main-points-2 main-points sticky-header">
            <div className="main-points-2-div main-points-div">
              <div>
                {!sub3 && !sub4 && (
                  <>
                    <img
                      src="./star1.png"
                      alt=""
                      className="dotted-star"
                      style={image2Styles}
                    />
                    <h2>Strategic Film Making</h2>
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
            {sub2 ? <div className="scroll-container-right"></div> : ""}
          </div>

          <div className="main-points-3 main-points sticky-header">
            <div className="main-points-3-div main-points-div">
              <div>
                {!sub1 && !sub4 && (
                  <>
                    <img
                      src="./star1.png"
                      alt=""
                      className="dotted-star"
                      style={image3Styles}
                    />
                    <h2>Media Strategy and Planning</h2>
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
            {sub4 ? <div className="scroll-container-right"></div> : ""}
          </div>

          <div className="main-points-4 main-points sticky-header">
            <div className="main-points-4-div main-points-div">
              <div>
                {!sub1 && !sub2 &&(
                  <>
                    <img
                      src="./star1.png"
                      alt=""
                      className="dotted-star"
                      style={image3Styles}
                    />
                    <h2>Digital and Media Technology</h2>
                  </>
                )}
              </div>
              {sub4 ? (
                <ul>
                  <li className="list4">Branding</li>
                  <li className="list4">Brand Name</li>
                  <li className="list4">Brand Guidelines</li>
                  <li className="list4">Strategy</li>
                  <li className="list4">S.E.O</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {sub3 ? <div className="scroll-container-right"></div> : ""}
          </div>
        </div>
      </section>
      <section className="section1"></section>
      <section className="section2"></section>
      <section className="section3"></section>

      <section className="section4" style={{ border: "2px solid red" }}>
        {sec4 && (
          <div className="main-points-4-section">
            <div className="main-points-4-section-div">
              <div>
                <>
                  {window.innerWidth > 770 ? (
                    <img
                      src="./star1.png"
                      alt=""
                      className="dotted-star"
                      style={{
                        position: sec4star ? "fixed" : "",
                        top: sec4star ? "20vh" : "",
                        left: sec4star ? "15vw" : "",
                      }}
                    />
                  ) : (
                    <img src="./star1.png" alt="" className="dotted-star" />
                  )}

                  <h2>Digital and Media Technology</h2>
                </>
              </div>
              <ul>
                <li className="main-points-4-section-list">Branding</li>
                <li className="main-points-4-section-list">Brand Name</li>
                <li className="main-points-4-section-list">Brand Guidelines</li>
                <li className="main-points-4-section-list">Strategy</li>
                <li className="main-points-4-section-list">S.E.O</li>
              </ul>
            </div>
            <div className="scroll-container-right"></div>
          </div>
        )}
      </section>
      <section id="videosec-text">
        <h3 className="videosec-title">
          As global leaders in UX UI, technology, and business solutions, we
          partner with clients to simplify, strengthen, and transform their
          businesses.
        </h3>
      </section>

      {vidstarvisible ? (
        <div className="five-pointed-star-explode">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      ) : (
        ""
      )}
      <section
        id="videosec"
        className="full-screen-slider-container"
        style={{
          backgroundColor: vidbgColor,
        }}
      >
        <Carousel
          showThumbs={false}
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={false}
        >
          <div className="carousel-slide">
            <video>
              <source src="./vista.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="carousel-slide">
            <video>
              <source src="./vista.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="carousel-slide">
            <video>
              <source src="./vista.mp4" type="video/mp4" />
            </video>
          </div>
        </Carousel>
      </section>
      <section id="world">
        <h2>260+ projects delivered</h2>
        <h4>and counting more..</h4>
        <img src="./Assets/Images/Home/worldmap.jpg" alt="world-map" />
      </section>
      <section
        id="domain"
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "-15px",
        }}
      >
        <MDBRow
          style={{
            width: "70vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <MDBCol md="6">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:
                  window.innerWidth > 770 ? "space-around" : "center",
                gap: window.innerWidth > 770 ? "" : "15vw",
              }}
            >
              <h3>
                <b>Foodtech</b>
              </h3>
              <h3>
                <b>Fintech</b>
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:
                  window.innerWidth > 770 ? "space-around" : "center",
                gap: window.innerWidth > 770 ? "" : "15vw",
              }}
            >
              <h3>
                <b>Healthtech</b>
              </h3>
              <h3>
                <b>Ai Bots</b>
              </h3>
            </div>
          </MDBCol>
        </MDBRow>
        {window.innerWidth > 770 && <hr className="domain-hr" />}
        <MDBRow
          style={{
            width: "70vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <MDBCol md="6">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:
                  window.innerWidth > 770 ? "space-around" : "center",
                gap: window.innerWidth > 770 ? "" : "15vw",
              }}
            >
              <h3>
                <b>Traveltech</b>
              </h3>
              <h3>
                <b>ECom</b>
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:
                  window.innerWidth > 770 ? "space-around" : "center",
                gap: window.innerWidth > 770 ? "" : "15vw",
              }}
            >
              <h3>
                <b>Realtech</b>
              </h3>
              <h3>
                <b>Edtech</b>
              </h3>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
      <section id="founder" style={{ padding: "50px 0" }}>
        <MDBRow
          style={{
            width: "80vw",
            border: "2px solid black",
            padding: "20px",
            borderRadius: "20px",
            "@media (maxWidth: 770px)": {
              width: "90vw",
            },
          }}
        >
          <MDBCol md="3">
            <h1 style={{ fontSize: "46px" }}>
              Meet
              <br /> the
              <br /> Founder
            </h1>
          </MDBCol>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "5px",
            }}
          >
            <h5 style={{ color: "black" }}>
              <b>Jugal Shah</b>
            </h5>
            <h6>Founder, Head of UX at Leo9 Studio. </h6>
            <h6>Behavioral science and Neuromarketing expert. </h6>
            <i className="fa-brands fa-linkedin"></i>
            <div
              className="founder-logo-div"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {window.innerWidth > 700 ? (
                <>
                  <img
                    src="./Assets/Images/Home/yahoo.png"
                    alt=""
                    width={100}
                  />
                  <img
                    src="./Assets/Images/Home/yahoo.png"
                    alt=""
                    width={100}
                  />
                  <img
                    src="./Assets/Images/Home/yahoo.png"
                    alt=""
                    width={100}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </MDBCol>
          <MDBCol
            md="3"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            {window.innerWidth < 700 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <img
                  src="./Assets/Images/Home/yahoo.png"
                  alt=""
                  width={100}
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="./Assets/Images/Home/yahoo.png"
                  alt=""
                  width={100}
                  style={{ objectFit: "contain" }}
                />
                <br />
                <img
                  src="./Assets/Images/Home/yahoo.png"
                  alt=""
                  width={100}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              ""
            )}
            <img
              src="./Assets/Images/Home/1.png"
              alt=""
              width={125}
              style={{ objectFit: "contain" }}
            />
          </MDBCol>
        </MDBRow>
      </section>
      <section
        id="customers"
        style={{
          width: "80vw",
          backgroundColor: "#F5F5F5",
          borderRadius: "15px",
          padding: "30px 40px 0px 40px",
        }}
      >
        <Customers />
      </section>
      <section id="faq" style={{ width: "80vw", padding: "50px 0" }}>
        <MDBRow>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              justifyContent: "center",
            }}
          >
            <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
              <MDBAccordion alwaysOpen initialActive={1}>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle={
                    <h4 style={{ color: "black", fontWeight: "900" }}>
                      <b>
                        How To Enhance Motivation for Better Business Leads?
                      </b>
                    </h4>
                  }
                >
                  <h5 style={{ color: "black" }}>
                    Read how businessmen must use UX design and enhancement of
                    motivation for better
                  </h5>
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle={
                    <h4 style={{ color: "black", fontWeight: "900" }}>
                      <b>7 Ways Neuromarketing Impact Marketing Campaign</b>
                    </h4>
                  }
                >
                  <h5 style={{ color: "black" }}>
                    Follow these 7 Neuromarketing ways and measures to create an
                    astonishing impact in your upcoming marketing campaign. Read
                    now!
                  </h5>
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle={
                    <h4 style={{ color: "black", fontWeight: "900" }}>
                      <b>Can Good Design Grow Your Business And Customers?</b>
                    </h4>
                  }
                >
                  <h5 style={{ color: "black" }}>
                    Learn how to grow your business and customers to generate
                    huge profits and create awareness for your brand. Best way
                    to grow your business in 2020.
                  </h5>
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBContainer>
          </MDBCol>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              gap: "5px",
              padding: "0 0 0 5vw",
            }}
          >
            <img src="./Assets\Images\Home\faq.png" alt="" />
          </MDBCol>
        </MDBRow>
      </section>
      {window.innerWidth < 770 ? (
        <section
          id="mobile-faq"
          style={{
            width: "85vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            padding: "50px 0",
          }}
        >
          <h2>Vista Comm</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <i className="fa-brands fa-facebook" style={{ color: "black" }}></i>
            <i className="fa-brands fa-linkedin" style={{ color: "black" }}></i>
            <i
              className="fa-brands fa-instagram"
              style={{ color: "black" }}
            ></i>
            <i className="fa-brands fa-dribbble" style={{ color: "black" }}></i>
            <i className="fa-brands fa-twitter" style={{ color: "black" }}></i>
          </div>
          <div style={{ width: "85vw" }}>
            <Faq data={data} style={{ width: "400px" }} />
          </div>
        </section>
      ) : (
        ""
      )}
      {window.innerWidth > 700 ? (
        <section
          id="design_acode"
          className="design_acode"
          style={{
            width: "100vw",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundSize: "100%",
            backgroundColor: "#f88406",
          }}
        >
          <h1 style={{ color: "white" }} className="design_acode-h2">
            <b>
              Let’s create a measurable <br />
              impact on your business.
            </b>
          </h1>
          <Designbtn />
        </section>
      ) : (
        ""
      )}
    </section>
  );
}
