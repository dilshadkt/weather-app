<template>
  <HomeLyout>
    <div
      class="bg-[#FAE2BD]/40 text-[#EFAA82] flex flex-col w-full md:w-1/3 h-[403px] md:h-[450px] lg:h-4/6 rounded-[37px] p-5 md:p-12 py-7"
    >
      <h4 class="text-white text-3xl text-center font-semibold">Historical</h4>
      <form class="flex flex-col justify-between h-full mt-3">
        <div>
          <label for="" class="text-black">From : </label>
          <input
            type="date"
            placeholder="From"
            class="bg-transparent m-3 border-none outline-none"
          /><br />
          <label for="" class="text-black">To :</label>
          <input
            type="date"
            placeholder="To"
            class="bg-transparent m-3 border-none outline-none"
          />
        </div>
        <button class="bg-white py-3 rounded-lg">Show</button>
      </form>
    </div>
  </HomeLyout>
</template>
<script>
import HomeLyout from "@/layout/HomeLyout.vue";
export default {
  name: "Historical",
  components: {
    HomeLyout,
  },
};
</script>
