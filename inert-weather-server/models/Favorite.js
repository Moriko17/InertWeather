const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
  cityName: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Favorites", FavoriteSchema);
