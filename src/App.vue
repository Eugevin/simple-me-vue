<script setup lang="ts">
import { provide, ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const whiteTheme = ref<boolean>(false);
provide('whiteTheme', whiteTheme);
</script>

<template>
  <main :class="whiteTheme ? 'white-theme' : ''">
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<style scoped lang="scss">
@import './styles/media';

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

    @include media-phone {
      content: none;
    }
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

    @include media-phone {
      content: none;
    }
  }

  &.white-theme {
    background: var(--white);

    &::after {
      background: var(--gray-6);
    }
  }
}
</style>
