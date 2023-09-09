<script setup lang="ts">
import Content from '../components/Content.vue';
import ContactForm from '../components/ContactForm.vue';
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
}
</style>