<script setup lang="ts">
defineProps<{ background?: string }>()
</script>

<template>
  <div :class="`content ${background ? 'content_inner' : ''}`" :style="`--bg: url('${background}')`">
    <div class="content__heading">
      <slot name="heading" />
    </div>
    <div class="content__body">
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/media';

.content {
  display: flex;
  justify-content: flex-end;
  gap: 16rem;
  padding: 4.375rem 0;

  &__heading {
    flex: 0 0 25%;
    text-align: right;
  }

  &__body {
    flex: 0 0 calc(50% - 6.25rem);
    margin-right: 6.25rem;

    @include media-phone {
      margin-right: 0;
    }
  }

  &_inner {
    align-items: flex-end;
    width: 100%;
    height: calc(100vw * 0.563);
    background: var(--blue) no-repeat center / cover;
    background-image: var(--bg);
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #00000025;
      z-index: -1;
    }
  }

  @include media-phone {
    flex-direction: column;
    padding: 1.375rem;
    gap: 3rem;
  }
}
</style>