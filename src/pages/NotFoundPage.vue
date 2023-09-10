<script setup lang="ts">
import Content from '../components/Content.vue';
</script>

<template>
  <div class="not-found">
    <div class="not-found__inner">
      <img src="/images/not-found-inner.gif" alt="index inner image">
    </div>
    <Content>
      <template v-slot:heading></template>
      <template v-slot:body>
        <p>The page you are looking is a myth.</p>
        <h1>It seems you are lost</h1>
      </template>
    </Content>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/media";

.not-found {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__inner {
    margin: 0 auto;
    max-width: 50%;
    width: 100%;

    img {
      width: 100%;
    }


    @include media-phone {
      max-width: 100%;
    }
  }

  h1 {
    margin-bottom: 1.5rem;

    ~p {
      max-width: 50rem;
    }

    .white-theme & {
      color: var(--gray-1);
    }
  }


  @include media-phone {
    padding-top: 0;
  }
}
</style>