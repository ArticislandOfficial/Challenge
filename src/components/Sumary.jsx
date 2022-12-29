import React from "react";

const Sumary = () => {
  return (
    <section className="boxSumary">
      <article className="textosSumary">
        <p>Total Items</p>
        <p>Total m²</p>
        <p>Subtotal</p>
        <p>Tax</p>
        <p className="bold">Total</p>
        <p className="bold">Due Today 50%</p>
      </article>
      <article>
        <p>12</p>
        <p>8.55</p>
        <p>$1,710</p>
        <p>$273.6</p>
        <p className="bold">$1,983.6</p>
        <p className="bold">$991.8</p>
      </article>
    </section>
  );
};

export default Sumary;
