<template>
  <footer class="page-footer-container">
    <div class="page-footer">
      <h1 class="page-footer__title">{{ title }}</h1>
      <ul class="page-footer__links">
        <li v-for="(link, index) in links" :key="index"><a class="page-footer__link" :href="link.url" :target="link.target" rel="noopener">{{ link.name }}</a></li>
      </ul>
      <svg class="page-footer__graphics" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616.79 369.24"><defs></defs><path class="cls-1" d="M360.16,128.15A128.32,128.32,0,1,1,488.48,256.63,128.32,128.32,0,0,1,360.16,128.15Zm125.72,43.94a126.27,126.27,0,0,1-29.66-2.67,22.72,22.72,0,0,1-16.2-13q-4.35-10-4.23-31a196,196,0,0,1,1.37-21.8q1.26-10.57,2.51-17.43l.87-4.54a2.67,2.67,0,0,0,0-.4,2.6,2.6,0,0,0-2.15-2.58L421.84,76.1h-.36a2.61,2.61,0,0,0-2.53,2c-.28,1.06-.45,1.84-.94,4.38-.95,4.87-1.82,9.62-2.79,16.55a213.07,213.07,0,0,0-1.87,22.7,117,117,0,0,0,0,15.89q.58,21.08,7.23,33.65T443.1,189.4q15.87,5.53,44.22,5.41h2.36q28.38.12,44.2-5.41t22.52-18.12q6.65-12.6,7.23-33.65a117,117,0,0,0,0-15.89A213.07,213.07,0,0,0,561.76,99c-1-6.86-1.84-11.59-2.79-16.55-.49-2.54-.66-3.32-.94-4.38a2.6,2.6,0,0,0-2.53-2h-.43l-16.55,2.58a2.61,2.61,0,0,0-2.18,2.58,2.67,2.67,0,0,0,0,.4l.88,4.54q1.24,6.89,2.53,17.43a198.39,198.39,0,0,1,1.35,21.8q.21,20.88-4.24,30.93a22.7,22.7,0,0,1-16.05,13.06,126.1,126.1,0,0,1-29.64,2.67Z"></path><g><path class="cls-2" d="M278.35,287.27s4-4.49,43.76-22.38c16.77-7.55,26.83-18.54,40.35-20.79s58.26-36,44.81-59.8-36.22,2.44-50-.66-26.83,1.55-50.75,16.49c-23.31,14.56-48.54,20.33-59.83,32C235.14,244.06,278.35,287.27,278.35,287.27Z"></path><path class="cls-3" d="M18.67,257.22l242.75-50,33.83,90.84S142.65,375.77,46.11,368.8C-38,362.73,18.67,257.22,18.67,257.22Z"></path></g></svg>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Link } from '@/types'

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    links: { type: Array as () => Link[] }
  }
})
</script>

<style scoped>
.cls-1 { fill: #3544b1; }
.cls-2 { fill: #ffedd6; }
.cls-3 { fill: #fba0a2; }

.page-footer-container {
  display: grid;
  grid-template-columns: var(--main-grid);
  grid-column: content-start / content-end;
  background: var(--grey);
}

.page-footer {
  margin: 50px 20px;
  color: #101f3c;
  grid-column: content-start / content-end;
  display: grid;
  grid-template-rows: auto 1fr;
}

.page-footer__title {
  font-size: 1.2em;
}

.page-footer__links {
  list-style-type: none;
  margin: 0 0 40px;
  padding: 0;
}

.page-footer__link,
.page-footer__link:focus,
.page-footer__link:visited {
  color: #8A8A8A;
  line-height: 2;
}

.page-footer__link:hover {
  color: #333;
  text-decoration: none;
}

.page-footer__graphics {
  height: 150px;
  widows: 250px;
  transform: translateX(-27%);
}

@media (min-width: 992px) {
  .page-footer {
    margin: 70px 20px 100px;
  }

  .page-footer__graphics {
    transform: none;
    align-self: center;
    margin: 0 auto;
  }
}
</style>
