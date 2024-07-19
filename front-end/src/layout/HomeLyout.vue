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
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
