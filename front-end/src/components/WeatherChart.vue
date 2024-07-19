<template>
  <div class="grid w-full mt-4 grid-cols-1 md:ml-12 md:h-4/6">
    <div
      class="bg-gradient-to-r md:max-w-screen-md md:h-full from-[#FAE2BD]/50 p-5 to-[#FAE2BD]/50 grid grid-cols-5 text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 w-full h-[204px] rounded-[37px]"
    >
      <WeatherItem v-for="item in items" :key="item.id" />
      <hr class="col-span-5 h-[2px]" />
      <WeatherItem v-for="item in items" :key="item.id" />
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
      <RouterLink
        to="/historical"
        class="text-red-400 font-semibold w-full text-end"
        >History</RouterLink
      >
    </div>
  </div>
</template>
<script>
import WeatherItem from "./WeatherItem.vue";
export default {
  name: "WeatherChart",
  components: {
    WeatherItem,
  },
  data() {
    return {
      // count: 0,
      items: Array.from({ length: 5 }, (_, index) => ({ id: index })),
    };
  },
};
</script>
