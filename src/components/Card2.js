import React from "react";
import "./Card2.css";

function Card2({ src, description }) {
  return (
    <div className="card2">
      <img src={src} alt="" />
      <h4>{description}</h4>
    </div>
  );
}

export default Card2;
