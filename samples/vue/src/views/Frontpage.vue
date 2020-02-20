<template>
  <fragment>
    <Hero :title="content.heroTitle" :subtitle="content.heroSubtitle" :image="content.heroImage" />
    <UniqueSellingPoints :title="content.uniqueSellingPointsTitle" :uniqueSellingPoints="content.uniqueSellingPoints" />
    <Elements :elements="content.elements" />
  </fragment>
</template>

<script lang="ts">
import { Frontpage } from '@/types'
import Elements from '@/components/Elements.vue'
import Hero from '@/components/Hero.vue'
import UniqueSellingPoints from '@/components/UniqueSellingPoints.vue'

export default {
  name: 'Frontpage',
  components: {
    Elements,
    Hero,
    UniqueSellingPoints
  },
  props: {
    content: { type: Object as () => Frontpage, required: true }
  }
}
</script>
