import React from "react";
import "../styles/styles.css";

export default function SecondaryView(props) {
  let wind = "0",
    clouds = "None",
    pressure = "1000",
    humidity = "100",
    coord = ["??", "??"];
  if (props.case !== "void") {
    wind = props.data.wind;
    clouds = props.data.cloudState;
    pressure = props.data.pressure;
    humidity = props.data.humidity;
    coord = props.data.coord;
  }
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
        <p>{wind} m/s</p>
        <p>{clouds}</p>
        <p>{(pressure * 0.750062).toFixed(0)} mmHg</p>
        <p>{humidity} %</p>
        <p>
          [{coord[0]}, {coord[1]}]
        </p>
      </div>
    </div>
  );
}
