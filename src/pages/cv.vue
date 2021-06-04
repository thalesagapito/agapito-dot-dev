<template>
  <floating-back-button />
  <div class="wrapper">
    <section class="header">
      <h1>
        Thales
        <br>
        Agapito
      </h1>
      <h2>
        Frontend Developer
      </h2>
    </section>

    <section class="details">
      <h3 class="section-title">
        Details
      </h3>
      <dl>
        <dt>Email</dt>
        <dd><a href="mailto:thsousa101@gmail.com">thsousa101@gmail.com</a></dd>
        <dt>Github</dt>
        <dd><a href="http://github.com/thalesagapito" target="_blank" rel="noopener noreferrer">thalesagapito</a></dd>
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
      <div class="prose">
        <ul>
          <li v-for="language in languages" :key="language" v-html="language" />
        </ul>
      </div>
    </section>

    <section class="experiences">
      <h3 class="section-title">
        Work experience
      </h3>

      <div v-for="{ title, location, period, topics } in experiences" :key="title" class="experience">
        <h4 class="title" v-html="title" />
        <span class="location" v-html="location" />
        <span class="period" v-html="period" />
        <ul class="topics">
          <li v-for="topic in topics" :key="topic" v-html="topic" />
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
          While my first experience with Typescript was in <strong>2018 in a backend application</strong>,
          I started using it for frontend development in <strong>2019</strong>.
          Since then I have benefited from much more <strong>maintainable projects</strong> over the years.
        `,
      },
    ]

    const languages = [
      '<strong>Portuguese </strong>(Native)',
      '<strong>English </strong>(Fluent)',
    ]

    const experiences = [
      {
        title: 'Frontend Developer, EngagED',
        location: 'Curitiba',
        period: 'Jan 2019 — Current',
        topics: [
          'Responsible for eliminating multiple legacy frontend codebases and replacing them with newer and better-suited technologies.',
          'Implemented SSR (server side rendering) for better SEO and page load speed.',
          'Added event tracking capabilities and boosted conversion in enrollment pages.',
        ],
      },
    ]

    return {
      skills,
      languages,
      experiences,
    }
  },
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply grid container bg-white pb-2;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "details"
    "skills"
    "languages"
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

  .details {
    grid-area: details;
  }

  .skills {
    grid-area: skills;
    .title {
      @apply font-bold uppercase;
    }
  }

  .details,
  .skills {
    @apply pt-6;
    dl {
      @apply prose pt-2;
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
    grid-area: languages;
  }

  .experiences {
    @apply flex flex-col justify-start items-start pt-6;
    grid-area: experiences;
    .experience {
      @apply grid pt-2 pb-4 items-center prose;
      grid-template-columns: auto 1fr auto;
      grid-template-areas:
        "title  .       location"
        "period period  period"
        "topics topics  topics";

      .title {
        @apply my-0;
        grid-area: title;
      }
      .location {
        @apply text-sm;
        grid-area: location;
      }
      .period {
        @apply font-medium text-gray-500 italic;
        grid-area: period;
      }
      .topics {
        @apply mt-2 mb-0;
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
      "details"
      "skills"
      "languages"
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
    @apply pb-10;
    grid-template-columns: 42fr 58fr;
    grid-template-areas:
      "header     header"
      "details    experiences"
      "skills     experiences"
      "languages  experiences";

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
    @apply pb-14;
  }
}

@screen print {
  .wrapper {
    grid-template-columns: 42fr 58fr;
    grid-template-areas:
      "header      header"
      "details    experiences"
      "skills     experiences"
      "languages  experiences";
    section .section-title {
      @apply text-xl mb-0;
      &::after {
        @apply hidden;
      }
    }

    .header {
      @apply pt-4 pb-4;
      h1 {
        @apply text-2xl mb-0;
      }
      h2 {
        @apply pt-0;
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
      @apply border-l pl-6;
    }

    .details,
    .experiences {
      @apply pt-4;
    }

  }
}
</style>
