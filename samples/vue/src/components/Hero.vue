<template>
  <section class="hero" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))' + (image ? ', url(' + image._url + '?width=1980&amp;height=430&amp;mode=crop)' : '') }">
    <h1 class="hero__title">{{ title }}</h1>
    <h2 class="hero__subtitle" :if="subtitle">{{ subtitle }}</h2>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { Image } from '@/types'

export default Vue.extend({
  props: {
    image: { type: Object as () => Image },
    title: { type: String, required: true },
    subtitle: String
  }
})
</script>

<style scoped>
.hero {
  grid-column: full-start / full-end;
  padding: 50px 5px 0 5px;
  min-height: 230px;
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  display: grid;
  align-content: center;
}

.hero__title {
  font-size: 2em;
  font-weight: 900;
}

.hero__subtitle {
  font-size: 1.1em;
  font-weight: 400;
}

@media (min-width: 992px) {
  .hero {
    height: 430px;
  }
  .hero__title {
    font-size: 4.2em;
  }
}
</style>
