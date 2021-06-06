<template>
  <section>
    <h2 class="title">
      Contact me
    </h2>
    <decorative-box>
      <div class="prose prose-indigo">
        If you got all the way down here I can only assume you read everything <i>(and/or your mouse scroll wheel works like a charm!)</i>.
        Either way, <strong>thank you for the attention!</strong>
        <br>
        If you'd like to contact me for anything, project ideas, consulting, etc. you can reach me through <strong>Email</strong> or <strong>Linkedin</strong>.
        <br>
        You can also follow me on <strong>Github</strong> to check out my projects.
        <ul>
          <li>
            <strong>My Email:</strong>
            <br>
            <a href="mailto:thsousa101@gmail.com">thsousa101@gmail.com</a>
          </li>
          <li>
            <strong>Linkedin:</strong>
            <br>
            <a href="https://www.linkedin.com/in/thales-agapito" target="_blank" rel="noopener noreferrer">Thales Agapito</a>
          </li>
          <li>
            <strong>Github:</strong>
            <br>
            <a href="https://github.com/thalesagapito" target="_blank" rel="noopener noreferrer">thalesagapito</a>
          </li>
        </ul>

        <decorative-asterisks />
      </div>
    </decorative-box>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="postcss" scoped>
section .title {
  @apply text-center;
}
</style>
