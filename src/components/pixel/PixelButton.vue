<script lang="ts" setup>
withDefaults(
  defineProps<{
    type: 'normal' | 'primary' | 'success' | 'warning' | 'error'
    label?: string
  }>(),
  {
    type: 'normal',
    label: undefined,
  },
)
</script>

<template>
  <div class="pixel-button-wrapper" :class="[type]">
    <slot>{{ label }}</slot>
  </div>
</template>

<style lang="postcss" scoped>
.pixel-button-wrapper {
  @apply font-pixel bg-transparent px-3 py-1.5 relative text-xs select-none;
  box-shadow: 0 4px 0 black,
              0 -4px 0 black,
              4px 0 0 black,
              -4px 0 0 black;

  &.normal {
    @apply text-black bg-white hover:bg-gray-200;
    &::after {
      content: "";
      @apply absolute inset-0;
      box-shadow: inset -4px -4px 0 theme('colors.gray.300');
    }
    &:active::after {
      box-shadow: inset 4px 4px 0 theme('colors.gray.300');
    }
  }

  &.primary {
    @apply text-white bg-blue-500 hover:text-gray-200 hover:bg-blue-600;
    &::after {
      content: "";
      @apply absolute inset-0;
      box-shadow: inset -4px -4px 0 theme('colors.blue.700');
    }
    &:active::after {
      box-shadow: inset 4px 4px 0 theme('colors.blue.700');
    }
  }

  &.success {
    @apply text-white bg-green-500 hover:text-gray-200 hover:bg-green-600;
    &::after {
      content: "";
      @apply absolute inset-0;
      box-shadow: inset -4px -4px 0 theme('colors.green.700');
    }
    &:active::after {
      box-shadow: inset 4px 4px 0 theme('colors.green.700');
    }
  }

  &.warning {
    @apply text-white bg-orange-500 hover:text-gray-200 hover:bg-orange-600;
    &::after {
      content: "";
      @apply absolute inset-0;
      box-shadow: inset -4px -4px 0 theme('colors.orange.700');
    }
    &:active::after {
      box-shadow: inset 4px 4px 0 theme('colors.orange.700');
    }
  }

  &.danger {
    @apply text-white bg-red-500 hover:text-gray-200 hover:bg-red-600;
    &::after {
      content: "";
      @apply absolute inset-0;
      box-shadow: inset -4px -4px 0 theme('colors.red.700');
    }
    &:active::after {
      box-shadow: inset 4px 4px 0 theme('colors.red.700');
    }
  }
}
</style>
