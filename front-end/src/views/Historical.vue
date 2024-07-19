<template>
  <div>Historical</div>
  <!-- <div>
    <h2 class="text-2xl mb-4">Historical Weather</h2>
    <div class="mb-4">
      <label for="location" class="block mb-2">Location</label>
      <select v-model="location" id="location" class="p-2 border rounded">
        <option v-for="loc in locations" :key="loc" :value="loc">
          {{ loc }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <label for="from" class="block mb-2">From Date</label>
      <input type="date" v-model="from" id="from" class="p-2 border rounded" />
    </div>
    <div class="mb-4">
      <label for="to" class="block mb-2">To Date</label>
      <input type="date" v-model="to" id="to" class="p-2 border rounded" />
    </div>
    <button
      @click="getHistoricalWeather"
      class="bg-blue-600 text-white p-2 rounded"
    >
      Get Historical Data
    </button>
    <div v-if="historicalData.length" class="mt-4">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Location</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Temperature</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Icon</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in historicalData" :key="data.date">
            <td class="border px-4 py-2">{{ data.location }}</td>
            <td class="border px-4 py-2">{{ data.date }}</td>
            <td class="border px-4 py-2">{{ data.temperature }}°C</td>
            <td class="border px-4 py-2">{{ data.description }}</td>
            <td class="border px-4 py-2">
              <img
                :src="`http://openweathermap.org/img/w/${data.icon}.png`"
                alt="weather icon"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
</template>

<!-- <script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      location: "Delhi",
      from: "",
      to: "",
    };
  },
  computed: {
    ...mapState(["historicalData", "locations"]),
  },
  methods: {
    ...mapActions(["fetchHistoricalData"]),
    getHistoricalWeather() {
      this.fetchHistoricalData({
        location: this.location,
        from: this.from,
        to: this.to,
      });
    },
  },
};
</script> -->
