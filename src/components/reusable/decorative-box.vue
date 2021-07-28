<template>
  <div class="decorative-box">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss" scoped>
.decorative-box {
  @apply w-full p-6 bg-white border-2 border-black font-mono rounded;
  box-shadow: 6px 6px 0 theme('colors.gray.700');
}
</style>
