import React from "react";
import "../styles/styles.css";

export default function SecondaryView(props) {
  return (
    <div className="additional">
      <div className="main-q">
        <p>Wind:</p>
        <p>Clouds:</p>
        <p>Pressure:</p>
        <p>Humidity:</p>
        <p>Coord:</p>
      </div>
      <div className="main-a">
        <p>{props.wind} m/s</p>
        <p>{props.clouds}</p>
        <p>{(props.pressure * 0.750062).toFixed(0)} mmHg</p>
        <p>{props.humidity} %</p>
        <p>
          {props.lon}, {props.lat}]
        </p>
      </div>
    </div>
  );
}
