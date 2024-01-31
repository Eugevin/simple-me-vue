<script setup lang="ts">
import Content from '../components/Content.vue'
import ContactForm from '../components/ContactForm.vue'
import { inject } from 'vue'

const socials: Array<Social> = [
  {
    src: '/images/contacts-telegram.webp',
    title: 'Telegram',
    link: 'https://t.me/eugevin'
  },
  {
    src: '/images/contacts-habr.webp',
    title: 'Habr',
    link: 'https://career.habr.com/eugevin'
  },
  {
    src: '/images/contacts-github.webp',
    title: 'GitHub',
    link: 'https://github.com/Eugevin/simple-me-vue'
  },
  {
    src: '/images/contacts-mail.webp',
    title: 'GMail',
    link: 'mailto:eugene.vinokuroff@gmail.com'
  }
]

function openSocial(social: string) {
  window.open(social, '_blank')
}

const language = inject('language') as 'ru' | 'en'
</script>

<template>
  <div class="contacts">
    <Content background="/images/contacts-inner.webp">
      <template #body>
        <p style="color: var(--white)">
          {{ $translate(`pages.contacts.inner.heading.${language}`) }}
        </p>
        <h1>
          {{ $translate(`pages.contacts.inner.title.${language}.0`) }}
          <br>
          {{ $translate(`pages.contacts.inner.title.${language}.1`) }}
        </h1>
      </template>
    </Content>
    <Content>
      <template #heading>
        <h2>{{ $translate(`pages.contacts.heading.${language}`) }}</h2>
      </template>
      <template #body>
        <h5>{{ $translate(`pages.contacts.content.address.${language}`) }}</h5>
        <p>{{ $translate(`pages.contacts.content.addressValue.${language}`) }}</p>
        <h5>{{ $translate(`pages.contacts.content.email.${language}`) }}</h5>
        <p>{{ $translate(`pages.contacts.content.emailValue.${language}`) }}</p>
        <h5>{{ $translate(`pages.contacts.content.touch.${language}`) }}</h5>
        <ContactForm />
        <h5>{{ $translate(`pages.contacts.content.check.${language}`) }}</h5>
        <ul>
          <li
            v-for="social in socials"
            :key="social.title"
            @click="openSocial(social.link)"
          >
            <img 
              :src="social.src"
              :alt="`${social.title} icon`"
            >
          </li>
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
    margin-left: -0.75rem;
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      padding: .75rem;
      cursor: pointer;
      opacity: 0.5;
      transition: var(--transition);

      img {
        height: 2rem;
        width: 2rem;
      }

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
}
</style>
