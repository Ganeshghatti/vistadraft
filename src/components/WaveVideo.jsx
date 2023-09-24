import React from "react";

export default function WaveVideo() {
  return (
    <video autoPlay loop muted>
      <source src="/wave.mp4" type="video/mp4" />
    </video>
  );
}
