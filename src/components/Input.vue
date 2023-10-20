<script setup lang="ts">
defineProps<{ type?: 'button' | 'textarea', invalid?: boolean }>()
const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <button v-if="type === 'button'">
    <span>
      <slot />
    </span>
  </button>
  <textarea
    v-else-if="type === 'textarea'"
    :class="`${invalid ? 'invalid' : ''}`"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
  <input
    v-else
    type="text"
    :class="`${invalid ? 'invalid' : ''}`"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
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

    .white-theme & {
      background: var(--gray-1);
    }
  }

  span {
    display: inline-block;
    transform: none;
    transition: transform .5s ease;
  }

  &:hover {
    color: var(--black);

    span {
      transform: translateY(10%);
    }

    .white-theme & {
      color: var(--white);
    }

    &::before {
      height: 100%;
    }
  }

  .white-theme & {
    color: var(--gray-1);
  }
}

input,
textarea {
  width: 100%;
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

    .white-theme & {
      border-bottom: 2px solid var(--gray-1);
    }
  }

  &.invalid {
    border-bottom: 2px solid red !important;
  }

  .white-theme & {
    color: var(--gray-1);
  }
}
</style>
