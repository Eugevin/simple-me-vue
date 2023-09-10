<script setup lang="ts">
import { inject, ref } from 'vue';

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
];

const whiteTheme = inject('whiteTheme');
</script>

<template>
  <header :class="`header ${headerActive ? 'header_active' : ''}`">
    <div class="header__visible">
      <div class="header__visible__menu" @click="headerActive = !headerActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__visible__change" @click="whiteTheme = !whiteTheme"></div>
    </div>
    <div class="header__body">
      <div class="header__body__item" v-for="link in headerLinks" :key="link.to">
        <RouterLink @click="headerActive = !headerActive" :to="link.to">{{ link.title }}</RouterLink>
        <img :src="link.image" alt="">
      </div>
      <p class="header__body__copy">Maked with love by Eugene Vinokurov in 2023. All rights reserved &copy;.<br>All images
        on the site belong to their rightful owners (materials taken from open sources - Giphy & Unsplash).</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../styles/media";

.header {
  transition: 1s ease;

  &__visible {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

        .white-theme & {
          background: var(--gray-1);
        }

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

      @include media-phone {
        width: 6.25rem;
      }
    }

    &__change {
      position: relative;
      height: 6.25rem;
      width: 100%;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 1rem;
        width: 1rem;
        border-radius: 100%;
        border: 2px solid var(--white);

        .white-theme & {
          border: 2px solid var(--gray-1);
        }
      }

      @include media-phone {
        width: 6.25rem;
      }
    }

    .header_active & {
      border-left: none;
    }


    @include media-phone {
      top: initial;
      bottom: 0;
      height: 6.25rem;
      width: 100%;
      flex-direction: row-reverse;
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

        @include media-phone {
          opacity: 1 !important;
        }
      }

      &:hover {
        img {
          opacity: 1;
        }

        a {
          padding-top: 3.125rem;
        }
      }

      @include media-phone {
        width: 100%;
      }
    }

    &__copy {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 1.5rem;

      @include media-phone {
        width: 100%;
        bottom: 3rem;
      }
    }

    .header_active & {
      background: #00000075;
      opacity: 1;
      visibility: visible;
    }

    @include media-phone {
      flex-direction: column;
    }
  }
}
</style>