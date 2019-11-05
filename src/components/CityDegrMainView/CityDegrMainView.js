import React from "react";
import "../../styles/styles.css";

export default function CityDegrMainView(props) {
  const initData = {
    cityName: "Vostorg",
    temp: 17.3,
    icon: "01n"
  };
  let data;
  props.fetchedData ? (data = props.fetchedData) : (data = initData);
  const ICON_URL = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  return (
    <div className="city-degr">
      <p className="city">{data.cityName}</p>
      <img className="weather-pic" src={ICON_URL} alt="weather pic" />
      <p className="degr">{data.temp} °C</p>
    </div>
  );
}
