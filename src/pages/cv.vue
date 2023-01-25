<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const contactInfos = [
      {
        key: 'github',
        text: 'thalesagapito',
        anchor: { href: 'https://github.com/thalesagapito', rel: 'noopener noreferrer', target: '_blank' },
        image: { src: '/images/tech/github.svg', alt: 'Github logo.' },
      },
      {
        key: 'website',
        text: 'agapito.dev',
        anchor: { href: 'https://agapito.dev', rel: 'noopener noreferrer', target: '_blank' },
        image: { src: '/images/tech/globe.svg', alt: 'Globe icon.' },
      },
      {
        key: 'email',
        text: 'thales@agapito.dev',
        anchor: { href: 'mailto:thales@agapito.dev' },
        image: { src: '/images/tech/email.svg', alt: 'Email icon.' },
      },
    ]
    const about = `
      Over 6 years of development experience, passionate about writing beautiful and clean code.
      Problem solver with a proactive attitude, always willing to go the extra mile.
      Contributed to many open source projects, designed and developed complete architectures for multiple applications.
    `

    const skills = [
      {
        title: 'Vue / Nuxt',
        description: `
          In-depth knowledge of Vue 2/3 and Nuxt, mostly using <strong>Typescript</strong>.
          <br>
          Very familiar with many of the ecosystem's libraries, like <strong>Pinia, Vue Router, VueUse</strong>, etc.
        `,
      },
      {
        title: 'Testing',
        description: `
          Strong experience in <strong>unit testing with Jest and Vue Testing Library</strong>.
          Strong experience with <strong>E2E testing with Playwright and Cypress</strong>.
        `,
      },
      {
        title: 'UI / UX',
        description: `
          Experience implementing <strong>responsive UIs</strong> and knowledge about <strong>UX design principles</strong>, worked with <strong>Figma and Adobe XD</strong>.
          <br>
          Strong experience with <strong>Tailwind CSS, Tailwind UI, Headless UI</strong> and related projects.
        `,
      },

      {
        title: 'DevOps / Cloud',
        description: `
          Familiarity with <strong>CI/CD tools</strong> such as <strong>AWS CodePipeline and Github actions</strong>.
          <br>
          Experience with AWS services like <strong>Lambda, EC2, Cloudfront and RDS</strong>.
        `,
      },
      {
        title: 'Miscellaneous',
        description: `
          Good understanding of build tools like <strong>Webpack and Vite</strong>.
          <br>
          Strong experience in <strong>event tracking with Mixpanel</strong>, wrote scaffolding and documentation to empower peers with the tool.
          <br>
          Experience in health monitoring and <strong>error tracking with Sentry</strong>.
        `,
      },
      // {
      //   title: 'Backend',
      //   description: `
      //     Even though I'm currently a frontend engineer, <strong>I've worked as full stack developer before</strong>
      //     and developed multiple APIs. From authentication to payments, both <strong>REST</strong> and <strong>GraphQL</strong>.
      //   `,
      // },
    ]

    const languages = [
      { label: '🇺🇸', level: 'fluent' },
      { label: '🇧🇷', level: 'native' },
    ]

    const workExperiences = [
      {
        title: 'Frontend Engineer, Wunderite',
        location: 'Boston, MA',
        period: 'Feb 2022 - Current',
        topics: [
          'Lead the initiative to create and document a new component library using <strong>Storybook</strong>.'
          + ' Organized the <strong>file structure</strong> and setup <strong>guidelines</strong> for creating new components.'
          + ' Also automated <strong>visual regression testing</strong> using <strong>Chromatic</strong>.',
          'Contributed to the <strong>documentation and establishment of patterns and standards</strong> for frontend code.',
          'Researched and meticulously planned a <strong>Vue 2 to Vue 3 migration</strong>, accounting for every code and package change.',
          'Structured and documented the process for <strong>E2E testing using Playwright</strong>, as well as <strong>unit testing with Jest</strong>',
        ],
      },
      {
        title: 'Head of Frontend, EngagED',
        location: 'Curitiba, Brazil',
        period: 'Nov 2020 — Feb 2022',
        topics: [
          'Coordinated and worked on the rewrite of <strong>Angular projects, migrating to Vue</strong>.',
          'Revamped the devops process using multiple AWS services to <strong>reduce costs</strong>, <strong>increase availability</strong> and <strong>improve performance under heavy loads</strong>.',
          // 'Implemented <strong>SSR</strong> (server side rendering) for better <strong>SEO</strong> and <strong>page load speed</strong>.',
          // 'Added <strong>event tracking</strong> capabilities and <strong>boosted conversion</strong> in enrollment pages.',
        ],
      },
      {
        title: 'Previous experiences',
        period: '2017 - Nov 2020',
        topics: [
          'Varied work including React, Angular, PHP, Java and JS/TS development.',
        ],
      },
    ]

    const otherExperiences = [
      {
        title: 'NASA Space Apps Hackathon 2018 Winner',
        location: 'Curitiba, Brazil',
        topics: [
          'Developed a <strong>local award winning</strong> and <strong>global nominee</strong> solution. Using <strong>Nativescript-Vue</strong>, I created a PoC app for asthma patients to monitor their treatment.',
          'The project evolved into a tool for doctors to create and evaluate health questionnaires. It was discontinued in 2020 due to health concerns regarding research during the pandemic.',
        ],
      },
      {
        title: 'Strassen - Sneaker marketplace',
        location: 'Curitiba, Brazil',
        topics: [
          'Using <strong>Prisma and Nexus GraphQL</strong>, I created an API for management and buy/sell operations for a sneaker marketplace.',
          'Using <strong>Vue and TypeScript</strong>, I developed an admin dashboard and a public website for users to buy and sell their sneakers.',
          'The project uses many AWS services, such as <strong>S3, RDS, Cloudfront CDN and Lambda Functions</strong>.',
        ],
      },
    ]

    return {
      contactInfos,
      about,
      skills,
      languages,
      workExperiences,
      otherExperiences,
    }
  },
})
</script>

