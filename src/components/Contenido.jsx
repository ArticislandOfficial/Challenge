import React from "react";
import Cards from "./Cards";
import Sumary from "./Sumary";

const Contenido = () => {
  return (
    <>
      <article className="titulos">
        <h1 className="tituloUno">What items to store?</h1>
        <h3 className="tituloDos">
          Select which items you wish to store before moving to your new home.
          We’ll keep ’em safe!
        </h3>
      </article>
      <Cards />
      <h2 className="titleSum">Sumary</h2>
      <section className="contenedorSum">
        <Sumary />
      </section>
    </>
  );
};

export default Contenido;
