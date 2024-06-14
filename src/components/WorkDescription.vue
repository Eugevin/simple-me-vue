<script setup lang="ts">
import { inject, computed } from 'vue'

import Input from './Input.vue'

const props = defineProps<{
  data: {
    time: [string, string],
    title: string,
    description: string,
    image: string,
    link: string
  },
  hiding?: boolean,
  modal?: boolean
}>()

const language = inject('language') as 'ru' | 'en'

const worktime = computed(() => `${props.data.time[0]} - ${props.data.time[1]}`)

function workLinkHandler(workLink: string) {
  window.open(workLink, '_blank')

}
</script>

<template>
  <div :class="`box ${hiding ? 'box_hidden' : ''} ${modal ? 'box_modal' : ''}`">
    <p
      v-if="modal"
      class="sm"
    >
      {{ $translate(`constants.${language}`) }}
    </p>
    <p>{{ worktime }}</p>
    <h3>{{ data.title }}</h3>
    <div class="box__description">
      <template
        v-for="item in data.description"
        :key="item"
      >
        <p v-if="typeof item === 'string'">
          {{ item }}
        </p>
        <ul v-if="Array.isArray(item)">
          <li
            v-for="string in item"
            :key="string"
          >
            => {{ string }}
          </li>
        </ul>
      </template>
    </div>
    <div class="box__link">
      <Input
        v-if="data.link"
        type="button"
        @click="workLinkHandler(data.link)"
      >
        {{ $translate(`goToProject.${language}`) }}
      </Input>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

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
  }

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;

    @include media-phone {
      text-align: left;
    }
  }

  &__link {
    margin-top: 1rem;
  }

  &_hidden {
    opacity: 0;
    visibility: hidden;
  }

  &_modal {
    height: 100%;
    overflow: auto;
    display: block;
    text-align: left;

    h3 {
      color: var(--white);
      margin: 0;
    }

    .box__description {
      max-width: 50rem;
      -webkit-line-clamp: initial;
      word-break: initial;

      ul {
        margin-top: 1rem;
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        line-height: 1.875rem;
        color: var(--gray-5);

        li {
          margin-top: 0.25rem;
        }
      }
    }
  }
}
</style>