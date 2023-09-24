import React from "react";
import "./Home.scss";

export default function Clients() {
  const data = [
    {
      logo: "./Assets/Images/tata.png",
      size:"60"
    },
    {
      logo: "./Assets/Images/tata.png",
      size:"60"
    },
    {
      logo: "./Assets/Images/tata.png",
      size:"60"
    },
    {
      logo: "./Assets/Images/tata.png",
      size:"60"
    },
    {
      logo: "./Assets/Images/tata.png",
      size:"60"
    },
  ];

  return (
    <section id="clients">
      {data.map((item, index) => (
        <img key={index} src={item.logo} alt="" width={item.size}/>
      ))}
    </section>
  );
}
