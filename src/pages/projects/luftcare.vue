<template>
  <floating-back-button />
  <div class="wrapper">
    <h1>Luftcare</h1>
    <decorative-box>
      <h2>What is it?</h2>
      <p>
        <strong>Luftcare</strong> is the name of a project I started with a team at the <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noopener noreferrer">2018 NASA Space Apps Hackathon</a>.
        <br>
        Our initial intention was to create an app for asthma patients that provided them with better tools for monitoring and improving their health.
        <br>
        Since the Hackathon spanned over a single weekend, I was responsible for creating a PoC app using <a href="https://nativescript-vue.org/" target="_blank" rel="noopener noreferrer">Nativescript Vue</a>.
        <br>
        Thankfully, our team was able to deliver most of what we had planned, including a smart inhaler prototype and my app.
        Also, we were local winners and global nominees! 🥳
      </p>
      <a href="https://www.youtube.com/watch?v=vfSkPLKuEkY&ab_channel=SpaceLabsBrazil" target="_blank" rel="noopener noreferrer">Check out more about the Hackathon here.</a>

      <div class="flex items-center">
        <div class="image-container">
          <img src="/images/luftcare/inhaler.jpeg" alt="Our smart inhaler prototype.">
          <small>Our smart inhaler prototype.</small>
        </div>
        <div class="image-container">
          <img src="/images/luftcare/app-nativescript.png" alt="Our PoC app.">
          <small>Our PoC app.</small>
        </div>
      </div>

      <h2>How did it evolve?</h2>
      <p>
        After the Hackathon, we decided to keep working until we had a real product. We reduced our scope and focused on shipping a simple <strong>app for doctors to create and evaluate medical questionnaires</strong>.
        <br>
        At this point I decided to scrap our <strong>Nativescript</strong> app and look for a better solution, since the only reason why I chose Nativescript during the event was because I had just <strong>48 hours</strong> and <strong>no experience with mobile development</strong> but a <strong>solid Vue background</strong> 🤷🏽‍♂️
        <br>
      </p>

      <h2>The stack</h2>
      <p>
        A lot of research later, I eventually arrived at our tech stack.
        I chose <strong>Flutter</strong> for our mobile app, a <strong>GraphQL API with TypeGraphQL</strong> and a <strong>Vue + TS web client</strong>.
        Below I explore each decision and my experience with all the tech.
      </p>
      <div class="image-container -mt-4">
        <img src="/images/luftcare/stack.jpeg" alt="Our tech stack.">
        <small>Our tech stack.</small>
      </div>
      <h3>Graphql API</h3>
      🚧 Work in progress 🚧
      <h3>Vue Web client</h3>
      🚧 Work in progress 🚧
      <h3>Flutter app</h3>
      🚧 Work in progress 🚧
      <decorative-asterisks />
    </decorative-box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply mx-auto prose prose-indigo py-10 px-4;
  h1 {
    @apply text-center;
  }
  h2 {
    &:first-of-type {
      @apply mt-0;
    }
  }

  .image-container {
    @apply w-full flex flex-col items-center;
    img {
      @apply w-2/3 mx-auto mb-4 border-2 border-black;
      box-shadow: 6px 6px 0 theme('colors.gray.700');
    }
    small {
      @apply text-center;
    }
  }
}
</style>
