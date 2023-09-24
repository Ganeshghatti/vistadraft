import React from "react";

export default function Starvideo() {
  return (
    <video autoPlay loop muted>
      <source src="/star.mp4" type="video/mp4" />
    </video>
  );
}
