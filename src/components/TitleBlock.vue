<template>
  <div class="title-block-wrapper">
    <img
      src="https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="A picture of myself. A curly haired black man wearing glasses."
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
    @apply w-32 h-36 object-cover -mr-6 -mt-28 border-2 border-black
    sm:w-36 sm:h-40 sm:mr-0 sm:mt-0
    md:w-40 md:h-44;
    box-shadow:   6px 6px 0 theme('colors.gray.800');
  }

  .name {
    @apply font-black italic uppercase flex flex-col sm:pt-2;
    -webkit-text-stroke: 2px theme('colors.gray.900');
    text-shadow:   1px 3px 0 theme('colors.gray.800');
    .first {
      @apply text-5xl text-orange-300
      sm:text-6xl
      lg:text-7xl;
    }
    .last {
      @apply text-4xl text-red-300
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
    .image {
      box-shadow:   6px 6px 0 theme('colors.gray.800');
    }
    .name {
      text-shadow:   2px 4px 0 theme('colors.gray.800');
    }
  }
}
</style>
