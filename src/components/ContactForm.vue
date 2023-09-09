<script setup lang="ts">
import Input from './Input.vue';
import { ref, watch } from 'vue';
import debounce from '../helpers/debounce.ts';
import throttle from '../helpers/throttle.ts';

interface Form {
  from: {
    value: string,
    valid: boolean
  },
  email: {
    value: string,
    valid: boolean
  },
  message: {
    value: string,
    valid: boolean
  }
}

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
})

const sendForm = debounce(() => {
  if (!formHandler()) return;

  console.log('All is ready')
}, 1000);

const formHandler = function (): boolean {
  const fromValid = form.value.from.value.trim().length > 1;
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.value.email.value.trim());
  const messageValid = form.value.message.value.trim().length > 100;

  form.value.from.valid = fromValid;
  form.value.email.valid = emailValid;
  form.value.message.valid = messageValid;

  if (fromValid && emailValid && messageValid) return true;

  return false;
};

watch(form.value, () => {
  formHandler();
});
</script>

<template>
  <div class="contact-form">
    <Input :invalid="!form.from.valid" :modelValue="form.from.value"
      @update:modelValue="newValue => form.from.value = newValue" class="contact-form__name" placeholder="Name" />
    <Input :invalid="!form.email.valid" :modelValue="form.email.value"
      @update:modelValue="newValue => form.email.value = newValue" class="contact-form__email" placeholder="E-mail" />
    <Input :invalid="!form.message.valid" :modelValue="form.message.value"
      @update:modelValue="newValue => form.message.value = newValue" class="contact-form__message" placeholder="Message"
      type="textarea" rows="4" />
    <Input :invalid="false" @click="sendForm" class="contact-form__send" type="button">Submit</Input>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  display: grid;
  grid-template-areas: "name email null"
    "message message send";
  align-items: flex-end;

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
}
</style>