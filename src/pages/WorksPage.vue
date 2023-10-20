<script setup lang="ts">
import { ref, inject } from 'vue'
import Content from '../components/Content.vue'
import Pagination from '../components/Pagination.vue'
import Work from '../components/Work.vue'

const works: Array<Work> = [
  {
    time: ['07.23', ''],
    pointer: 'pp',
    image: '/images/works-pp.jpg'
  },
  {
    time: ['01.22', '06.23'],
    pointer: 'platinum',
    image: '/images/works-platinum.jpg'
  },
  {
    time: ['06.21', '10.21  '],
    pointer: 'travelask',
    image: '/images/works-travelask.jpg'
  },
  {
    time: ['09.20', '06.21'],
    pointer: 'r52',
    image: '/images/works-r52.jpg'
  },
  {
    time: ['01.18', '01.22'],
    pointer: 'freelance',
    image: '/images/me.jpg'
  },
]

const selectedPage = ref<number>(0)
const language = inject('language') as 'ru' | 'en'
</script>

<template>
  <div class="works">
    <Content background="/images/works-inner.gif">
      <template #body>
        <p style="color: var(--white)">
          {{ $translate(`pages.projects.inner.heading.${language}`) }}
        </p>
        <h1>
          {{ $translate(`pages.projects.inner.title.${language}.0`) }}
          <br>
          {{ $translate(`pages.projects.inner.title.${language}.1`) }}
        </h1>
      </template>
    </Content>
    <Work
      v-for="work in works.slice(selectedPage * 3, selectedPage * 3 + 3)"
      :key="work.pointer"
      :data="{ time: work.time, title: $translate(`pages.projects.content.${work.pointer}.title.${language}`), description: $translate(`pages.projects.content.${work.pointer}.description.${language}`), image: work.image }"
    />
    <Content>
      <template #body>
        <Pagination
          :items="Math.ceil(works.length / 3)"
          :selected="selectedPage"
          @update="newValue => selectedPage = newValue"
        />
      </template>
    </Content>
  </div>
</template>
