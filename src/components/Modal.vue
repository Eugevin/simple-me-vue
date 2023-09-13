<script setup lang="ts"></script>

<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

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
  transition: var(--transition);

  @include media-phone {
    padding: 19rem 1.375rem 6.25rem;
  }
}
</style>