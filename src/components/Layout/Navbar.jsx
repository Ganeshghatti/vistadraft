import React from "react";

import { logo } from "../../assets";
import ContactBtn from "../Buttons/ContactBtn";
import MenuLink from "../Llinks/MenuLink";

const menu = [
  {
    page: "Home",
    slug: "/",
  },
  {
    page: "About Us",
    slug: "",
  },
  {
    page: "Services",
    slug: "",
  },
  {
    page: "Work",
    slug: "",
  },
  {
    page: "Careers",
    slug: "",
  },
];

export default function Navbar() {
  return (
    <nav className="py-10 opacity-0 animate-solidFadeIn px-20 bg-[#1f1f1f] absolute left-0 top-0 w-full z-0 animation-delay-5000">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="" className="w-16 cursor-pointer animate-wave" />
        </a>

        <div className="flex justify-between items-center">
          <ul className="uppercase  flex mr-14 space-x-24">
            {menu.map((value, i) => {
              return <MenuLink key={i} slug={value.slug} page={value.page} />;
            })}
          </ul>

          <ContactBtn />
        </div>
      </div>
    </nav>
  );
}
