<script setup lang="ts">
import { inject, reactive, ref } from 'vue'
import { Ref } from 'vue'

import Content from './Content.vue'
import Modal from './Modal.vue'
import WorkDescription from './WorkDescription.vue'

import wait from '../helpers/wait.ts'

defineProps<{
  data: {
    time: [string, string],
    title: string,
    description: string,
    image: string,
    link: string
  }
}>()

const overflowHidden = inject('overflowHidden') as { value: boolean }
const worksClicked = inject('worksClicked') as { value: boolean }

const rootEl: Ref<HTMLElement | null> = ref(null)
const imageEl: Ref<HTMLElement | null> = ref(null)

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
})

const modalIsActive = ref<boolean>(false)

async function modalHandler() {
  if (!worksClicked.value) {
    worksClicked.value = true
    localStorage.setItem('worksClicked', 'true')
  }

  overflowHidden.value = !modalIsActive.value

  if (!imageEl.value) return

  modalIsActive.value ? hideModal(imageEl.value) : showModal(imageEl.value)
}

async function showModal(imageEl: HTMLElement) {
  positions.root.height = `${rootEl?.value?.offsetHeight}px`

  const imageBounding = imageEl.getBoundingClientRect()

  positions.image.initial.left = positions.image.left = `${imageBounding?.left}px`
  positions.image.initial.top = positions.image.top = `${imageBounding?.top}px`
  positions.image.position = 'fixed'

  await wait(50)

  const windowIsSmall = window.innerWidth <= 600

  positions.image.left = windowIsSmall ? '1.375rem' : '6.25rem'
  positions.image.top = windowIsSmall ? '1.375rem' : '5rem'

  modalIsActive.value = true
}

function hideModal(imageEl: HTMLElement) {
  positions.image.left = positions.image.initial.left
  positions.image.top = positions.image.initial.top

  modalIsActive.value = false

  imageEl.addEventListener('transitionend', hideModalListener)
}

function hideModalListener(e: TransitionEvent) {
  if (e.propertyName !== 'top') return

  positions.image.position = ''
  positions.image.left = ''
  positions.image.top = ''

  imageEl.value?.removeEventListener('transitionend', hideModalListener)
}
</script>

<template>
  <div
    ref="rootEl"
    class="work"
    :style="{ height: positions.root.height }"
  >
    <Content>
      <template #heading>
        <WorkDescription
          :data="data"
          :hiding="modalIsActive"
        />
      </template>
      <template #body>
        <img
          ref="imageEl"
          :style="{ position: positions.image.position ? 'fixed' : 'static', left: positions.image.left, top: positions.image.top }"
          :class="{ notice: !worksClicked }"
          :src="data.image"
          alt="work personal image"
          @click="modalHandler()"
        >
      </template>
    </Content>
  </div>
  <Transition>
    <Modal v-if="modalIsActive">
      <WorkDescription
        :data="data"
        :modal="true"
      />
    </Modal>
  </Transition>
</template>

<style scoped lang="scss">
@import "../styles/media";

.work {
  img {
    height: 20rem;
    z-index: 2;
    cursor: pointer;
    transition: var(--transition);

    &.notice {
      animation: notice infinite 1s alternate ease-in-out;
    }

    @include media-phone {
      height: initial;
      width: calc(100vw - 1.375rem * 2);
    }
  }

  @keyframes notice {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
