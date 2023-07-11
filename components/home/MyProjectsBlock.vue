<template>
  <section>
    <h2 class="title">
      My projects
    </h2>
    <ReusableDecorativeBox>
      <div class="prose prose-orange">
        While I have worked for multiple companies, I also like developing my own ideas in my free time. Here are some of the highlights:
        <ul>
          <li>
            <strong class="list-title">
              Personal page:
              <div class="icons">
                <a href="https://github.com/thalesagapito/agapito-dot-dev" target="_blank" rel="noopener noreferrer">
                  <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
                </a>
              </div>
            </strong>
            The page you're on right now was developed in 2021 using <strong>Vue 3</strong>, <strong>Typescript</strong> and <strong>TailwindCSS</strong>.
            It is <strong>statically generated</strong> and deployed using <strong>AWS Amplify</strong>.
          </li>

          <li>
            <strong class="list-title">
              Luftcare:
              <div class="icons">
                <a href="https://github.com/thalesagapito/luftcare-api" target="_blank" rel="noopener noreferrer">
                  <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
                  <small>API</small>
                </a>
                <a href="https://github.com/thalesagapito/luftcare-web-client" target="_blank" rel="noopener noreferrer">
                  <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
                  <small>WEB</small>
                </a>
                <a href="https://github.com/thalesagapito/luftcare_flutter_app" target="_blank" rel="noopener noreferrer">
                  <img width="20" height="20" src="/images/tech/github.svg" alt="Github logo.">
                  <small>APP</small>
                </a>
              </div>
            </strong>
            Initially conceived at the <strong>2018 NASA Space Apps Hackathon Curitiba</strong> <i>(which we won locally and were Global Award nominees)</i>,
            the project centered around a way to provide better care for asthma patients using technology. It evolved into a tool for doctors to monitor their patients health remotely.
            <br>
            Using <strong>Apollo</strong>, <strong>TypeGraphQL</strong> and <strong>TypeORM</strong>, I created an API that allowed the creation, submission, and scoring of medical questionnaires.
            <br>
            With <strong>Vue</strong> and <strong>Element UI</strong>, I created a web admin panel for doctors that provided them tools for creating these questionnaires and monitoring their responses.
            <br>
            I also created an app with <strong>Flutter</strong> for the patients to submit their form responses.
            <br>
            Unfortunately, <strong>the project was discontinued in 2020</strong> due to health concerns over conducting research during the pandemic.
            <br>
            <router-link to="/projects/luftcare">
              Read more about it here.
            </router-link>
          </li>

          <li>
            <strong class="list-title">There's more!</strong>
            <strong>I just haven't had the time to write them all down.</strong>
            <br>
            But ask me about <strong>Strassen</strong>, <strong>Hangloos</strong>, or what I'm currently working on and I'll be happy to tell you.
          </li>
        </ul>
      </div>

      <ReusableDecorativeAsterisks />
    </ReusableDecorativeBox>
  </section>
</template>

<style lang="postcss" scoped>
section {
  .ReusableDecorativeBox {
    .list-title {
      @apply prose-lg flex justify-start items-center pb-1;
      .icons {
        @apply flex justify-start h-7 ml-1;

        a {
          @apply flex flex-col items-center text-xs no-underline text-gray-800;
          img {
            @apply h-full my-0 mx-2;
          }
          small {
            @apply no-underline;
          }
        }
      }
    }
  }
}
</style>
