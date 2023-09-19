<script setup lang="ts">
import { inject } from 'vue';
import translation from '../translation/main.ts';

const language = inject('language') as 'ru' | 'en';
</script>

<template>
  <footer class="footer">
    <p class="sm footer__copy">
      {{ translation.footer.description[language][0] }}
      <br>
      {{ translation.footer.description[language][1] }}
    </p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 6.25rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 18.75rem;
  width: 100%;
}
</style>