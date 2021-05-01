<template>
  <section>
    <div class="box">
      <p class="prose">
        <span class="large">Hi,</span>
        my name is Thales Agapito, and I'm a
        <strong>Frontend Developer</strong> based in Brazil that loves programming and creating cool new stuff.
        <br>
        In this page <i class="underline">(made with Vue 3)</i> you'll learn more about my interests, my work, and how to contact me. Make yourself at home <strong>⌂</strong>.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="postcss" scoped>
section {
  @apply mt-8 sm:mt-12;

  .large {
    @apply text-3xl font-bold;
  }
}
</style>
