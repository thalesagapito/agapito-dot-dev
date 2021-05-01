<template>
  <section>
    <p class="prose summary">
      <span class="large">Hi,</span>
      my name is Thales Agapito, and I'm a
      <strong>Frontend Developer</strong> based in Brazil that loves programming and creating cool new stuff.
      <br>
      In this page <i class="underline">(made with Vue 3)</i> you'll learn more about my interests, my work, and how to contact me. Make yourself at home ⌂.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="postcss" scoped>
section {
  @apply w-full my-8 p-6 bg-white max-w-prose mx-auto border-2 border-black
  sm:mt-12;
  box-shadow:   6px 6px 0 theme('colors.gray.800');

  .summary {
    @apply font-mono;

    .large {
      @apply text-3xl font-bold;
    }
  }
}
</style>
