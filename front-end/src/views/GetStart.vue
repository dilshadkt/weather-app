<template>
  <HomeLyout>
    <div
      class="bg-[#FAE2BD] text-[#EFAA82] w-full md:w-1/3 h-[403px] md:h-[450px] lg:h-4/6 rounded-[37px] p-5 md:p-12 py-7"
    >
      <form action="f" class="flex flex-col">
        <label for="">Location</label>
        <input
          type="text"
          class="bg-transparent my-2 p-3 outline-none border-none"
          placeholder="Enter your location "
        />
        <button type="submit"></button>
      </form>
    </div>
  </HomeLyout>
</template>

<script>
import HomeLyout from "@/layout/HomeLyout.vue";
export default {
  name: "Get-start",
  components: {
    HomeLyout,
  },
};
</script>
