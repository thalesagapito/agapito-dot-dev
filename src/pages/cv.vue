<template>
  <floating-back-button />
  <div class="wrapper">
    <section class="header">
      <h1>
        Thales
        <br class="print:hidden">
        Agapito
      </h1>
      <h2>
        Frontend Developer
      </h2>
    </section>

    <div class="infos">
      <section class="details">
        <h3 class="section-title">
          Details
        </h3>
        <dl>
          <dt>Email</dt>
          <dd><a href="mailto:thsousa101@gmail.com">thsousa101@gmail.com</a></dd>
          <dt>Github</dt>
          <dd><a href="https://github.com/thalesagapito" target="_blank" rel="noopener noreferrer">thalesagapito</a></dd>
          <dt>Website</dt>
          <dd><a href="https://agapito.dev" target="_blank" rel="noopener noreferrer">agapito.dev</a></dd>
        </dl>
      </section>

      <section class="skills">
        <h3 class="section-title">
          Skills
        </h3>

        <dl>
          <template v-for="{ title, description }, i in skills" :key="title">
            <dt :class="{ 'pt-4': i }" v-html="title" />
            <dd v-html="description" />
          </template>
        </dl>
      </section>

      <section class="languages">
        <h3 class="section-title">
          Languages
        </h3>
        <div class="prose print:prose-sm">
          <ul>
            <li v-for="language in languages" :key="language" v-html="language" />
          </ul>
        </div>
      </section>
    </div>

    <section class="experiences">
      <h3 class="section-title">
        Work experience
      </h3>

      <div v-for="{ title, location, period, topics } in workExperiences" :key="title" class="experience">
        <h4 class="title" v-html="title" />
        <span class="location" v-html="location" />
        <span class="period" v-html="period" />
        <ul class="topics">
          <li v-for="topic in topics" :key="topic" v-html="topic" />
        </ul>
      </div>

      <h3 class="section-title">
        Other experiences
      </h3>

      <div v-for="{ title, location, topics } in otherExperiences" :key="title" class="experience">
        <h4 class="title" v-html="title" />
        <span class="location" v-html="location" />
        <ul class="topics">
          <li v-for="topic in topics" :key="topic" class="other" v-html="topic" />
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const skills = [
      {
        title: 'Vue',
        description: `
          I have worked with and structured multiple projects using Vue <strong>since 2018</strong>.
          My experience includes <strong>both Vue 2 and 3</strong>,
          ranging from <strong>mobile-first customer centric interfaces</strong>,
          to <strong>feature-rich dashboards in SSR applications</strong>.
        `,
      },
      {
        title: 'Typescript',
        description: `
          While I started using Typescript in <strong>2018 in a backend application</strong>,
          I only applied it in frontend development in <strong>2019</strong>.
          Since then I have almost always <strong>pushed for Typescript codebases</strong> for the added <strong>maintainability over the years</strong>.
        `,
      },
      {
        title: 'DevOps / Cloud',
        description: `
          My work as a frontend developer encompasses <strong>deploying and maintaining</strong> my projects.
          Mostly focusing on AWS, I have experience with multiple services for <strong>building and deploying</strong> code.
        `,
      },
      // {
      //   title: 'Backend',
      //   description: `
      //     Even though I'm currently a frontend developer, <strong>I've worked as full stack developer before</strong>
      //     and developed multiple APIs. From authentication to payments, both <strong>REST</strong> and <strong>GraphQL</strong>.
      //   `,
      // },
    ]

    const languages = [
      '<strong>Portuguese </strong>(Native)',
      '<strong>English </strong>(Fluent)',
    ]

    const workExperiences = [
      {
        title: 'Frontend Developer, EngagED',
        location: 'Curitiba',
        period: 'Aug 2019 — Mar 2020, Nov 2020 — Current',
        topics: [
          'Responsible for replacing multiple legacy frontend codebases with <strong>newer and better-suited tech<strong>.',
          'Brought new strategies to the devops process. Using multiple AWS services to <strong>reduce costs</strong>, <strong>increase availability</strong> and <strong>improve performance under heavy loads</strong>.',
          'Hand-picked the technologies for the frontend stack. Focusing on <strong>maintainability</strong>, a <strong>shallow learning curve</strong> and <strong>performance</strong>, arrived on a combination of <strong>Vue + Typescript + Tailwind CSS (PostCSS)</strong>.',
          // 'Implemented <strong>SSR</strong> (server side rendering) for better <strong>SEO</strong> and <strong>page load speed</strong>.',
          // 'Added <strong>event tracking</strong> capabilities and <strong>boosted conversion</strong> in enrollment pages.',
        ],
      },
      {
        title: 'Full Stack Developer, Leads2b',
        location: 'Curitiba',
        period: 'Mar 2020 — Nov 2020',
        topics: [
          'Tasked with maintaining legacy codebases in Vue and PHP.',
          'Responsible for structuring and development of a <strong>Design System</strong> using <strong>Vue, Tailwind CSS, Storybook and full unit test coverage with Jest</strong>.',
        ],
      },
    ]

    const otherExperiences = [
      {
        title: 'NASA Space Apps Hackathon 2018 Winner',
        location: 'Curitiba',
        topics: [
          'Developed a <strong>local award winning</strong> and <strong>global nominee</strong> solution. Using <strong>Nativescript-Vue</strong>, I created a PoC app for asthma patients to better monitor their treatment.',
          'The project evolved into a tool for doctors to create and evaluate health questionnaires. It was discontinued in 2020 due to health concerns over conducting research during the pandemic.',
        ],
      },
      {
        title: 'Strassen',
        location: 'Curitiba',
        topics: [
          'Developed a <strong>marketplace for buying and selling sneakers</strong>. Using <strong>Prisma and Nexus GraphQL</strong> I created an API for management and buy or sell operations.',
          'Using <strong>Vue and Typescript</strong>, I developed an admin dashboard and a public website for users to buy and sell their sneakers.',
          'The project uses many AWS services, such as <strong>S3, RDS, Cloudfront CDN and Lambda Functions</strong>.',
        ],
      },
    ]

    return {
      skills,
      languages,
      workExperiences,
      otherExperiences,
    }
  },
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply grid container bg-white pb-2 items-start;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "infos"
    "experiences";

  section {
    @apply max-w-none my-0;
    .section-title {
      @apply relative text-2xl mt-2 mb-6 uppercase font-semibold text-gray-700 tracking-widest;
      &::after {
        @apply h-1 w-12 absolute left-0 bottom-0 -mb-2 ml-1 bg-gray-600;
        content: '';
      }
    }
  }

  .header {
    @apply flex flex-col justify-start items-start border-b pt-10 pb-8;
    grid-area: header;
    h1 {
      @apply text-gray-800 font-medium uppercase text-5xl tracking-widest;
    }
    h2 {
      @apply text-gray-500 text-xl pt-4 tracking-wide;
    }
  }

  .infos {
    grid-area: infos;
  }

  .skills {
    .title {
      @apply font-bold uppercase;
    }
  }

  .details,
  .skills {
    @apply pt-6;
    dl {
      @apply prose print:prose-sm pt-2;
      dt {
        @apply text-gray-800 uppercase font-bold mt-2;
      }
      dd a {
        @apply text-gray-600 no-underline;
      }
    }
  }

  .languages {
    @apply pt-6;
  }

  .experiences {
    @apply flex flex-col justify-start items-start py-6;
    grid-area: experiences;
    .experience {
      @apply grid py-2 items-center prose print:prose-sm;
      grid-template-columns: auto 1fr auto;
      grid-template-areas:
        "title  .       location"
        "period period  period"
        "topics topics  topics";

      &:last-of-type {
        @apply pb-0;
      }

      .title {
        @apply my-0;
        grid-area: title;
      }
      .location {
        @apply text-sm;
        grid-area: location;
      }
      .period {
        @apply font-medium text-gray-500 italic text-sm;
        grid-area: period;
      }
      .topics {
        @apply mt-1 mb-0;
        grid-area: topics;
        li {
          @apply my-1;
        }
      }
    }
  }
}

