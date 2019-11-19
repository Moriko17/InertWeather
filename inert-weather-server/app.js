const express = require("express");
require("dotenv/config");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const weatherRouter = require("./routes/weatherRoute");
const favoriteRouter = require("./routes/favoriteRoute");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/weather", weatherRouter);
app.use("/favorites", favoriteRouter);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to db")
);

app.listen(3030);
