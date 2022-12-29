import React from "react";
import images from "../images/images";

const Cards = () => {
  return (
    <>
      <section className="estiloCards">
        <img src={images[1].img2} alt="" />
        <article>
          <p>texto de titulo</p>
        </article>
      </section>
      <section className="agregador">
        <p className="dif">-</p>
        <p className="contador"></p>
        <p className="add">+</p>
      </section>
    </>
  );
};

export default Cards;
