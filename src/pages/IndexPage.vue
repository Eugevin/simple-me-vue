<script setup lang="ts">
import { inject } from 'vue'
import Content from '../components/Content.vue'
import Input from '../components/Input.vue'

// TODO: It's not normal, need in refactor later... I think, i refactor this later... 🤡
const language = inject('language') as 'ru' | 'en'

function cvHandler() {
  window.open('https://cv.eugevin.ru', '_blank')
}
</script>

<template>
  <div class="simple index">
    <div class="simple__inner">
      <img
        src="/images/me.jpg"
        alt="index inner image"
      >
    </div>
    <Content>
      <template #heading />
      <template #body>
        <p>{{ $translate(`pages.index.heading.${language}`) }}</p>
        <h1>{{ $translate(`pages.index.title.${language}`) }}</h1>
        <p
          v-for="item in $translate(`pages.index.description.${language}`)"
          :key="item"
        >
          {{ item }}
        </p>
        <Input
          type="button"
          @click="cvHandler"
        >
          {{ $translate(`pages.index.cv.${language}`) }}
        </Input>
      </template>
    </Content>
  </div>
</template>

<style scoped lang="scss">
button {
  margin-top: 3rem;
}
</style>
