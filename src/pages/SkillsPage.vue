<script setup lang="ts">
import { inject } from 'vue'
import Content from '../components/Content.vue'

const techs: Array<Tech> = [
  {
    pointer: 'typescript',
    title: 'TypeScript',
    image: '/images/skills-ts.webp'
  },
  {
    pointer: 'javascript',
    title: 'Javascript ES6+',
    image: '/images/skills-js.webp'
  },
  {
    pointer: 'vue',
    title: 'Vue 3.0',
    image: '/images/skills-vue.webp'
  },
  {
    pointer: 'htmlcss',
    title: 'HTML & CSS',
    image: '/images/skills-base.webp'
  },
  {
    pointer: 'golang',
    title: 'Go',
    image: '/images/skills-go.webp'
  },
  {
    pointer: 'more',
    title: '_more',
    image: '/images/skills-more.webp'
  },
]

const language = inject('language') as 'ru' | 'en'
</script>

<template>
  <div class="skills">
    <Content background="/images/skills-inner.webp">
      <template #body>
        <p style="color: var(--white)">
          {{ $translate(`pages.skills.inner.heading.${language}`) }}
        </p>
        <h1>
          {{ $translate(`pages.skills.inner.title.${language}.0`) }}
          <br>
          {{ $translate(`pages.skills.inner.title.${language}.1`) }}
        </h1>
      </template>
    </Content>
    <Content>
      <template #heading>
        <h2 class="sticky">
          {{ $translate(`pages.skills.heading.${language}.0`) }}
          <br>
          {{ $translate(`pages.skills.heading.${language}.1`) }}
        </h2>
      </template>
      <template #body>
        <p>{{ $translate(`pages.skills.description.${language}`) }}</p>
        <div class="grid">
          <div
            v-for="tech in techs"
            :key="tech.title"
            class="grid__item"
          >
            <img
              class="grid__item__image"
              :src="tech.image"
              alt="tech image"
            >
            <h4 class="grid__item__title">
              {{ tech.title }}
            </h4>
            <p class="grid__item__description">
              {{ $translate(`pages.skills.techs.${tech.pointer}.${language}`) }}
            </p>
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
        text-transform: capitalize;
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
