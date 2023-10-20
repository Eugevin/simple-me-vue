<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { CanvasBg } from '../helpers/loaderCanvas'
import filesToPreload from '../helpers/filesToPreload'
import wait from '../helpers/wait'

const emit = defineEmits<{
  (e: 'loaded'): void
}>()

const progress = ref<number>(0)
const loadingFile = ref<string>('/bundle.js')

const canvas = ref<HTMLCanvasElement>()

let canvasHandler: CanvasBg

onMounted(() => {
  if (!canvas.value) return

  canvasHandler = new CanvasBg(canvas.value)
  canvasHandler.init()

  loaderHandler(0, filesToPreload)
})

onUnmounted(() => {
  canvasHandler.stop()
})

async function loaderHandler(i: number, arr: string[]) {
  if (i === filesToPreload.length) return hideLoader()

  loadingFile.value = arr[i]

  const img = new Image()
  img.src = arr[i]

  img.addEventListener('load', () => {
    progress.value += Math.floor(100 / filesToPreload.length)

    loaderHandler(++i, arr)
  })
}

async function hideLoader() {
  progress.value = 100

  await wait(500)

  emit('loaded')
}
</script>

<template>
  <div class="loader">
    <canvas ref="canvas" />
    <h1 class="loader__title">
      Loading
    </h1>
    <h5>{{ progress }}%</h5>
    <div
      class="loader__progress"
      :style="`--progress: ${progress}%;`"
    />
    <p><em>{{ loadingFile }}</em></p>
  </div>
</template>

<style scoped lang="scss">
.loader {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--gray-1);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  &__title,
  h5,
  p,
  &__progress {
    pointer-events: none;
    user-select: none;
  }

  &__progress {
    width: 50%;
    height: 1rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: var(--progress);
      background: var(--white);
      transition: var(--transition);
    }
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(0.5rem);
  }
}
</style>
