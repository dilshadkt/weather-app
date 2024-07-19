<template>
  <HomeLyout>
    <DetailCard />
    <WeatherChart />
  </HomeLyout>
</template>
<script>
import HomeLyout from "@/layout/HomeLyout.vue";
import WeatherItem from "@/components/WeatherItem.vue";
import DetailCard from "@/components/DetailCard.vue";
import WeatherChart from "@/components/WeatherChart.vue";
export default {
  name: "Home",
  components: {
    HomeLyout,
    WeatherItem,
    DetailCard,
    WeatherChart,
  },
  data() {
    return {
      items: Array.from({ length: 5 }, (_, index) => ({ id: index })),
    };
  },
};
</script>
