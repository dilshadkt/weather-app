<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <div class="absolute w-full h-full bottom-0 z-10 bg-black/20"></div>
    <img
      src="/bg.png"
      alt="background"
      class="absolute object-cover w-full h-full z-0 md:hidden"
    />
    <img
      src="/pc-bg.png"
      alt="background"
      class="absolute h-full w-full z-0 hidden md:flex"
    />

    <div
      class="relative z-20 flex flex-col md:flex-row items-center justify-between h-full p-6 md:p-10 py-7"
    >
      <div
        class="bg-[#FAE2BD] text-[#EFAA82] w-full md:w-3/4 h-[403px] md:h-[450px] lg:h-4/6 rounded-[37px] flex flex-col items-center p-5 md:p-12 py-7"
      >
        <select class="bg-transparent text-2xl md:text-4xl">
          <option value="">Today</option>
        </select>
        <div class="flex items-center">
          <img
            src="/public/svg/sun.svg"
            alt="sun"
            class="translate-y-2 scale-95 md:scale-125"
          />
          <div
            class="relative font-medium text-[108px] md:text-[100px] lg:text-[130px] ml-3 md:ml-10"
          >
            32<img
              src="/public//svg/deg.svg"
              alt="degree"
              class="absolute top-6 -right-3"
            />
          </div>
        </div>
        <div
          class="font-medium flex flex-col md:text-lg lg:text-xl items-center h-full justify-between"
        >
          <h4 class="font-semibold text-[21px]">Sunny</h4>
          <p>California,Los Angeles</p>
          <p>21 Oct 2019</p>
          <p>Feels like 30 | Sunset 18:20</p>
        </div>
      </div>
      <div class="grid w-full mt-4 grid-cols-1 md:ml-12 md:h-4/6">
        <div
          class="bg-gradient-to-r md:max-w-screen-md md:h-full from-[#FAE2BD]/50 p-5 to-[#FAE2BD]/50 grid grid-cols-5 text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 w-full h-[204px] rounded-[37px]"
        >
          <WeatherItem />
          <hr class="col-span-5 h-[2px]" />
          <WeatherItem />
        </div>
        <div
          class="w-full mt-3 md:mt-0 flex justify-end md:pb-7 flex-col h-full max-w-screen-md rounded-[37px] text-white"
        >
          <h4 class="font-medium text-xl md:text-3xl">Random Text</h4>
          <p class="mt-3 text-lg md:text-xl md:leading-10">
            Improve him believe opinion offered met and end cheered forbade.
            Friendly as stronger speedily by recurred. Son interest wandered sir
            addition end say. Manners beloved affixed picture men ask.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherItem from "@/components/WeatherItem.vue";
export default {
  name: "Home",
  components: {
    WeatherItem, // Register the component
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<!-- <template>
  <div>
    <h2 class="text-2xl mb-4">Current Weather</h2>
    <div class="mb-4">
      <label for="location" class="block mb-2">Location</label>
      <select v-model="location" id="location" class="p-2 border rounded">
        <option v-for="loc in locations" :key="loc" :value="loc">
          {{ loc }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <label for="date" class="block mb-2">Date</label>
      <input type="date" v-model="date" id="date" class="p-2 border rounded" />
    </div>
    <button @click="getWeather" class="bg-blue-600 text-white p-2 rounded">
      Get Weather
    </button>
    <div v-if="weatherData" class="mt-4 p-4 border rounded">
      <h3 class="text-xl">{{ weatherData.location }}</h3>
      <p>{{ weatherData.date }}</p>
      <p>{{ weatherData.temperature }}°C</p>
      <p>{{ weatherData.description }}</p>
      <img
        :src="`http://openweathermap.org/img/w/${weatherData.icon}.png`"
        alt="weather icon"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      location: "Delhi",
      date: "",
    };
  },
  computed: {
    ...mapState(["weatherData", "locations"]),
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getWeather() {
      this.fetchWeatherData({ location: this.location, date: this.date });
    },
  },
};
</script>

<style scoped>
/* Scoped styles for this component */
</style> -->
