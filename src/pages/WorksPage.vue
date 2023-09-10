<script setup lang="ts">
import { ref } from 'vue';
import Content from '../components/Content.vue';

interface Work {
  time: [string, string],
  title: string,
  description: string,
  image: string,
}

const works: Array<Work> = [
  {
    time: ['01.22', '06.23'],
    title: 'Platinum LTD',
    description: `Platinum Engineering is a new generation tech incubator with a background in networking that provides top grade expertise to future FinTech stars Actually what i did/maked/created:<br><br>- 2 YEARS NDA*`,
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

const selectedWork = ref<number | null>(null);

function makeSomeMagic(i: number, e: Event) {
  /* 
    sooo, you really call this function 'makesomemagic'? wtf is wrong with you?! bruh, you very dissapointment me... 
    i mean, very - it's not like 'veryyy' or 'very, man', i mean its HUGE, bruh, you get it? why you reading this, get you some cup of tea or anywant you need right now and be happy, brother 😘.
    IT IS VERY BAD FUNCTION, NEED IN REFACTOR
  */

  const target = <HTMLElement>e.target;
  const parentEl = target.parentElement;

  if (!target) return;

  if (selectedWork.value !== null) {
    selectedWork.value = null;
    target.removeAttribute('style');
    parentEl!.removeAttribute('style');
    return;
  }

  const pos = target.getBoundingClientRect();

  target.style.position = 'fixed';
  target.style.top = `${pos.top}px`;
  target.style.left = `${pos.left}px`;

  parentEl!.style.height = `${pos.height + 5}px`;

  setTimeout(() => {
    const windowIsSmall = window.innerWidth <= 600;

    if (windowIsSmall) {
      target.style.top = `0`;
      target.style.left = `0`;
    } else {
      target.style.top = `5rem`;
      target.style.left = `6.25rem`;
    }

    selectedWork.value = i;
  });
}
</script>

<template>
  <div class="works">
    <Content background="/images/works-inner.gif">
      <template v-slot:body>
        <p style="color: var(--white)">Some companies & projects i've worked for.</p>
        <h1>Let's<br>See my works</h1>
      </template>
    </Content>
    <Content v-for="work, i in works" :key="work.title">
      <template v-slot:heading>
        <div :class="`box ${i === selectedWork ? 'box_hidden' : ''}`">
          <p>{{ work.time[0] }} - {{ work.time[1] }}</p>
          <h3>{{ work.title }}</h3>
          <p v-html="work.description"></p>
        </div>
      </template>
      <template v-slot:body>
        <img @click="makeSomeMagic(i, $event)" :src="work.image" alt="work personal image">
      </template>
    </Content>
    <div :class="`modal ${selectedWork !== null ? 'modal_active' : ''}`">
      <div v-if="selectedWork !== null" class="box">
        <p>{{ works[selectedWork].time[0] }} - {{ works[selectedWork].time[1] }}</p>
        <h3>{{ works[selectedWork].title }}</h3>
        <p v-html="works[selectedWork].description"></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

.works {

  .box {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    opacity: 1;
    visibility: visible;
    transition: var(--transition);

    h3 {
      margin: 2.5rem 0 1rem;

      +p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;

        @include media-phone {
          text-align: left;
        }
      }
    }

    &_hidden {
      opacity: 0;
      visibility: hidden;
    }
  }

  img {
    height: 20rem;
    z-index: 2;
    cursor: pointer;
    transition: var(--transition);

    @include media-phone {
      height: initial;
      width: 100%;
    }
  }

  .modal {
    padding: 5rem 6.25rem 0 44rem;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #00000090;
    backdrop-filter: blur(1rem);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    .box {
      display: block;
      text-align: left;

      p {
        max-width: 50rem;
        -webkit-line-clamp: initial;
        word-break: initial;
      }
    }

    &_active {
      opacity: 1;
      visibility: visible;
    }

    @include media-phone {
      padding: 19rem 1.375rem 6.25rem;
    }
  }
}
</style>