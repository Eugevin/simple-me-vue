<script setup lang="ts">
import { ref, inject } from 'vue';
import Content from '../components/Content.vue';
import Pagination from '../components/Pagination.vue';
import Work from '../components/Work.vue';
import translation from '../translation/main.ts';

const works: Array<Work> = [
  {
    time: ['07.23', ''],
    title: 'Program Product',
    image: '/images/works-pp.png'
  },
  {
    time: ['01.22', '06.23'],
    title: 'Platinum LTD',
    image: '/images/works-platinum.png'
  },
  {
    time: ['06.21', '10.21  '],
    title: 'Travelask',
    image: '/images/works-travelask.png'
  },
  {
    time: ['09.20', '06.21'],
    title: 'R52.ru',
    image: '/images/works-r52.png'
  },
  {
    time: ['01.18', '01.22'],
    title: 'Freelance',
    image: '/images/index-inner.gif'
  },
];

const selectedPage = ref<number>(0);
const language = inject('language') as 'ru' | 'en';
</script>

<template>
  <div class="works">
    <Content background="/images/works-inner.gif">
      <template v-slot:body>
        <p style="color: var(--white)">{{ translation.pages.projects.inner.heading[language] }}</p>
        <h1>
          {{ translation.pages.projects.inner.title[language][0] }}
          <br>
          {{ translation.pages.projects.inner.title[language][1] }}
        </h1>
      </template>
    </Content>
    <Work v-for="work in works.slice(selectedPage * 3, selectedPage * 3 + 3)" :key="work.title"
      :data="{ time: work.time, title: translation.pages.projects.content[work.title].title[language], description: translation.pages.projects.content[work.title].description[language], image: work.image }" />
    <Content>
      <template v-slot:body>
        <Pagination :items="Math.ceil(works.length / 3)" :selected="selectedPage"
          @update="newValue => selectedPage = newValue" />
      </template>
    </Content>
  </div>
</template>