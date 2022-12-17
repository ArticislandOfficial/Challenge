import React from "react";
import images from "../images/images";
const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <nav className="">
        <li>
          <img src={images.img1} alt="" />
        </li>
        <li>How We Work</li>
        <li>Services</li>
        <li>Free Quote</li>
        <li>Contact</li>
      </nav>
    </>
  );
};

export default Header;
