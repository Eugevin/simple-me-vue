<script setup lang="ts">
import { inject, reactive, ref } from 'vue';
import Content from './Content.vue';
import Modal from './Modal.vue';
import wait from '../helpers/wait.ts';

defineProps<{
  data: {
    time: [string, string],
    title: string,
    description: string,
    image: string,
  }
}>()

const overflowHidden = inject('overflowHidden') as { value: boolean };

const rootEl: any = ref(null);
const imageEl: any = ref(null);

const positions = reactive({
  root: {
    height: ''
  },
  image: {
    position: '',
    left: '',
    top: '',

    initial: {
      left: '',
      top: ''
    }
  }
});

const modalIsActive = ref<boolean>(false);

async function modalHandler() {
  overflowHidden.value = !modalIsActive.value;

  if (modalIsActive.value) {
    positions.image.left = positions.image.initial.left;
    positions.image.top = positions.image.initial.top;

    modalIsActive.value = false;

    await wait(300);

    positions.image.position = '';
    positions.image.left = '';
    positions.image.top = '';

    return;
  };

  positions.root.height = `${rootEl.value.offsetHeight}px`;

  const imageBounding = imageEl.value.getBoundingClientRect();

  positions.image.initial.left = positions.image.left = `${imageBounding.left}px`;
  positions.image.initial.top = positions.image.top = `${imageBounding.top}px`;

  await wait(1);

  positions.image.position = 'fixed';

  const windowIsSmall = window.innerWidth <= 600;

  positions.image.left = windowIsSmall ? '1.375rem' : '6.25rem';
  positions.image.top = windowIsSmall ? '1.375rem' : '5rem';

  modalIsActive.value = true;
}
</script>

<template>
  <div class="work" ref="rootEl" :style="{ height: positions.root.height }">
    <Content>
      <template v-slot:heading>
        <div :class="`box ${modalIsActive ? 'box_hidden' : ''}`">
          <p>{{ data.time[0] }} - {{ data.time[1] }}</p>
          <h3>{{ data.title }}</h3>
          <p v-html="data.description"></p>
        </div>
      </template>
      <template v-slot:body>
        <img ref="imageEl"
          :style="{ position: positions.image.position ? 'fixed' : 'static', left: positions.image.left, top: positions.image.top }"
          @click="modalHandler()" :src="data.image" alt="work personal image">
      </template>
    </Content>
  </div>
  <Transition>
    <Modal v-if="modalIsActive">
      <div class="box box_modal">
        <p>{{ data.time[0] }} - {{ data.time[1] }}</p>
        <h3>{{ data.title }}</h3>
        <p v-html="data.description"></p>
      </div>
    </Modal>
  </Transition>
</template>

<style scoped lang="scss">
@import "../styles/media";

.work {
  .box {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    opacity: 1;
    visibility: visible;
    transition: var(--transition);

    h3 {
      margin: 2.5rem 0 1rem;

      +p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;

        @include media-phone {
          text-align: left;
        }
      }

      .white-theme & {
        @include media-phone {
          color: var(--gray-1);
        }
      }
    }

    &_hidden {
      opacity: 0;
      visibility: hidden;
    }
  }

  img {
    height: 20rem;
    z-index: 2;
    cursor: pointer;
    transition: var(--transition);

    @include media-phone {
      height: initial;
      width: calc(100vw - 1.375rem * 2);
    }
  }
}

.box_modal {
  height: 100%;
  overflow: auto;
  display: block;
  text-align: left;

  h3 {
    color: var(--white);
  }

  p {
    max-width: 50rem;
    -webkit-line-clamp: initial;
    word-break: initial;
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