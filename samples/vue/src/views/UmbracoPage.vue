<template>
  <Compontent :is="component" :content="content" />
</template>

<script>
import Vue from 'vue'

import Frontpage from '@/views/Frontpage.vue'
import Textpage from '@/views/Textpage.vue'
import NotFound from '@/views/NotFound.vue'
import client from '@/client'

export default Vue.extend({
  components: {
    'frontpage': Frontpage,
    'textpage': Textpage,
    'notFound': NotFound
  },

  async beforeRouteEnter (to, from, next) {
    let content
    try {
      content = await client.delivery.content.byUrl(to.path)
    } catch (e) {
      censole.log(e)
      content = { contentTypeAlias: 'notFound', name: 'Not Found' }
    }

    next(vm => {
      vm.content = content
    })
  },

  async beforeRouteUpdate (to, from, next) {
    try {
      this.content = await client.delivery.content.byUrl(to.path)
    } catch (e) {
      censole.log(e)
      this.content = { contentTypeAlias: 'notFound', name: 'Not Found' }
    }
    next()
  },

  watch: {
    content () {
      document.title = this.content.name
    }
  },

  data () {
    return {
      content: {}
    }
  },

  computed: {
    component () {
      return this.content.contentTypeAlias
    }
  }
})
</script>
