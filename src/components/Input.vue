<script setup lang="ts">
defineProps<{ type?: 'button' | 'textarea', modelValue?: any }>();
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <button v-if="type === 'button'">
    <slot />
  </button>
  <textarea @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" v-else-if="type === 'textarea'" name="" id=""
    cols="30" rows="10"></textarea>
  <input @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" v-else type="text">
</template>

<style scoped lang="scss">
button {
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  line-height: 1.625rem;
  background: none;
  border: 0;
  color: var(--white);
  transition: var(--transition);
  position: relative;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: var(--white);
    transition: inherit;
  }

  &:hover {
    color: var(--black);

    &::before {
      height: 100%;
    }
  }
}

input,
textarea {
  resize: none;
  outline: none;
  padding: 0.5rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.625rem;
  background: none;
  border: 0;
  border-bottom: 2px solid var(--gray-5);
  color: var(--white);
  transition: var(--transition);
  position: relative;

  &::placeholder {
    color: var(--gray-5);
  }

  &:focus {
    border-bottom: 2px solid var(--white);
  }
}
</style>