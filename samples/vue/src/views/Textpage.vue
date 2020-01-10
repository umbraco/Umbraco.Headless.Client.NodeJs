<template>
  <fragment>
    <Hero :title="content.heroTitle" :subtitle="content.heroSubtitle" :image="content.heroImage" />
    <Elements :elements="content.elements" />
  </fragment>
</template>

<script lang="ts">
import { Textpage } from '@/types'
import Elements from '@/components/Elements.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Textpage',
  components: {
    Elements,
    Hero
  },
  props: {
    content: { type: Object as () => Textpage, required: true }
  }
}
</script>
