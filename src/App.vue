<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  min-height: 100vh;
  width: 100%;
  background: var(--black);
  position: relative;
  z-index: 1;

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
  }
}
</style>
