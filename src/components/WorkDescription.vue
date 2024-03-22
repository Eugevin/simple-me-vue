<script setup lang="ts">
defineProps<{
  data: {
    time: [string, string],
    title: string,
    description: string,
    image: string,
  },
  hiding?: boolean,
  modal?: boolean
}>()
</script>

<template>
  <div :class="`box ${hiding ? 'box_hidden' : ''} ${modal ? 'box_modal' : ''}`">
    <p>{{ data.time[0] }} - {{ data.time[1] }}</p>
    <h3>{{ data.title }}</h3>
    <!-- TODO: Move to other component -->
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
            {{ string }}
          </li>              
        </ul>
      </template>
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

    .white-theme & {
      @include media-phone {
        color: var(--gray-1);
      }
    }
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
          position: relative;
          padding-left: 1.5rem;

          &::before {
            content: "=>";
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
}
</style>