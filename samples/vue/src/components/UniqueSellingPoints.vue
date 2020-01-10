<template>
  <article class="usp-container">
    <h1 v-if="title" class="usp-container__title">{{ title }}</h1>
    <div class="usp-item-container">
      <section class="usp" v-for="usp in uniqueSellingPoints" :key="usp.key">
        <h2 v-if="usp.title" class="usp__title">{{ usp.title }}</h2>
        <img v-if="usp.image" class="usp__image" :src="usp.image._url" alt="" />
        <div v-else class="usp__image"></div>
        <p class="usp__text">{{ usp.text }}</p>
        <a
          v-if="usp.link"
          :href="usp.link.url"
          :target="usp.link.target"
          rel="noopener"
          class="usp__link"
          >{{ usp.link.name }}</a
        >
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Link, UniqueSellingPoint } from '@/types'

export default Vue.extend({
  props: {
    title: { type: String },
    uniqueSellingPoints: { type: Array as () => UniqueSellingPoint[] }
  }
})
</script>

<style scoped>
.usp-container {
  display: grid;
  grid-template-columns: var(--main-grid);
}

.usp-container {
  background: var(--grey);
  padding-top: 50px;
  grid-column: full-start / full-end;
}

.usp-container__title {
  grid-column: content-start / content-end;
  font-size: 2.4em;
  text-align: center;
}

.usp-item-container {
  grid-column: content-start / content-end;
  display: grid;
}

.usp {
  display: grid;
  text-align: center;
  margin-bottom: 25px;
  padding: 0 20px;
  grid-template-rows: 120px auto auto auto;
}

.usp__image {
  grid-row: 1 / 1;
  margin: 0 auto 20px auto;
}

.usp__title {
  font-size: 1.5em;
  margin: 0 0 20px;
}

.usp__text {
  margin: 0 0 10px;
}

.usp__link {
  padding: 10px 20px;
}

@media (min-width: 992px) {
  .usp-item-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
