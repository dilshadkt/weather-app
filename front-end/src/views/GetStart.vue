<template>
  <div
    class="relative h-screen w-screen overflow-hidden flex items-center justify-center"
  >
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
      class="relative z-20 flex items-center justify-center h-full w-full p-6 md:p-10 py-7"
    >
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
    </div>
  </div>
</template>
