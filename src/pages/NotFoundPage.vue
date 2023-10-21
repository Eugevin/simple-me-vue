<script setup lang="ts">
import { inject } from 'vue'
import Content from '@/components/Content.vue'
import Input from '@/components/Input.vue'
import { useRouter } from 'vue-router'

const language = inject('language') as 'ru' | 'en'
const router = useRouter()

function backToHome() {
  router.push('/')
}
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
        <Input
          type="button"
          @click="backToHome"
        >
          Back to home
        </Input>
      </template>
    </Content>
  </div>
</template>
