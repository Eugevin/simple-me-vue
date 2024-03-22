<script setup lang="ts">
import { inject, reactive, ref } from 'vue'
import Content from './Content.vue'
import Modal from './Modal.vue'
import wait from '../helpers/wait.ts'
import { Ref } from 'vue'

defineProps<{
  data: {
    time: [string, string],
    title: string,
    description: string,
    image: string,
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
        <div :class="`box ${modalIsActive ? 'box_hidden' : ''}`">
          <p>{{ data.time[0] }} - {{ data.time[1] }}</p>
          <h3>{{ data.title }}</h3>
          <!-- TODO: Move to other component -->
          <div class="box__description">
            <template
              v-for="item in data.description"
              :key="item"
            >
              <p v-if="typeof item === 'string'">
                {{ item }}
              </p>
              <ul v-if="Array.isArray(item)">
                <li
                  v-for="string in item"
                  :key="string"
                >
                  {{ string }}
                </li>              
              </ul>
            </template>
          </div>
        </div>
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
      <div class="box box_modal">
        <p>{{ data.time[0] }} - {{ data.time[1] }}</p>
        <h3>{{ data.title }}</h3>
        <div class="box__description">
          <template
            v-for="item in data.description"
            :key="item"
          >
            <p v-if="typeof item === 'string'">
              {{ item }}
            </p>
            <ul v-if="Array.isArray(item)">
              <li
                v-for="string in item"
                :key="string"
              >
                {{ string }}
              </li>              
            </ul>
          </template>
        </div>
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

      .white-theme & {
        @include media-phone {
          color: var(--gray-1);
        }
      }
    }

    &__description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-all;

      @include media-phone {
        text-align: left;
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

.box_modal {
  height: 100%;
  overflow: auto;
  display: block;
  text-align: left;

  h3 {
    color: var(--white);
  }

  .box__description {
    max-width: 50rem;
    -webkit-line-clamp: initial;
    word-break: initial;

    ul {
      margin-top: 1rem;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 1.875rem;
      color: var(--gray-5);

      li {
        margin-top: 0.25rem;
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: "=>";
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
