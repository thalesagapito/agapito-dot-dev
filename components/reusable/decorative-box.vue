<template>
  <div class="ReusableDecorativeBox">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.ReusableDecorativeBox {
  @apply w-full p-6 bg-white border-2 border-black font-mono rounded;
  box-shadow: 6px 6px 0 theme('colors.stone.700');
}
</style>
