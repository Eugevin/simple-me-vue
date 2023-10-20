<script setup lang="ts">
import Input from './Input.vue'

const emit = defineEmits<{
  (e: 'accepted'): void
}>()

function acceptCookie() {
  localStorage.setItem('cookie', "true")
  emit('accepted')
}
</script>

<template>
  <div class="cookie">
    <h4>🍪 Cookie Policy 🍪</h4>
    <p>
      Life is better with cookies. Most people would agree cookies make life better. For me, they help me make my products
      better. By continuing to use this site, you agree to the use of cookies.
    </p>
    <Input
      type="button"
      @click="acceptCookie"
    >
      Accept
    </Input>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/media';

.cookie {
  z-index: 99;
  background: var(--black);
  max-width: 30%;
  backdrop-filter: blur(1rem);
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 50%;
  }

  @include media-phone {
    max-width: calc(100% - 2rem);
    bottom: 7.25rem;
  }
}
</style>
