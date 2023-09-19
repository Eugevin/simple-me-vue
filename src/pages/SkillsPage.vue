<script setup lang="ts">
import Content from '../components/Content.vue';

interface Tech {
  title: string
  description: string
  image: string
}

const techs: Array<Tech> = [
  {
    title: 'TypeScript',
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    image: '/images/skills-ts.png'
  },
  {
    title: 'JavaScript ES6+',
    description: 'JavaScript is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. It is an implementation of the ECMAScript specification. JavaScript is typically used as an embedded language for programmatically accessing application objects.',
    image: '/images/skills-js.png'
  },
  {
    title: 'Vue3',
    description: 'Vue.js is an open source JavaScript framework for creating user interfaces. Easily integrates into projects using other JavaScript libraries. Can function as a web framework for developing single page applications in a reactive style.',
    image: '/images/skills-vue.png'
  },
  {
    title: 'HTML & CSS',
    description: 'HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation of documents written in a markup language.',
    image: '/images/skills-base.png'
  },
  {
    title: 'And more...',
    description: 'VueX, VueRouter, JWT, REST-API, Express / Koa, Bootstrap Grid / Bulma, WebSocket, Canvas, pm2, WebRTC and more... much more...',
    image: '/images/skills-more.png'
  },
];
</script>

<template>
  <div class="skills">
    <Content background="/images/skills-inner.gif">
      <template v-slot:body>
        <p style="color: var(--white)">What i can? What i maked?</p>
        <h1>Let me<br>Show you this</h1>
      </template>
    </Content>
    <Content>
      <template v-slot:heading>
        <h2 class="sticky">Did you think I was lying?<br>I'm in love with frontend!</h2>
      </template>
      <template v-slot:body>
        <p>We combine design, technology and business strategy into a unified discipline powerful enough to propel
          companies forward:</p>
        <div class="grid">
          <div class="grid__item" v-for="tech in techs" :key="tech.title">
            <img class="grid__item__image" :src="tech.image" alt="tech image">
            <h4 class="grid__item__title">{{ tech.title }}</h4>
            <p class="grid__item__description">{{ tech.description }}</p>
          </div>
        </div>
      </template>
    </Content>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

.skills {

  .grid {
    margin-top: 1.25rem;
    display: flex;
    flex-wrap: wrap;

    &__item {
      flex: 0 0 calc(50% - 0.5px);
      padding: 3.3125rem 1.125rem 1.5rem;
      text-align: center;
      outline: 1px solid var(--gray-1);
      margin-top: 0.4px;
      margin-left: 0.4px;
      filter: grayscale(1);
      transition: var(--transition);

      &__image {
        height: 2.75rem;
      }

      &__title {
        margin: 2rem 0 0.75rem;
      }

      &:hover {
        filter: none;
        opacity: 1;
      }

      .white-theme & {
        outline: 1px solid var(--gray-6);
      }

      @include media-phone {
        flex: 0 0 100%;
      }
    }

    @include media-phone {
      gap: 1rem;
    }
  }

  .white-theme & {

    h4 {
      color: var(--gray-1);
    }

    @include media-phone {
      .content:not(.content_inner) h2 {
        color: var(--gray-1);
      }
    }
  }
}
</style>