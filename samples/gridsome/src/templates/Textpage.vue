<template>
  <Layout>
    <Hero :title="$page.textpage.heroTitle" :subtitle="$page.textpage.heroSubtitle" :image="$page.textpage.heroImage" />
    <Elements :elements="$page.textpage.elements" />
  </Layout>
</template>

<page-query>
query($id: ID!) {
  textpage(id: $id) {
    name
    heroTitle
    heroSubtitle
    heroImage {
      _url
    }
    elements {
      contentTypeAlias
      title
      text
      image {
        _url
      }
      showLargeImage
    }
  }
}
</page-query>

<script lang="ts">
import Elements from '@/components/Elements.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Textpage',
  components: {
    Elements,
    Hero,
  },
  props: {
  }
}
</script>
