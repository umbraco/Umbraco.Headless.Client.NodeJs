<template>
  <nav class="nav-container" aria-label="Primary">
    <ul class="nav">
        <li class="nav__item" v-for="{ node:link } in $static.mainNavigationItems.edges" :key="link.title">
        <g-link :to="link.url" class="nav__item-link" active-class="nav__item-link--current">{{ link.title }}</g-link>
      </li>
    </ul>
  </nav>
</template>

<static-query>
query {
  mainNavigationItems:allContent(filter: { umbracoNaviHide: { eq: false }, _level: { eq: 2 }}, sort: [{ by: "sortOrder", order: ASC }]) {
    edges {
      node {
        id
        title:name
        url:_url
      }
    }
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped>
.nav-container {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0 20px;
}

.nav {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__item {
  display: inline;
  padding: 5px;
}

.nav__item-link {
  color: white;
}

.nav__item-link--current {
  text-decoration: underline;
}

.nav__item-link--current:hover {
  text-decoration-thickness: 3px;
}

@media (min-width: 992px) {
  .nav-container {
    top: 15px;
  }

  .nav {
    display: block;
  }
}
</style>
