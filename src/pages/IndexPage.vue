<script setup lang="ts">
import Content from '../components/Content.vue';
</script>

<template>
  <div class="index">
    <div class="index__inner">
      <img src="../assets/images/index-inner.gif" alt="index inner image">
    </div>
    <Content>
      <template v-slot:heading></template>
      <template v-slot:body>
        <p style="color: var(--white)">Frontend dev with more than 4 years experience in Vue.</p>
        <h1>Hi, my name's Eugene</h1>
        <p>
          I started to be interested in computers and technology at the age of 7 when I first got into a computer store
          with my father. I saw a bunch of randomly placed pieces of iron that you can put together, connect with cables
          and get a window with access to the coolest invention of the 21st century - the Internet!
        </p>
        <p>
          At school, I did pretty well with the Pascal programming language, but I quickly realized that nothing really
          cool (from what I would like to do) is poorly implemented in it. I started learning PHP, coding programs
          (Exlips) and unpacking games for fun.
        </p>
        <p>
          At the age of 15, I even created my first commercially successful project on the Minecraft game (I edited the
          launcher sources in Eclipse, stole my mother's card to pay for the domain and hosting, distributed the load). I
          managed to create it for less than $15 and after 2 months, having accumulated a certain player base, I sold it
          for $50! I think that minecraft as a whole had a very cool influence on me and I was able to choose the right
          vector for my future profession.
        </p>
        <p>
          After my graduation, I realized that I was most drawn to Frontend development. I learned Javascript, HTML, CSS
          and went to work as a freelancer. After 1.5 years of freelancing, I went to work in my first office. I still
          believe that Frontend is awesome!
        </p>
        <p>
          Today my main passion is create beautiful interfaces and fancy websites without issues! I don't want to take up
          too much time writing about how awesome I am, stress-resistant and result-driven developer (so cliché), so let's
          get straight to the point!
        </p>
      </template>
    </Content>
  </div>
</template>

<style scoped lang="scss">
.index {
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
  }

  h1 {
    margin-bottom: 1.5rem;

    ~p {
      max-width: 50rem;
    }
  }
}
</style>