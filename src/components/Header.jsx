import React from "react";
import images from "../images/images";
const Header = () => {
  return (
    <>
      {/* <h2>Header</h2> */}
      <nav className="Rectangle8">
        <article className="paraImg">
          <img src={images[0].img1} alt="" />
        </article>
        <article className="barraNav">
          <li>How We Work</li>
          <li>Services</li>
          <li>Free Quote</li>
          <li>Contact</li>
        </article>
      </nav>
    </>
  );
};

export default Header;