<template>
  <floating-back-button />
  <div class="wrapper">
    <section class="header">
      <div class="flex flex-col">
        <h1>
          Thales
          <br class="print:hidden">
          Agapito
        </h1>
        <h2 class="print:hidden">
          Frontend Engineer
        </h2>
      </div>

      <dl class="contact">
        <!-- <dd v-for="{label, level} in languages" :key="label" class="flex items-center space-x-2">
          <small>{{ level }}</small><span>{{ label }}</span>
        </dd>
        <br> -->
        <dd v-for="{ key, anchor, text, image } in contactInfos" :key="key">
          <a v-bind="anchor">
            <span>{{ text }}</span>
            <img width="16" height="16" v-bind="image">
          </a>
        </dd>
      </dl>
    </section>

    <div class="infos">
      <section class="about">
        <h3 class="section-title">
          About
        </h3>
        <p v-html="about" />
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
    @apply flex justify-between items-center border-b pt-10 pb-4;
    grid-area: header;
    h1 {
      @apply text-gray-800 font-medium uppercase text-5xl tracking-widest;
    }
    h2 {
      @apply text-gray-500 text-xl pt-4 tracking-wide;
    }
    .contact {
      @apply flex flex-col justify-center items-end w-full print:text-sm;
      dd a {
        @apply flex items-center space-x-2 mb-2;
        img {
          @apply h-4 mt-px;
        }
      }
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

  .about p {
    @apply prose print:prose-sm;
  }

  .about,
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

    .about,
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
      .contact,
      .contact dd a {
        @apply my-0;
      }
    }

    ul,
    .experiences .experience ul {
      @apply list-none;
      li {
        @apply pl-0;
        &::before {
          @apply hidden;
        }
      }
    }

    .about,
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

    .about,
    .details,
    .experiences {
      @apply pt-4;
    }
  }
}
</style>
