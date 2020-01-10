<template>
<fragment v-if="elements">
  <Component v-for="(element, index) in elements" :key="index" :is="element.contentTypeAlias" v-bind="element" />
</fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Elements } from '@/types'
import TextAndImage from '@/components/elements/TextAndImage.vue'

export default Vue.extend({
  components: {
    'textAndImage': TextAndImage
  },

  props: {
    elements: { type: Array as () => Elements[] }
  }
})
</script>
