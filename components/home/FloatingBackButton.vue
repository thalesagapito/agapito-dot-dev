<template>
  <router-link to="/" class="floating-back-button">
    <span class="arrow">◀</span>
    <span class="text">back</span>
  </router-link>
</template>

<style lang="postcss" scoped>
.floating-back-button {
  @apply fixed top-0 left-0 w-24 h-8 rounded-br-full shadow
  flex justify-center items-center pr-2 pb-1 opacity-90
  bg-orange-400 text-white transition-all ease-out z-10
  print:hidden;

  &:hover {
    @apply w-28;
    .text {
      @apply ml-4;
    }
  }

  .text {
    @apply mt-0.5 ml-2 text-xs uppercase font-bold transition-all ease-out;
  }
}
</style>
