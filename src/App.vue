<script setup lang="ts">
import { provide, ref } from 'vue';
import Header from './components/Header.vue';

const whiteTheme = ref<boolean>(false);
provide('whiteTheme', whiteTheme);
</script>

<template>
  <div :class="whiteTheme ? 'white-theme' : ''">
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  min-height: 100vh;
  width: 100%;
  background: var(--black);
  position: relative;
  z-index: 1;
  transition: var(--transition);

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 43%;
    background: var(--gray-1);
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    left: 50%;
    background: var(--gray-1);
    transition: var(--transition);

    .white-theme & {
      background: var(--gray-6);
    }
  }

  .white-theme & {
    background: var(--white);
  }
}
</style>
