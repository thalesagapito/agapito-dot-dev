<script setup lang="ts">
useHead({
  titleTemplate: '%s - Thales Agapito',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content: `Thales Agapito: Frontend Engineer & Vue Specialist with 7+ years of experience.
      Crafting delightful web experiences with a touch of Vue magic.`,
    },
  ],
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-orange-50;
}
</style>
