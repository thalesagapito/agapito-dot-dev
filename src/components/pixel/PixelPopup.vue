<template>
  <div v-if="visible" class="pixel-popup-wrapper">
    <p>Try the interactive mode?</p>

    <div class="buttons">
      <pixel-button label="yes" type="warning" @click="$router.push('/pixel')" />
      <pixel-button label="no" @click="visible = false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

const visible = ref(true)
</script>

<style lang="postcss" scoped>
.pixel-popup-wrapper {
  @apply font-pixel text-xs flex-col items-center w-48 cursor-pixel bg-white
  hidden md:flex fixed top-6 right-6 p-3 border-4 border-black;
  box-shadow: 0.125rem black;

  p {
    @apply text-center leading-relaxed;
  }

  .buttons {
    @apply flex justify-between items-center w-full px-2 pt-4 pb-1;
  }
}
</style>
