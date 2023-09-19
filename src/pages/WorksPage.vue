<script setup lang="ts">
import { ref, inject } from 'vue';
import Content from '../components/Content.vue';
import Pagination from '../components/Pagination.vue';
import Work from '../components/Work.vue';
import translation from '../translation/main.ts';

interface Work {
  time: [string, string],
  title: string,
  description: string,
  image: string,
}

const works: Array<Work> = [
  {
    time: ['07.23', 'nowadays'],
    title: 'Program Product',
    description: `Russian software developer for the public and private sectors. Development of mobile and web applications, as well as information systems. Actually what i did/maked/created:<br><br>- Working with Vue3, VueRouter and VueX.<br><br>- Bug fixing and writing new functionality`,
    image: '/images/works-pp.png'
  },
  {
    time: ['01.22', '06.23'],
    title: 'Platinum LTD',
    description: `Platinum Engineering is a new generation tech incubator with a background in networking that provides top grade expertise to future FinTech starsю Actually what i did/maked/created:<br><br>- 2 YEARS NDA*`,
    image: '/images/works-platinum.png'
  },
  {
    time: ['06.21', '10.21  '],
    title: 'Travelask',
    description: `TravelAsk is a travel search engine. Searches and compares the best deals on tours, hotels and flights. Inspires new trips and gets content once. Actually what i did/maked/created:<br><br>- Development of new functionality.<br><br>- Bug fixing.<br><br>- Optimizing already written code and translating it to ES6+ standard EcmaScript.<br><br>- Rewriting some functionality written in Vue.js (as a library) into vanilla JavaScript according to OOP principles on classes.`,
    image: '/images/works-travelask.png'
  },
  {
    time: ['09.20', '06.21'],
    title: 'R52.ru',
    description: `R52.RU is a multi-service agency with 20 years of experience. They're design and provide effective presence, support and successful development of online business. Actually what i did/maked/created:<br><br>- Layout of commercial projects.<br><br>- Edits on existing sites & fixing bugs.<br><br>- Working with Vue.js projects using VueX and VueRouter.`,
    image: '/images/works-r52.png'
  },
  {
    time: ['01.18', '01.22'],
    title: 'Freelance',
    description: `As a freelancer, I have worked extensively with technologies such as Vue.js, JWT, JSON handling, WebSocket, WebRTC, Express, Bootstrap and more other technologies/frameworks. Actually what i did/maked/created:<br><br>- Engaged in the development and support of the client part of WEB-applications.<br><br>- Part-time set up Nginx HTTP servers and simple servers on Linux.<br><br>- Wrote small chat applications and worked with the WebSocket API.<br><br>- Participated in the development of Stores and Gaming Sites using the Vue.js framework.<br><br>- Worked with Vue.js, VueRouter and VueX.`,
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
    <Work v-for="work in works.slice(selectedPage * 3, selectedPage * 3 + 3)" :key="work.title" :data="work" />
    <Content>
      <template v-slot:body>
        <Pagination :items="Math.ceil(works.length / 3)" :selected="selectedPage"
          @update="newValue => selectedPage = newValue" />
      </template>
    </Content>
  </div>
</template>