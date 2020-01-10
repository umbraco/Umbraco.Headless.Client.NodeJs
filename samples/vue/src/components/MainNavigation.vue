<template>
  <nav class="nav-container" aria-label="Primary">
    <ul class="nav">
      <li class="nav__item" v-for="link in links" :key="link.title">
        <router-link :to="link.url" v-slot="{ href, navigate, isActive }">
          <a class="nav__item-link" :class="{ 'nav__item-link--current': isActive }" :href="href" @click="navigate">{{ link.title }}</a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Content } from '@umbraco/headless-client'

type NavigationLink = {
  id: string
  url: string
  title: string
}

export default Vue.extend({
  props: {
    items: { type: Array as () => Content[], required: true }
  },

  computed: {
    links (): NavigationLink[] {
      return this.items.map(item => ({
        id: item._id,
        url: item._url,
        title: item.name
      }))
    }
  }
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
