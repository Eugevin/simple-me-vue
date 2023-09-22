<script setup lang="ts">
import { onMounted, ref } from 'vue';

const filesToPreload = [
  '/images/contacts-inner.gif',
  '/images/header-contacts.jpg',
  '/images/header-home.jpg',
  '/images/header-skills.jpg',
  '/images/header-works.jpg',
  '/images/index-inner.gif',
  '/images/not-found-inner.gif',
  '/images/skills-base.png',
  '/images/skills-inner.gif',
  '/images/skills-js.png',
  '/images/skills-more.png',
  '/images/skills-ts.png',
  '/images/skills-vue.png',
  '/images/works-inner.gif',
  '/images/works-platinum.png',
  '/images/works-pp.png',
  '/images/works-r52.png',
  '/images/works-travelask.png',
]

const emit = defineEmits<{
  (e: 'loaded'): void
}>();

const progress = ref<number>(10);

const canvas = ref<HTMLCanvasElement>();

class Bubble {
  #canvas: HTMLCanvasElement;
  #ctx: CanvasRenderingContext2D;
  #x: number;
  #y: number;
  #gradient: CanvasGradient;
  #radius: number;
  #alpha: number;
  #vx: number;
  #vy: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x?: number, y?: number) {
    this.#canvas = canvas;
    this.#ctx = ctx;
    this.#radius = 5 + Math.random() * 10;
    this.#x = x ? x : this.#radius + Math.random() * (this.#canvas.width - this.#radius * 2);
    this.#y = y ? y : this.#radius + Math.random() * (this.#canvas.height - this.#radius * 2);
    this.#gradient = this.#ctx.createLinearGradient(0, 0, this.#canvas.width, this.#canvas.height);
    this.#vx = Math.round(Math.random()) === 1 ? Math.random() * 1 : Math.random() * -1;
    this.#vy = Math.round(Math.random()) === 1 ? Math.random() * 1 : Math.random() * -1;

    this.#gradient.addColorStop(0, '#BE93C5');
    this.#gradient.addColorStop(0.5, '#7BC6CC');
    this.#gradient.addColorStop(1, '#FFFFFF');

    this.#alpha = 0;

    this.#ctx.fillStyle = this.#gradient;
  }

  draw() {
    if (this.#alpha < 1) {
      this.#alpha = +(this.#alpha + 0.1).toFixed(1);
    }

    this.#ctx.globalAlpha = this.#alpha;
    this.#ctx.beginPath();
    this.#ctx.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2);
    this.#ctx.fillStyle = this.#gradient;
    this.#ctx.fill();
  }

  move() {
    this.#x += this.#vx;

    if (this.#x > this.#canvas.width - this.#radius || this.#x < this.#radius) {
      this.#vx *= -1;
    }

    this.#y += this.#vy;

    if (this.#y > this.#canvas.height - this.#radius || this.#y < this.#radius) {
      this.#vy *= -1;
    }
  }
}

class CanvasBg {
  #canvas: HTMLCanvasElement;
  #ctx: CanvasRenderingContext2D;
  #bubbles: Array<Bubble>;
  #totalBubbles: number;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas as HTMLCanvasElement;
    this.#ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


    this.#bubbles = [];
    this.#totalBubbles = 10;
  }

  init() {
    this.#handleSize();
    this.#handleClick();
    this.#createBubbles();
    this.#drawLoop();
  }

  #handleBubbles() {
    this.#bubbles.forEach(bubble => {
      bubble.draw();
      bubble.move();
    });
  }

  #createBubbles(x?: number, y?: number) {
    if (x && y) {
      this.#bubbles.push(new Bubble(this.#canvas, this.#ctx, x, y))
      return;
    }

    for (let i = 0; i < this.#totalBubbles; i++) {
      this.#bubbles.push(new Bubble(this.#canvas, this.#ctx));
    }
  }

  #drawLoop() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

    this.#handleBubbles();

    requestAnimationFrame(this.#drawLoop.bind(this));
  }

  #handleSize() {
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      this.#canvas.width = window.innerWidth;
      this.#canvas.height = window.innerHeight;
    });
  }

  #handleClick() {
    this.#canvas.addEventListener('click', e => {
      this.#createBubbles(e.x, e.y);
    });
  }
}

onMounted(() => {
  if (!canvas.value) return;

  const canvasHandler: CanvasBg = new CanvasBg(canvas.value);
  canvasHandler.init();

  loaderHandler();
});

async function loaderHandler() {
  Promise.allSettled(filesToPreload.map(el => {
    return new Promise((resolve, _) => {
      const img = new Image();
      img.src = el;

      img.addEventListener('load', () => {
        progress.value += Math.floor(100 / filesToPreload.length);

        resolve(true);
      });
    });
  }))
    .then(hideLoader);
}

function hideLoader() {
  progress.value = 100;
  emit('loaded');
}
</script>

<template>
  <div class="loader">
    <canvas ref="canvas"></canvas>
    <h1 class="loader__title">Loading</h1>
    <h5>{{ progress }}%</h5>
    <div class="loader__progress" :style="`--progress: ${progress}%;`"></div>
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
  }
}
</style>