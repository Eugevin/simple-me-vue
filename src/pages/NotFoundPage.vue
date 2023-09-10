<script setup lang="ts">
import Content from '../components/Content.vue';
</script>

<template>
  <div class="simple not-found">
    <div class="simple__inner">
      <img src="/images/not-found-inner.gif" alt="not-found inner image">
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