<script setup lang="ts">
import { inject } from 'vue'
import Content from '../components/Content.vue'

const language = inject('language') as 'ru' | 'en'
</script>

<template>
  <div class="simple not-found">
    <div class="simple__inner">
      <img
        src="/images/not-found-inner.jpg"
        alt="not-found inner image"
      >
    </div>
    <Content>
      <template #heading />
      <template #body>
        <p>{{ $translate(`pages.empty.heading.${language}`) }}</p>
        <h1>{{ $translate(`pages.empty.title.${language}`) }}</h1>
      </template>
    </Content>
  </div>
</template>
