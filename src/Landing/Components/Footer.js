
import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-div">
        <p className="footer-text" style={{ color: props.theme.dark }}>
          Hecho con <span role="img">❤️</span> por Meal.ly (Jhoan, Nico, Mateo y Sofi)
        </p>
    </div>
  );
}