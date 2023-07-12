<script setup lang="ts">
useHead({ title: 'Luftcare' })
</script>

<template>
  <floating-back-button />
  <div class="wrapper">
    <h1>Luftcare</h1>
    <ReusableDecorativeBox>
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
          <img
            class="w-2/3"
            src="/images/luftcare/inhaler.jpeg"
            alt="Our smart inhaler prototype."
          >
          <small>Our smart inhaler prototype.</small>
        </div>
        <div class="image-container">
          <img
            class="w-2/3"
            src="/images/luftcare/app-nativescript.png"
            alt="Our PoC app."
          >
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
        <img
          class="w-2/3"
          src="/images/luftcare/stack.jpeg"
          alt="How our tech stack evolved over time, a Nativescript logo with an arrow pointing to three more logos, Vue, Flutter and GraphQL."
        >
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

      <div class="image-container -mt-4">
        <img
          class="w-11/12"
          src="/images/luftcare/dashboard.jpg"
          alt="Our dashboard. A page containing a sidebar with multiple links, a large line graph and a table."
        >
        <small>Our dashboard.</small>
      </div>

      <h3>
        Flutter App
        <a href="https://github.com/thalesagapito/luftcare_flutter_app" target="_blank" rel="noopener noreferrer">
          <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
        </a>
      </h3>
      <p>
        The app was also very straightforward. It had a login page, a home page with a listing of available and answered questionnaires, and the questionnaire answer pages.
        Since it consumed a GraphQL API, I used <a href="https://github.com/comigor/artemis" target="_blank" rel="noopener noreferrer">Artemis</a>, a Dart type generator from GraphQL schemas and queries, which made the experience a lot more enjoyable.
        Here are some of the highlights:
      </p>
      <ul>
        <li>✅ <strong>Flutter</strong> (or any hybrid approach) was definitely the best decision, writing one code and getting two apps was essential for our time limitations.</li>
        <li>✅ <strong>Artemis</strong> was also very good: while the setup was more complicated, the generated types help out a lot in the long run.</li>
      </ul>

      <div class="flex items-start -mt-4">
        <div class="image-container">
          <img
            class="w-2/3 flutter"
            src="/images/luftcare/app-flutter-1.jpg"
            alt="Home page with questionnaires listing."
          >
          <small>Home page.</small>
        </div>
        <div class="image-container">
          <img
            class="w-2/3 flutter"
            src="/images/luftcare/app-flutter-2.jpg"
            alt="Questionnaire answering page."
          >
          <small>Questionnaire answering page.</small>
        </div>
      </div>

      <h2>Deployment</h2>
      <p>
        The API and Web Dashboard were deployed to a DigitalOcean droplet, and the Flutter App was published on app stores.
        The CI/CD was handled using <a href="https://buddy.works/" target="_blank" rel="noopener noreferrer">Buddy</a>.
      </p>

      <h2>Conclusion</h2>
      <p>
        The project was interrupted in 2020 due to health concerns over conducting research during the pandemic.
        <br>
        Still, it was fun while it lasted and a great learning opportunity for me. It was my first time doing a lot of things on my own.
        Like publishing a Flutter app, configuring a CI/CD workflow, and deploying an API/Web app publicly.
        <br>
        I gained a lot of experience and much of what I learned was useful later on.
      </p>

      <ReusableDecorativeAsterisks />
    </ReusableDecorativeBox>
  </div>
</template>

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
      @apply mx-auto mb-4 border-2 border-black rounded;
      box-shadow: 6px 6px 0 theme('colors.stone.700');
      &.flutter {
        @apply rounded-3xl;
      }
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
