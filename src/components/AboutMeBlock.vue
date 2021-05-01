<template>
  <section>
    <h2 class="title">
      About me
    </h2>
    <div class="box">
      <p class="prose">
        I'm {{ currentAge }} years old and have been programming since I was 15.
        <br>
        Back then, I loved the idea of creating my own game, which inspired me to keep learning.
        <br>
        Nowadays, I have found many other fullfilling activities that keep me motivated.
        Still, <strong>programming is one of my favorite hobbies</strong>, as it's always challenging and lets me be creative with my work.
        <br>
        <br>
        Some of my other interests are sneakers, photography and rap music.
      </p>

      <div class="interests">
        <div class="polaroid sneaker">
          <img src="/images/sneaker.jpeg" alt="A pair of white Nike Blazer sneakers.">
          <span>blazers</span>
          <small>cool shoes!</small>
        </div>

        <div class="polaroid rap">
          <img src="/images/rap.jpeg" alt="Album cover of the critically acclaimed Piñata by Freddie Gibbs.">
          <span>piñata</span>
          <small>cool album!</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const birthDate = dayjs('09/02/1998')
    const currentAge = computed(() => dayjs().diff(birthDate, 'years'))

    return { currentAge }
  },
})
</script>

<style lang="postcss" scoped>
section {
  .box {
    .interests {
      @apply w-full relative h-36 mt-8 mb-4;

      .polaroid {
        @apply absolute h-auto bg-white p-1.5 shadow-lg border border-black
        flex flex-col;

        img {
          @apply w-full h-auto border border-black;
        }
        span {
          @apply block prose text-center text-sm w-full pt-1.5 font-mono font-bold;
        }
        small {
          @apply text-xs text-red-600 prose text-center w-full font-mono italic;
        }

        &.sneaker {
          @apply top-0;
          left: 50%;
          max-width: theme('spacing.36');
          transform: rotate(3deg) translateX(-100%);
        }
        &.rap {
          @apply top-0;
          right: 50%;
          max-width: theme('spacing.32');
          transform: rotate(-5deg) translateX(calc(100% + 0.25rem)) translateY(-0.5rem);
        }
      }
    }
  }
}
</style>
