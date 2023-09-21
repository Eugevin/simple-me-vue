<script setup lang="ts">
import { onMounted, ref } from 'vue';

const filesToPreload = [
  '/images/contacts-inner.gif',
  '/images/header-contacts.jpg',
  '/images/header-home.jpg',
  '/images/header-skills.jpg',
  '/images/header-works.jpg',
  '/images/index-inner.gif',
  '/images/not-found-inner.gif',
  '/images/skills-base.png',
  '/images/skills-inner.gif',
  '/images/skills-js.png',
  '/images/skills-more.png',
  '/images/skills-ts.png',
  '/images/skills-vue.png',
  '/images/works-inner.gif',
  '/images/works-platinum.png',
  '/images/works-pp.png',
  '/images/works-r52.png',
  '/images/works-travelask.png',
]

const emit = defineEmits<{
  (e: 'loaded'): void
}>();

const progress = ref<number>(10);

onMounted(() => {
  loaderHandler();
});

async function loaderHandler() {
  Promise.allSettled(filesToPreload.map(el => {
    return new Promise((resolve, _) => {
      const img = new Image();
      img.src = el;

      img.addEventListener('load', () => {
        progress.value += Math.floor(100 / filesToPreload.length);

        resolve(true);
      });
    });
  }))
    .then(hideLoader);
}

function hideLoader() {
  progress.value = 100;
  emit('loaded');
}
</script>

<template>
  <div class="loader">
    <h1 class="loader__title">Loading</h1>
    <h5>{{ progress }}%</h5>
    <div class="loader__progress" :style="`--progress: ${progress}%;`"></div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--gray-1);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  &__progress {
    width: 50%;
    height: 1rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: var(--progress);
      background: var(--white);
      transition: var(--transition);
    }
  }
}
</style>