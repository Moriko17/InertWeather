import React from "react";
import "../styles/styles.css";

export default function CityDegrMainView(props) {
  const initData = {
    cityName: "Vostorg",
    temp: 17.3
  };
  let data;
  props.fetchedData ? (data = props.fetchedData) : (data = initData);
  return (
    <div className="city-degr">
      <p className="city">{data.cityName}</p>
      <p className="degr">{data.temp}</p>
    </div>
  );
}
