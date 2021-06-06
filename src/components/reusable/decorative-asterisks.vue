<template>
  <span class="asterisks" aria-hidden="true">
    * * *
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss" scoped>
.asterisks {
  @apply block w-full py-2 text-center text-4xl font-bold font-mono tracking-widest
  md:py-3;
}
</style>
