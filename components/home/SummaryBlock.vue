<template>
  <section>
    <ReusableDecorativeBox>
      <p class="prose prose-orange">
        <span class="large">Hi,</span>
        my name is Thales Agapito, and I'm a
        <strong>Software Engineer</strong> based in Brazil that loves programming and creating cool new stuff.
        <br>
        In this page you'll learn more about my interests, my work, and how to contact me.
        <br>
        If you're looking for my <strong>CV</strong> it's
        <router-link to="/cv">
          right here.
        </router-link>
      </p>
    </ReusableDecorativeBox>
  </section>
</template>

<style lang="postcss" scoped>
section {
  @apply mt-8 sm:mt-12;

  .large {
    @apply text-3xl font-bold;
  }
}
</style>
