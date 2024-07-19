const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const { buildSchema } = require("graphql");
const axios = require("axios");
const Weather = require("./model/weather");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY; // Replace with your OpenWeatherMap API key
app.use(cors());
// Define the GraphQL schema
const schema = buildSchema(`
  type Weather {
    id: ID!
    location: String!
    date: String!
    temperature: Float!
    description: String!
    icon: String!
  }

  type Query {
    getWeather(location: String!, date: String!): Weather
    getHistoricalWeather(location: String!, from: String!, to: String!): [Weather]
  }

  type Mutation {
    saveWeather(location: String!, date: String!, temperature: Float!, description: String!, icon: String!): Weather
  }
`);

// Define the root resolver
const root = {
  getWeather: async ({ location, date }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&date=${date}&appid=${OPENWEATHERMAP_API_KEY}`
      );
      const {
        main,
        weather,
        weather: [{ icon, description }],
      } = response.data;

      // Save to the database
      const weatherEntry = new Weather({
        location,
        date,
        temperature: main.temp,
        description,
        icon,
      });
      await weatherEntry.save();

      return weatherEntry;
    } catch (error) {
      throw new Error("Error fetching weather data");
    }
  },

  getHistoricalWeather: async ({ location, from, to }) => {
    // Validation for date range
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const maxDateRange = 30; // Maximum range in days

    if ((toDate - fromDate) / (1000 * 60 * 60 * 24) > maxDateRange) {
      throw new Error(
        "Date range exceeds the maximum allowed range of 30 days."
      );
    }

    return await Weather.find({ location, date: { $gte: from, $lte: to } });
  },

  saveWeather: async ({ location, date, temperature, description, icon }) => {
    const weatherEntry = new Weather({
      location,
      date,
      temperature,
      description,
      icon,
    });
    return await weatherEntry.save();
  },
};

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/weatherApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use GraphQL middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
