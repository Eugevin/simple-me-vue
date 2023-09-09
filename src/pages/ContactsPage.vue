<script setup lang="ts">
import Content from '../components/Content.vue';
import ContactForm from '../components/ContactForm.vue';

interface Social {
  title: string,
  link: string
}

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
</script>

<template>
  <div class="contacts">
    <Content background="/images/contacts-inner.gif">
      <template v-slot:body>
        <p style="color: var(--white)">Some companies & projects i've worked for.</p>
        <h1>Let's<br>See my works</h1>
      </template>
    </Content>
    <Content>
      <template v-slot:heading>
        <h2>Let’s work together and make beautiful projects.</h2>
      </template>
      <template v-slot:body>
        <h5>Address</h5>
        <p>Russia, Nijny Novgorod</p>
        <h5>Email</h5>
        <p>eugene.vinokuroff@gmail.com</p>
        <h5>Get in Touch</h5>
        <ContactForm />
        <h5>Check me here</h5>
        <ul>
          <h5 @click="openSocial(social.link)" :href="social.link" v-for="social in socials" :key="social.title">{{
            social.title }}</h5>
        </ul>
      </template>
    </Content>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  h5 {
    margin-bottom: 1.5rem;

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