@screen sm {
  .wrapper {
    @apply rounded-xl shadow-xl my-8 pb-4;
    grid-template-areas:
      "header"
      "infos"
      "experiences";

    .details {
      dl {
        @apply grid grid-rows-2 grid-cols-2 grid-flow-col;
        dt {
          @apply mt-0;
        }
      }
    }
  }
}

@screen md {
  .wrapper {
    @apply pb-8;
    grid-template-columns: 42fr 58fr;
    grid-template-areas:
      "header header"
      "infos  experiences";

    .details {
      dl {
        @apply grid grid-rows-2 grid-cols-1 grid-flow-row;
        dt {
          @apply mt-2;
        }
      }
    }

    .details,
    .skills,
    .languages {
      @apply pr-6;
    }

    .experiences {
      @apply border-l pl-6;
    }
  }
}

@screen lg {
  .wrapper {
    @apply pb-10;
  }
}

@screen print {
  .wrapper {
    @apply px-0;
    grid-template-columns: 40fr 60fr;
    grid-template-areas:
      "header header"
      "infos  experiences";
    section .section-title {
      @apply text-xl mb-0;
      &::after {
        @apply hidden;
      }
    }

    .header {
      @apply pt-0 pb-3;
      h1 {
        @apply text-2xl mb-0;
      }
      h2 {
        @apply text-lg pt-0;
      }
    }

    .prose ul,
    .experiences .experience ul {
      @apply list-none;
      li {
        @apply pl-0;
        &::before {
          @apply hidden;
        }
      }
    }

    .details,
    .skills,
    .languages {
      @apply pr-6;
    }

    .experiences {
      @apply border-l pl-6 pb-0 mb-0;

      .experience {
        .topics {
          @apply m-0;

          li.other:last-of-type {
            @apply mb-0;
          }
        }
      }
    }

    .details,
    .experiences {
      @apply pt-4;
    }
  }
}
</style>
