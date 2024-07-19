<template>
  <div
    @click="handleCardClick"
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
        {{ weatherData.temperature
        }}<img
          src="/public/svg/deg.svg"
          alt="degree"
          class="absolute top-6 -right-3"
        />
      </div>
    </div>
    <div
      class="font-medium flex flex-col md:text-lg lg:text-xl items-center h-full justify-between"
    >
      <h4 class="font-semibold text-[21px]">
        {{ weatherData.description || "Select" }}
      </h4>
      <p>{{ weatherData.location || null }}</p>
      <p>{{ weatherData.date }}</p>
      <p>Feels like 30 | Sunset 18:20</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "DetailCard",
  computed: {
    ...mapState({
      weatherData: (state) => state.weatherData,
    }),
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    async handleCardClick() {
      const location = prompt("Enter location:");
      if (!location) {
        alert("Location is required!");
        return;
      }

      const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
      try {
        const res = await this.fetchWeatherData({
          location,
          date: currentDate,
        });
      } catch (error) {
        this.handleCardClick();
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>
