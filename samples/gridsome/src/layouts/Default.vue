<template>
  <fragment>
    <PageHeader />
    <main class="main-content">
      <slot/>
    </main>
    <PageFooter />
  </fragment>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    PageHeader,
    PageFooter,
  },
})
</script>

<style>
:root {
  --content-width: 1360px;
  --grey: #f9f7f4;
  --main-grid:
    [full-start] 1fr [content-start] minmax(320px, var(--content-width))
    [content-end] 1fr [full-end];
}

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-size: 18px;
}

body {
  padding: 0;
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 20px;
}

ul {
  margin: 0;
}

a {
  color: #3544b1;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.main-content {
  display: grid;
  grid-template-columns: var(--main-grid)
}
</style>
