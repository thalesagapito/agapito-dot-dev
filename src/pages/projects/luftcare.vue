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
        <img src="/images/luftcare/stack.jpeg" alt="How our tech stack evolved over time, a Nativescript logo with an arrow pointing to three more logos, Vue, Flutter and GraphQL.">
        <small>How our tech stack evolved.</small>
      </div>

      <h3>
        GraphQL API
        <a href="https://github.com/thalesagapito/luftcare-api" target="_blank" rel="noopener noreferrer">
          <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
        </a>
      </h3>

      <p>
        For the API, I decided to go with a combination of
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a>,
        <a href="https://typeorm.io/#/" target="_blank" rel="noopener noreferrer">TypeORM</a>,
        <a href="https://typegraphql.com/" target="_blank" rel="noopener noreferrer">TypeGraphQL</a> and
        <a href="https://www.apollographql.com/docs/apollo-server/" target="_blank" rel="noopener noreferrer">Apollo Server</a> (plus
        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> for the
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">Postgres DB</a> image).
        <br>
        My experience was a mixed bag, here are some highlights:
      </p>
      <ul>
        <li>✅ Going with Typescript made the codebase much more maintainable over time, incredibly useful.</li>
        <li>✅ Since I had multiple API consumers, choosing GraphQL over REST instantly addressed my over/underfetching concerns.</li>
        <li>✅ Using both TypeORM and TypeGraphQL's decorator approach was very nice, since I only had to create one class for each entity, <a href="https://github.com/thalesagapito/luftcare-api/blob/master/src/entities/Questionnaire.ts" target="_blank" rel="noopener noreferrer">see here</a>.</li>
        <li>🚫 TypeGraphQL was very new at the time <strong>(at version 0.17.6)</strong>, so related content was sparse. I had to go with whatever I thought was the best way to do things, facing problems not covered by guides, Stack Overflow or the official docs.</li>
        <li>
          🚫 While TypeGraphQL is very flexible, it can also be very tedious to implement. Creating every single <strong>input type</strong>/<strong>mutation</strong>/<strong>query</strong> can take a long time.
          I later discovered other approaches which did most of the heavy lifting for me, but it was too late to use in this project.
        </li>
      </ul>

      <h3>
        Vue Web Client
        <a href="https://github.com/thalesagapito/luftcare-web-client" target="_blank" rel="noopener noreferrer">
          <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
        </a>
      </h3>
      <p>
        Our web client was simple: a dashboard for doctors to create questionnaires and evaluate their responses.
        With that in mind, I decided to use
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a>,
        Vue 2 (<a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt</a>),
        <a href="https://element.eleme.io/#/en-US" target="_blank" rel="noopener noreferrer">Element UI</a>,
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> and
        <a href="https://github.com/nuxt-community/apollo-module" target="_blank" rel="noopener noreferrer">Apollo Client</a> with
        <a href="https://www.graphql-code-generator.com/" target="_blank" rel="noopener noreferrer">GraphQL Code Generator</a>.
        <br>
        The experience here was overall more positive than in the API, here are some highlights:
      </p>
      <ul>
        <li>✅ The <strong>Vue + Element + Tailwind</strong> combo was great! I was flying through the screens using Element's pre-made components and making quick adjustments with Tailwind when needed.</li>
        <li>✅ <strong>GraphQL Codegen + Typescript</strong> was also great: by running a script I had the full API types. This made everything much more predictable and easier to maintain.</li>
        <li>🚫 <strong>Vue 2 + Typescript</strong> support could definitely be improved, but I don't consider this a problem currently since Vue 3's support is very good.</li>
      </ul>

      <h3>
        Flutter App
        <a href="https://github.com/thalesagapito/luftcare_flutter_app" target="_blank" rel="noopener noreferrer">
          <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
        </a>
      </h3>
      <p>🚧 Work in progress 🚧</p>
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
  @apply mx-auto prose prose-orange py-10 px-4;
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
      @apply w-2/3 mx-auto mb-4 border-2 border-black rounded;
      box-shadow: 6px 6px 0 theme('colors.gray.700');
    }
    small {
      @apply text-center;
    }
  }

  h3 {
    @apply flex items-center;
    a {
      @apply block ml-4;
      img {
        @apply my-0;
      }
    }
  }
}
</style>
