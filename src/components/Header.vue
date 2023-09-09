<script setup lang="ts">
import { ref } from 'vue';

const headerActive = ref<boolean>(false);

const headerLinks = [
  {
    to: '/',
    title: 'Home',
    image: '/images/header-home.jpg',
  },
  {
    to: '/works',
    title: 'Projects',
    image: '/images/header-works.jpg',
  },
  {
    to: '/contacts',
    title: 'Contacts',
    image: '/images/header-contacts.jpg',
  },
]
</script>

<template>
  <header :class="`header ${headerActive ? 'header_active' : ''}`">
    <div class="header__visible">
      <div class="header__visible__menu" @click="headerActive = !headerActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__visible__change"></div>
    </div>
    <div class="header__body">
      <div class="header__body__item" v-for="link in headerLinks" :key="link.to">
        <RouterLink @click="headerActive = !headerActive" :to="link.to">{{ link.title }}</RouterLink>
        <img :src="link.image" alt="">
      </div>
      <div class="header__body__copy">Maked with love by Eugene Vinokurov in 2023. All rights reserved &copy;.<br>All images on the site belong to their rightful owners (materials taken from open sources - Giphy & Unsplash).</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  transition: 1s ease;

  &__visible {
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    width: 6.25rem;
    height: 100%;
    border-left: 1px solid var(--gray-1);

    &__menu {
      cursor: pointer;
      height: 6.25rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.35rem;
      transition: var(--transition);

      span {
        width: calc(1rem * 0.6);
        height: 0.125rem;
        background: var(--white);
        transition: inherit;

        &:nth-of-type(2) {
          width: 1rem;
        }

        .header_active & {
          &:nth-of-type(1) {
            width: 1rem;
            transform: translateY(0.5rem) rotate(45deg) !important;
          }

          &:nth-of-type(2) {
            transform: rotate(-45deg);
          }

          &:nth-of-type(3) {
            transform: translateY(100%) !important;
            opacity: 0;
          }
        }
      }

      &:hover {
        span:not(:nth-of-type(2)) {
          transform: none;
          width: 1rem;
        }

        .header_active & span:nth-of-type(1) {
          transform: translateY(0.5rem) rotate(70deg) !important;
        }
      }
    }

    &__change {
      left: 0;
    }

    .header_active & {
      border-left: none;
    }
  }

  &__body {
    z-index: 98;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(1rem);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    &__item {
      overflow: hidden;
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 calc(100% / 3);

      a {
        font-family: "Poppins", sans-serif;
        font-size: 2.875rem;
        line-height: 3.75rem;
        color: white;
        text-decoration: none;
        transition: var(--transition);
        z-index: 1;

        &::before {
          z-index: -1;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: #00000050;
        }
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
        opacity: 0;
        transition: var(--transition);
      }

      &:hover {
        img {
          opacity: 1;
        }

        a {
          padding-top: 3.125rem;
        }
      }
    }

    &__copy {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 1.5rem;
    }

    .header_active & {
      background: #00000075;
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>