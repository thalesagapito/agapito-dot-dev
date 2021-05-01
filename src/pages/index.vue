<template>
  <div class="wrapper">
    <title-block />
    <summary-block />
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    useHead({
      title: 'Thales Agapito · Frontend Developer',
    })
  },
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col container;
}
</style>
