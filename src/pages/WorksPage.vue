<script setup lang="ts">
import { ref, inject } from 'vue'
import Content from '../components/Content.vue'
import Pagination from '../components/Pagination.vue'
import Work from '../components/Work.vue'
import { useRoute, useRouter } from 'vue-router'

const works: Array<Work> = [
  {
    time: ['07.23', ''],
    pointer: 'pp',
    image: '/images/works-pp.webp'
  },
  {
    time: ['01.22', '06.23'],
    pointer: 'platinum',
    image: '/images/works-platinum.webp'
  },
  {
    time: ['06.21', '10.21  '],
    pointer: 'travelask',
    image: '/images/works-travelask.webp'
  },
  {
    time: ['09.20', '06.21'],
    pointer: 'r52',
    image: '/images/works-r52.webp'
  },
  {
    time: ['05.24', 'NOW'],
    pointer: 'olumni',
    image: '/images/works-olumni.webp'
  },
  {
    time: ['04.21', 'NOW'],
    pointer: 'sms',
    image: '/images/works-sms.webp'
  },
  {
    time: ['01.18', '01.22'],
    pointer: 'freelance',
    image: '/images/me.webp'
  },
]

const router = useRouter()
const route = useRoute()

const selectedPage = ref<number>(Number(route.query.current) ?? 0)
const language = inject('language') as 'ru' | 'en'

function pageHandler(newValue: number) {
  selectedPage.value = newValue

  router.push({ path: 'works', query: { current: newValue }})
}
</script>

<template>
  <div class="works">
    <Content background="/images/works-inner.webp">
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
          @update="pageHandler"
        />
      </template>
    </Content>
  </div>
</template>
