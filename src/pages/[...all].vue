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

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col justify-center items-center prose max-w-none min-h-screen;
  .button {
    @apply bg-indigo-400 rounded-full text-white no-underline py-2 px-4 shadow transition-all ease-out;
    &:hover {
      @apply opacity-90;
    }
  }
}
</style>
