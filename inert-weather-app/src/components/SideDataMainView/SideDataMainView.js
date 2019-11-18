import React from "react";
import "../../styles/styles.css";

export default function SideDataMainView(props) {
  const initData = {
    wind: 0,
    cloudState: "Nope",
    coord: {
      lat: "??",
      lon: "??"
    },
    humidity: 100,
    pressure: 1517
  };
  let data;
  props.fetchedData ? (data = props.fetchedData) : (data = initData);
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
        <p>{data.wind} m/s</p>
        <p>{data.cloudState}</p>
        <p>{(data.pressure * 0.750062).toFixed(0)} mmHg</p>
        <p>{data.humidity} %</p>
        <p>
          [{data.coord.lat}, {data.coord.lon}]
        </p>
      </div>
    </div>
  );
}
