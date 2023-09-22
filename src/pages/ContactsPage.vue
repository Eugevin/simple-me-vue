<script setup lang="ts">
import Content from '../components/Content.vue';
import ContactForm from '../components/ContactForm.vue';
import { inject } from 'vue';

const socials: Array<Social> = [
  {
    title: 'Telegram',
    link: 'https://t.me/eugevin'
  },
  {
    title: 'GMail',
    link: 'mailto:eugene.vinokuroff@gmail.com'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/Eugevin/simple-me-vue'
  },
]

function openSocial(social: string) {
  window.open(social, '_blank');
}

const language = inject('language') as 'ru' | 'en';
</script>

<template>
  <div class="contacts">
    <Content background="/images/contacts-inner.gif">
      <template v-slot:body>
        <p style="color: var(--white)">{{ $translate(`pages.contacts.inner.heading.${language}`) }}</p>
        <h1>
          {{ $translate(`pages.contacts.inner.title.${language}.0`) }}
          <br>
          {{ $translate(`pages.contacts.inner.title.${language}.1`) }}
        </h1>
      </template>
    </Content>
    <Content>
      <template v-slot:heading>
        <h2>{{ $translate(`pages.contacts.heading.${language}`) }}</h2>
      </template>
      <template v-slot:body>
        <h5>{{ $translate(`pages.contacts.content.address.${language}`) }}</h5>
        <p>{{ $translate(`pages.contacts.content.addressValue.${language}`) }}</p>
        <h5>{{ $translate(`pages.contacts.content.email.${language}`) }}</h5>
        <p>{{ $translate(`pages.contacts.content.emailValue.${language}`) }}</p>
        <h5>{{ $translate(`pages.contacts.content.touch.${language}`) }}</h5>
        <ContactForm />
        <h5>{{ $translate(`pages.contacts.content.check.${language}`) }}</h5>
        <ul>
          <h5 @click="openSocial(social.link)" :href="social.link" v-for="social in socials" :key="social.title">{{
            social.title }}</h5>
        </ul>
      </template>
    </Content>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

.contacts {
  h2 {
    .white-theme & {
      @include media-phone {
        color: var(--gray-1);
      }
    }
  }

  h5 {
    margin-bottom: 1.5rem;

    .white-theme & {
      color: var(--gray-1);
    }

    +p {
      margin-bottom: 5rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2.25rem;

    h5 {
      cursor: pointer;
      opacity: 0.5;
      transition: var(--transition);

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>