const express = require("express");
const favoriteRouter = express.Router();
const Favorites = require("../models/Favorite");

favoriteRouter.get("/", async (req, res) => {
  try {
    const favorites = await Favorites.find();
    res.json(favorites);
  } catch (error) {
    res.json({ message: error });
  }
});

favoriteRouter.post("/", async (req, res) => {
  const favorite = new Favorites({
    cityName: req.body.cityName
  });

  try {
    const postedFavoite = await favorite.save();
    res.json(postedFavoite);
  } catch (error) {
    res.json({ message: error });
  }
});

favoriteRouter.delete("/", async (req, res) => {
  try {
    const removedFavoite = await Favorites.deleteOne({
      cityName: req.body.cityName
    });
    res.json(removedFavoite);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = favoriteRouter;
