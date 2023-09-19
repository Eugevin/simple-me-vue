<script setup lang="ts">
import { inject } from 'vue';
import Content from '../components/Content.vue';
import translation from '../translation/main.ts';

// TODO: It's not normal, need in refactor later... I think, i refactor this later... 🤡
const language = inject('language') as 'ru' | 'en';
</script>

<template>
  <div class="simple index">
    <div class="simple__inner">
      <img src="/images/index-inner.gif" alt="index inner image">
    </div>
    <Content>
      <template v-slot:heading></template>
      <template v-slot:body>
        <p>{{ translation.pages.index.heading[language] }}</p>
        <h1>{{ translation.pages.index.title[language] }}</h1>
        <p v-for="item in translation.pages.index.description[language]" :key="item">
          {{ item }}
        </p>
      </template>
    </Content>
  </div>
</template>