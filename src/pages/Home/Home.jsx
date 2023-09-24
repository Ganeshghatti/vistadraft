import React, { useEffect } from "react";
import Navbar from "../../components/Layout/Navbar";
import Preloader from "../../components/Preloader";
import WaveVideo from "../../components/WaveVideo";
import "./Home.scss";
import Clients from "./Clients";
import Intro from "../Intro/Intro";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Starvideo from "../../components/Starvideo";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.to(".five-pointed-star", {
      y: "60vh",
      x: "-15vw",
      duration: 1,
      rotate: 360,
      scale: 0.75,
      ease: "slow",
      scrollTrigger: {
        trigger: ".five-pointed-star",
        start: "bottom 80vh",
        end: "bottom 60vh",
        scrub: true,
      },
    });

    gsap.to(".five-pointed-star", {
      y: "118vh",
      x: "-32vw",
      duration: 1,
      rotate: 720,
      scale: 0,
      ease: "slow",
      scrollTrigger: {
        trigger: ".five-pointed-star",
        start: "bottom center",
        scrub: true,
      },
    });

    gsap.to(
      ".five-pointed-starleft",
      { opacity: 0, rotate: 0 },
      {
        y: "60vh",
        x: "-28vw",
        duration: 1,
        rotate: 360,
        scale: 0.75,
        ease: "slow",
        scrollTrigger: {
          trigger: ".five-pointed-star",
          start: "bottom 80vh",
          end: "bottom 60vh",
          scrub: true,
        },
      }
    );
    gsap.to(
      ".five-pointed-starleft",
      { opacity: 0, rotate: 0 },
      {
        y: "120vh",
        x: "-50vw",
        duration: 1,
        rotate: 720,
        scale: 0,
        ease: "slow",
        scrollTrigger: {
          trigger: ".five-pointed-star",
          start: "bottom 80vh",
          end: "bottom 60vh",
          scrub: true,
        },
      }
    );
    gsap.to(
      ".five-pointed-starright",
      { opacity: 0, rotate: 0 },
      {
        y: "60vh",
        x: "28vw",
        duration: 1,
        rotate: 360,
        scale: 0.75,
        ease: "slow",
        scrollTrigger: {
          trigger: ".five-pointed-star",
          start: "bottom 80vh",
          end: "bottom 60vh",
          scrub: true,
        },
      }
    );
    gsap.to(
      ".five-pointed-starright",
      { opacity: 0, rotate: 0 },
      {
        y: "120vh",
        x: "50vw",
        duration: 1,
        rotate: 720,
        scale: 0,
        ease: "slow",
        scrollTrigger: {
          trigger: ".five-pointed-star",
          start: "bottom 80vh",
          end: "bottom 60vh",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section id="home">
      {/* <Preloader /> */}
      <Navbar />
      <header className="bg-[#1f1f1f] relative animate-slideDown2 invisible z-40 animation-delay-5000">
        <div className="absolute bottom-1/2 translate-y-1/2 left-0 w-full">
          <div className="container mx-auto px-20 flex flex-col justify-between">
            <h1 className="text-4xl text-white font-medium relative z-10 mt-20 mb-40 font-poppins w-[480px] main-heading">
              <p className="h-12 overflow-hidden flex gap-3">
                <span className="main-heading-word word-1">West</span>
                <span className="main-heading-word word-2">Coast</span>
                <span className="main-heading-word word-3">Brandmakers</span>
              </p>

              <p className="h-12 overflow-hidden flex gap-3">
                <span className="main-heading-word word-4">With a</span>
                <span className="main-heading-word word-5">global</span>
                <span className="main-heading-word word-6">edge.</span>
              </p>
            </h1>

            <h1 className="text-7xl text-white font-semibold  h-20 overflow-hidden">
              <span className="block animate-textUp animation-delay-7000  translate-y-20 transition-all">
                Meet <i>Revolve</i>
              </span>
            </h1>
          </div>
        </div>

        <WaveVideo />
        {/* <div className="five-pointed-starleft"></div> */}
        <div className="five-pointed-star"></div>
        {/* <div className="five-pointed-starright"></div> */}
      </header>
      <div className="theme-background animate-slideDown absolute -top-[120vh] z-30 animation-delay-4000 w-full h-[100svh]"></div>
      <Clients />
      {/* <Intro/> */}
      <section id="Intro" className="Intro">
        <h3>
          We are a global creative agency that combines design expertise with
          technology and intelligence to revolutionize your business.
        </h3>
        <div className="starvideo">
          <Starvideo />
        </div>
      </section>
      <Intro/>
    </section>
  );
}
