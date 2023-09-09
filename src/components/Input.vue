<script setup lang="ts">
defineProps<{ type?: 'button' }>()
</script>

<template>
  <button v-if="type === 'button'">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 0 1.5rem 0.5rem 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  line-height: 1.625rem;
  background: none;
  border: 0;
  border-bottom: 2px solid var(--white);
  color: var(--white);
}
</style>