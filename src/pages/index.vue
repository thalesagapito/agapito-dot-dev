<template>
  <div class="wrapper">
    <title-block />
    <summary-block />
    <about-me-block />
    <my-work-block />
    <my-projects-block />
    <contact-me-block />
    <!-- <pixel-popup /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss">
section {
  @apply w-full mx-auto max-w-prose my-4 md:my-6 lg:mb-8;

  & > .title {
    @apply font-mono text-right text-3xl font-bold underline italic mb-4 mr-4 text-gray-800
    sm:text-4xl;
  }
}
</style>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col container pb-8;
}
</style>
