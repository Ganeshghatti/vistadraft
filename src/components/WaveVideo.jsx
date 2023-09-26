import React from "react";
import "../assets/css/style.css";

export default function WaveVideo() {
  return (
    <video autoPlay loop muted className="fullscreen-video">
      <source src="/wave.mp4" type="video/mp4" />
    </video>
  );
}
