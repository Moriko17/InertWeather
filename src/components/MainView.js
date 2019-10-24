import React from "react";
import "../styles/styles.css";

export default function MainView(props) {
  return (
    <div className="city-degr">
      <p className="city">{props.name}</p>
      <p className="degr">{props.temp}</p>
    </div>
  );
}
