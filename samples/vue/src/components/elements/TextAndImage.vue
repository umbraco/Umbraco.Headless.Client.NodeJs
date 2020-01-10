<template>
<article class="text-and-image" :class="{ 'text-and-image--image-left': showLargeImage }">
  <h1 class="text-and-image__title">{{ title }}</h1>
  <div class="text-and-image__text" v-html="text" />
  <img v-if="showLargeImage && image" class="text-and-image__image"
        :srcset="image._url + '?width=320&height=240&mode=crop 320w,' +
                  image._url + '?width=480&height=360&mode=crop 480w,' +
                  image._url + '?width=1024px&height=768&mode=crop 1024w'"
        sizes="(max-width: 320px) 320px,
                (max-width: 480px) 480px
                (max-width: 1024px) 1024px"
        :src="image._url + '?width=750&height=515&mode=crop'"
        loading="lazy"
        alt="">
  <img v-else-if="image" class="text-and-image__image"
        :srcset="image._url + '?width=320&height=240&mode=crop 320w,' +
                  image._url + '?width=480&height=360&mode=crop 480w,' +
                  image._url + '?width=1024px&height=768&mode=crop 1024w'"
        sizes="(max-width: 320px) 320px,
                (max-width: 480px) 480px
                (max-width: 1024px) 1024px"
        :src="image._url + '?width=320&height=240&mode=crop'"
        loading="lazy"
        alt="">
</article>
</template>

<script lang="ts">
import Vue from 'vue'

import { Image } from '@/types'

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: Object as () => Image },
    showLargeImage: { type: Boolean, required: true }
  }
})
</script>

<style scoped>
.text-and-image {
  margin: 20px 20px 0 20px;
  grid-column: content-start / content-end;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.text-and-image__title,
.text-and-image__text {
  grid-column: 1 / 1;
}

.text-and-image__title {
  font-size: 1.5em;
}

.text-and-image__image {
  margin-bottom: 20px;
  grid-row: 2 / 2;
}

.text-and-image--image-left .text-and-image__title,
.text-and-image--image-left .text-and-image__text {
  grid-column: 2 / -1;
}

.text-and-image--image-left .text-and-image__image {
  grid-column: 1;
}

@media (min-width: 992px) {
  .text-and-image {
    margin: 40px;
    grid-template-columns: 2fr 1fr;
  }

  .text-and-image__title {
    font-size: 2.8em;
  }

  .text-and-image__title,
  .text-and-image__text {
    padding: 0 30px 0 0;
  }

  .text-and-image__image {
    margin: 0 auto;
    align-self: center;
    grid-column: 2 / -1;
    grid-row: 1 / -1;
  }

  .text-and-image--image-left .text-and-image__title,
  .text-and-image--image-left .text-and-image__text {
    padding: 0 0 0 30px;
  }
}
</style>
