import React from "react";
import { logo } from "../assets";
import "../assets/css/style.css";

export default function Preloader() {
  return (
    <div className="fixed grid animate-toInvisible h-full z-20 inset-0 w-full place-items-center bg-gradient-to-br from-indigo-900 to-indigo-950">
      {/* <div className="fixed hidden h-full z-20 inset-0 w-full place-items-center bg-gradient-to-br from-indigo-900 to-indigo-950"> */}
      <div className="relative w-32 h-32">
        <div className="relative w-32 h-32 animate-rotateFull">
          <span className="spin-letter">v</span>
          <span className="spin-letter">i</span>
          <span className="spin-letter">s</span>
          <span className="spin-letter">t</span>
          <span className="spin-letter">a</span>
          <span className="spin-letter"></span>
          <span className="spin-letter">c</span>
          <span className="spin-letter">o</span>
          <span className="spin-letter">m</span>
          <span className="spin-letter">m</span>
          <span className="spin-letter">u</span>
          <span className="spin-letter">n</span>
          <span className="spin-letter">i</span>
          <span className="spin-letter">t</span>
          <span className="spin-letter">y</span>
        </div>

        <img
          src={logo}
          alt=""
          className="block absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
