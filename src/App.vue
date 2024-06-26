<script setup lang="ts">
import { provide, ref, watchEffect } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
import Cookie from './components/Cookie.vue'

const overflowHidden = ref<boolean>(false)
provide('overflowHidden', overflowHidden)

const language = ref<'ru' | 'en'>('en')
provide('language', language)

const worksClicked = ref<boolean>(!!localStorage.getItem('worksClicked'))
provide('worksClicked', worksClicked)

const cookieAccepted = ref<boolean>(!!localStorage.getItem('cookie'))

watchEffect(() => {
  if (overflowHidden.value) {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  } else {
    document.body.style.overflow = 'initial'
    document.body.style.height = 'initial'
  }
})

const loading = ref<boolean>(true)
</script>

<template>
  <Transition>
    <Loader
      v-if="loading"
      @loaded="loading = false"
    />
    <main v-else>
      <Header />
      <RouterView />
      <Footer />
      <Transition>
        <Cookie
          v-if="!cookieAccepted"
          @accepted="cookieAccepted = true"
        />
      </Transition>
    </main>
  </Transition>
</template>

<style lang="scss">
@import './styles/media';

main {
  min-height: 100vh;
  width: 100%;
  background: var(--black);
  position: relative;
  z-index: 1;
  transition: var(--transition);

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 43%;
    background: var(--gray-1);

    @include media-phone {
      content: none;
    }
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    left: 50%;
    background: var(--gray-1);
    transition: var(--transition);

    @include media-phone {
      content: none;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
