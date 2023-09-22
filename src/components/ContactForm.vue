<script setup lang="ts">
import Input from './Input.vue';
import { ref, watchEffect, inject } from 'vue';
import debounce from '../helpers/debounce.ts';

const form = ref<Form>({
  from: {
    value: '',
    valid: true
  },
  email: {
    value: '',
    valid: true
  },
  message: {
    value: '',
    valid: true
  },
});

const formSended = ref<string>('');
const language = inject('language') as 'ru' | 'en';

const sendForm = debounce(async () => {
  if (!formHandler('all')) return;

  try {
    const cfg = {
      method: 'POST',
      body: JSON.stringify({
        from: form.value.from.value,
        email: form.value.email.value,
        message: form.value.message.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const request = await fetch('/api/message', cfg);
    const data = await request.json();

    if (request.ok && data.message) {
      formSended.value = `\"${data.message}\"`;
    };
  } catch (e) {
    formSended.value = "\"😢 Something did goes wrong, please, try again later 😢\"";
    console.error(e);
  }
}, 700);

const formHandler = function (target: string): boolean {
  const fromValid = form.value.from.value.trim().length > 1;
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.value.email.value.trim());
  const messageValid = form.value.message.value.trim().length > 100;

  if (target === 'from' || target === 'all') {
    form.value.from.valid = fromValid;
  }

  if (target === 'email' || target === 'all') {
    form.value.email.valid = emailValid;
  }

  if (target === 'message' || target === 'all') {
    form.value.message.valid = messageValid;
  }

  return fromValid && emailValid && messageValid;
};

watchEffect(() => {
  if (form.value.from.value) {
    formHandler('from');
  }

  if (form.value.email.value) {
    formHandler('email');
  }

  if (form.value.message.value) {
    formHandler('message');
  }
})
</script>

<template>
  <div :class="`contact-form ${formSended ? 'ok' : ''}`" :style="`--message: ${formSended}`">
    <Input :invalid="!form.from.valid" :modelValue="form.from.value"
      @update:modelValue="newValue => form.from.value = newValue" class="contact-form__name"
      :placeholder="$translate(`pages.contacts.form.name.${language}`)" />
    <Input :invalid="!form.email.valid" :modelValue="form.email.value"
      @update:modelValue="newValue => form.email.value = newValue" class="contact-form__email"
      :placeholder="$translate(`pages.contacts.form.email.${language}`)" />
    <Input :invalid="!form.message.valid" :modelValue="form.message.value"
      @update:modelValue="newValue => form.message.value = newValue" class="contact-form__message"
      :placeholder="$translate(`pages.contacts.form.message.${language}`)" type="textarea" rows="4" />
    <Input :invalid="false" @click="sendForm" class="contact-form__send" type="button">{{
      $translate(`pages.contacts.form.send.${language}`) }}</Input>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

.contact-form {
  position: relative;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  display: grid;
  grid-template-areas: "name email null"
    "message message send";
  align-items: flex-end;

  @include media-phone {
    grid-template-areas: "name"
      "email"
      "message"
      "send";
  }

  &__name {
    grid-area: name;
  }

  &__email {
    grid-area: email;
  }

  &__message {
    grid-area: message;
  }

  &__send {
    grid-area: send;
    max-width: 10rem;
  }

  &::before {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    content: var(--message);
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--gray-1);
    opacity: 0;
    visibility: hidden;
  }

  &.ok::before {
    animation: appear .7s ease-in-out .5s forwards;
  }

  @keyframes appear {
    from {
      opacity: 0;
      visibility: hidden;
    }

    to {
      opacity: 1;
      visibility: visible;
    }
  }
}</style>