<template>
  <div class="wrapper">
    <title-block />
    <summary-block />
    <about-me-block />
    <my-work-block />
    <my-projects-block />
    <contact-me-block />
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

  .box {
    @apply w-full p-6 bg-white border-2 border-black font-mono;
    box-shadow: 6px 6px 0 theme('colors.gray.700');

    .list-title {
      @apply prose-lg flex justify-start items-center pb-1;
    }

    .asterisks {
      @apply w-full py-2 text-center text-4xl font-bold font-mono tracking-widest
      md:py-3;
    }
  }
}
</style>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col container pb-8;
}
</style>
