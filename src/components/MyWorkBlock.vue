<template>
  <section>
    <h2 class="title">
      My work
    </h2>
    <div class="box">
      <div class="prose prose-indigo">
        Even though I'm a Frontend Developer, I have been known to work with varied technologies when needed.
        <br>
        You can see below the different fields I've worked on and my experience in them:
        <ul>
          <li>
            <strong class="list-title">
              Frontend:
              <div class="icons">
                <img src="/images/tech/vue.svg" alt="Vue logo.">
                <img src="/images/tech/tailwind.svg" alt="TailwindCSS logo." class="py-0.5">
                <img src="/images/tech/ts.svg" alt="TypeScript logo.">
                <img src="/images/tech/jest.svg" alt="Jest logo.">
              </div>
            </strong>
            Working primarily with
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="font-bold">Vue</a>
            <i> (both 2 and 3)</i>, I've structured complete frontends for multiple projects.
            I also have some experience with
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" class="font-bold">React</a>,
            but not as much.
            <br>
            Other experiences in the field include:
            <strong>TypeScript</strong>,
            <strong>Unit Testing</strong> with
            <a href="https://jestjs.io" target="_blank" rel="noopener noreferrer">Jest</a>,
            writing CSS with
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a>
            and creating a full <strong>Design System</strong> with
            <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">Storybook</a>.
          </li>

          <li>
            <strong class="list-title">
              Backend:
              <div class="icons">
                <img src="/images/tech/ts.svg" alt="TypeScript logo.">
                <img src="/images/tech/gql.svg" alt="GraphQL logo.">
                <img src="/images/tech/jest.svg" alt="Jest logo.">
              </div>
            </strong>
            Working primarily with <strong>Node</strong> + <strong>TypeScript</strong>,
            I've structured complete <strong>REST</strong> and
            <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">GraphQL</a>
            <strong> APIs</strong> for multiple projects.
            <br>
            I've worked primarily with relational databases such as
            <a href="https://postgresql.org" target="_blank" rel="noopener noreferrer">PostgreSQL</a>
            and
            <a href="https://mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>
            but also had some experience with <strong>non-relational databases</strong> such as
            <a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noopener noreferrer">DynamoDB</a>.
            <br>
            Other experiences in the field include:
            <a href="https://prisma.io" target="_blank" rel="noopener noreferrer">Prisma ORM</a>,
            <strong>Unit Testing</strong> with
            <a href="https://jestjs.io" target="_blank" rel="noopener noreferrer">Jest</a>
            and creating a <strong>Web Scraper</strong>.
          </li>

          <li>
            <strong class="list-title">
              Devops:
              <div class="icons">
                <img src="/images/tech/aws.svg" alt="AWS logo.">
              </div>
            </strong>
            I have experience with <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a>,
            and have used varied services at multiple projects. Some of my favorites include <strong>Lambda functions</strong> for cheap and scalable code,
            <strong>Cloudfront CDN + S3</strong> for blazing fast static sites <i>(like the one you're in right now)</i> and
            <strong>DynamoDB/RDS</strong> for simple cloud-hosted databases.
          </li>
        </ul>
      </div>

      <div class="asterisks">
        * * *
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="postcss" scoped>
section {
  .box {
    .list-title {
      .icons {
        @apply flex justify-start h-5 ml-2;
        img {
          @apply h-full my-0 mx-2;
        }
      }
    }
  }
}
</style>
