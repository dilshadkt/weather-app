const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  location: String,
  date: String,
  temperature: Number,
  description: String,
  icon: String,
});

module.exports = mongoose.model("Weather", weatherSchema);
