<template>
  <div class="title-block-wrapper">
    <img
      width="128"
      height="144"
      src="/images/me.jpeg"
      alt="A picture of myself."
      class="image"
    >

    <div class="flex-flex-col">
      <h1 class="name">
        <span class="first">Thales</span>
        <span class="last">Agapito</span>
      </h1>

      <h2 class="subtitle">
        Frontend Developer
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="postcss" scoped>

.title-block-wrapper {
  @apply flex justify-center items-center pt-28
  sm:flex-row sm:space-x-6 sm:pt-16
  md:space-x-10 md:pt-12
  lg:space-x-14;

  .image {
    @apply w-32 h-36 object-cover -mr-6 -mt-28 border-2 border-black rounded
    sm:w-36 sm:h-40 sm:mr-0 sm:mt-0
    md:w-40 md:h-44;
    box-shadow: 6px 6px 0 theme('colors.gray.700');
  }

  .name {
    @apply font-black italic uppercase flex flex-col sm:pt-2;
    -webkit-text-stroke: 1.5px theme('colors.gray.900');
    text-shadow: 1px 2px 0 theme('colors.gray.700');
    .first {
      @apply text-5xl text-indigo-300
      sm:text-6xl
      lg:text-7xl;
    }
    .last {
      @apply text-4xl text-blue-200
      sm:text-5xl
      lg:text-6xl;
    }
  }

  .subtitle {
    @apply font-bold font-mono italic mt-1 sm:mt-3;
  }
}

@screen sm {
  .title-block-wrapper {
    .name {
      text-shadow: 2px 4px 0 theme('colors.gray.700');
      -webkit-text-stroke: 2px theme('colors.gray.900');
    }
  }
}
</style>
