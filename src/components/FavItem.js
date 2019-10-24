import React from "react";
import FavCityBar from "./FavCityBar";
import Loading from "./Loading";
import Error from "./Error";
import "../styles/styles.css";

export default function FavItem(props) {
  let data = props.data;
  return (
    <div>
      {props.err ? (
        <Error />
      ) : props.loading ||
        (Object.keys(data).length > 0 && data.constructor === Object) ? (
        props.loading ? (
          <Loading />
        ) : (
          <div>
            <FavCityBar
              fname={data.fname}
              temp={data.fmain.temp}
              num={props.num}
              deleteCity={props.deleteCity}
            />
            <div className="fav-bot">
              <div className="fav-bot-q">
                <p>Wind:</p>
                <p>Clouds:</p>
                <p>Pressure:</p>
                <p>Humidity:</p>
                <p>Coord:</p>
              </div>
              <div className="fav-bot-a">
                <p>{data.fwind.speed} m/s</p>
                <p>{data.fweather[0].description}</p>
                <p>{(data.fmain.pressure * 0.750062).toFixed(0)} mmHg</p>
                <p>{data.fmain.humidity} %</p>
                <p>
                  [{data.fcoord.lon}, {data.fcoord.lat}]
                </p>
              </div>
            </div>
          </div>
        )
      ) : (
        false
      )}
    </div>
  );
}
