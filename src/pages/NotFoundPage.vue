<script setup lang="ts">
import { inject } from 'vue';
import Content from '../components/Content.vue';
import translation from '../translation/main.ts';

const language = inject('language') as 'ru' | 'en';
</script>

<template>
  <div class="simple not-found">
    <div class="simple__inner">
      <img src="/images/not-found-inner.gif" alt="not-found inner image">
    </div>
    <Content>
      <template v-slot:heading></template>
      <template v-slot:body>
        <p>{{ translation.pages.empty.heading[language] }}</p>
        <h1>{{ translation.pages.empty.title[language] }}</h1>
      </template>
    </Content>
  </div>
</template>