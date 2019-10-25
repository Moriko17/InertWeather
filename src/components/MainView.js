import React from "react";
import "../styles/styles.css";

export default function MainView(props) {
  let name = "Vostorg",
    temp = "18.6";
  if (props.case !== "void") {
    name = props.data.cityName;
    temp = props.data.temp;
  }
  return (
    <div className="city-degr">
      <p className="city">{name}</p>
      <p className="degr">{temp}</p>
    </div>
  );
}
