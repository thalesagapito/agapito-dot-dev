<template>
  <section>
    <h2 class="title">
      My projects
    </h2>
    <div class="box">
      <div class="prose prose-indigo">
        While I have worked for multiple companies, I also like developing my own ideas in my free time. Here are some of the highlights:
        <ul>
          <li>
            <strong class="list-title">
              Personal page:
            </strong>
            The page you're on right now was developed in 2021 using <strong>Vue 3</strong>, <strong>Typescript</strong> and <strong>TailwindCSS</strong>.
            I drew the design myself and implemented it in a weekend.
            It is <strong>statically generated</strong>, then uploaded an <strong>S3 Bucket</strong> and then served to you
            by a <strong>Cloudfront CDN Distribution</strong> <i>(it's cool stuff)</i>.
          </li>

          <li>
            <strong class="list-title">
              Luftcare:
            </strong>
            Initially conceived at the <strong>2018 NASA Space Apps Hackathon Curitiba</strong> <i>(which we won locally and were Global Award nominees, btw hehe)</i>,
            the project centered around a way to provide better care for asthma patients using technology. It evolved into a tool for doctors to monitor their patients health remotely.
            <br>
            Using <strong>Apollo</strong>, <strong>TypeGraphql</strong> and <strong>TypeORM</strong>, I created an API that allowed the creation, submission, and scoring of medical forms.
            <br>
            With <strong>Vue</strong> and <strong>Element UI</strong>, I created a web admin panel for doctors that provided them tools for creating these forms and monitoring their responses.
            <br>
            I also created an app with <strong>Flutter</strong> for the patients to submit their form responses.
            <br>
            Unforntunately, <strong>the project was discontinued in 2020</strong> due to health concerns over conducting research during the pandemic.
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
