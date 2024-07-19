import { createStore } from "vuex";
import axios from "axios";

const API_URL = "http://localhost:4000/graphql";

export default createStore({
  state: {
    weatherData: null,
    historicalData: [],
    locations: ["Delhi", "Moscow", "Paris", "New York", "Sydney", "Riyadh"],
  },
  mutations: {
    setWeatherData(state, payload) {
      state.weatherData = payload;
    },
    setHistoricalData(state, payload) {
      state.historicalData = payload;
    },
  },
  actions: {
    async fetchWeatherData({ commit }, { location, date }) {
      try {
        const response = await axios.post(API_URL, {
          query: `
            query {
              getWeather(location: "${location}", date: "${date}") {
                location
                date
                temperature
                description
                icon
              }
            }
          `,
        });
        commit("setWeatherData", response.data.data.getWeather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    async fetchHistoricalData({ commit }, { location, from, to }) {
      try {
        const response = await axios.post(API_URL, {
          query: `
            query {
              getHistoricalWeather(location: "${location}", from: "${from}", to: "${to}") {
                location
                date
                temperature
                description
                icon
              }
            }
          `,
        });
        commit("setHistoricalData", response.data.data.getHistoricalWeather);
      } catch (error) {
        console.error("Error fetching historical weather data:", error);
      }
    },
  },
  modules: {},
});
