<script setup lang="ts">
import { inject } from 'vue';
import Content from '../components/Content.vue';

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
        <p>{{ $translate(`pages.index.heading.${language}`) }}</p>
        <h1>{{ $translate(`pages.index.title.${language}`) }}</h1>
        <p v-for="item in $translate(`pages.index.description.${language}`)" :key="item">
          {{ item }}
        </p>
      </template>
    </Content>
  </div>
</template>