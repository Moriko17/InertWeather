const express = require("express");
const axios = require("axios");
require("dotenv/config");
const weatherRouter = express.Router();

weatherRouter.get("/", async (req, res) => {
  const cityName = req.query.city;
  res.json(await fetchWeatherByCity(cityName));
});

weatherRouter.get("/coordinates", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  res.json(await fetchWeatherByCoord(lat, lon));
});

const fetchWeatherByCity = async cityName => {
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric`;
  let response;
  try {
    response = await axios({
      url: `${ROOT_URL}&q=${cityName}`,
      method: "get"
    });
    response = response.data;
  } catch (error) {
    response = {
      errorMessage: error.response.status
    };
  }
  return response;
};

const fetchWeatherByCoord = async (lat, lon) => {
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric`;
  let response;
  try {
    response = await axios({
      url: `${ROOT_URL}&lat=${lat}&lon=${lon}`,
      method: "get"
    });
    response = response.data;
  } catch (error) {
    response = {
      errorMessage: error.response.status
    };
  }
  return response;
};

module.exports = weatherRouter;
