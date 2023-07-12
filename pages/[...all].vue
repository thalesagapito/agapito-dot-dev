<script setup lang="ts">
useHead({ title: 'Page not found' })
</script>

<template>
  <div class="wrapper">
    <h2>
      Page not found :/
    </h2>
    <router-link to="/" class="button">
      Go to home page
    </router-link>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col justify-center items-center prose max-w-none min-h-screen;
  .button {
    @apply bg-orange-400 rounded-lg text-white no-underline py-2 px-4 shadow transition-all ease-out border-2 border-black font-mono font-semibold;
    box-shadow: 6px 6px 0 theme('colors.stone.700');
    &:hover {
      @apply opacity-90;
    }
  }
}
</style>
