<template>
  <div class="wrapper">
    <HomeTitleBlock />
    <HomeSummaryBlock />
    <HomeAboutMeBlock />
    <HomeMyWorkBlock />
    <HomeMyProjectsBlock />
    <HomeContactMeBlock />
  </div>
</template>

<style lang="postcss">
section {
  @apply w-full mx-auto max-w-prose my-4 md:my-6 lg:mb-8;

  & > .title {
    @apply font-mono text-right text-3xl font-bold underline italic mb-4 mr-4 text-gray-800
    sm:text-4xl;
  }
}
</style>

<style lang="postcss" scoped>
.wrapper {
  @apply flex flex-col container pb-8;
}
</style>
