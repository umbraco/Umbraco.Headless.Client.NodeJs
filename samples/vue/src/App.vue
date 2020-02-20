<template>
  <fragment>
    <PageHeader v-if="mainNavigationItems" :mainNavigationItems="mainNavigationItems" />
    <main class="main-content">
      <router-view />
    </main>
    <PageFooter v-if="rootContent" :title="rootContent.footerTitle" :links="rootContent.footerLinks" />
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Content, PagedResponse } from '@umbraco/headless-client'

import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import client from '@/client'
import { HideInNavigation } from '@/types'

export default Vue.extend({
  components: {
    PageHeader,
    PageFooter
  },

  async created () {
    this.rootContent = await client.delivery.content.byUrl('/')
    if (this.rootContent) {
      this.rootChildren = await client.delivery.content.children(this.rootContent._id)
    }
  },

  data () {
    return {
      rootContent: undefined as Content | undefined,
      rootChildren: undefined as PagedResponse<Content> | undefined
    }
  },

  computed: {
    mainNavigationItems () {
      if (!this.rootChildren) {
        return []
      }
      // @ts-ignore
      return this.rootChildren.items.filter((c: HideInNavigation) => !c.umbNaviHide)
    }
  }
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
