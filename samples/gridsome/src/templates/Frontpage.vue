<template>
  <Layout>
    <Hero :title="$page.frontpage.heroTitle" :subtitle="$page.frontpage.heroSubtitle" :image="$page.frontpage.heroImage" />
    <UniqueSellingPoints :title="$page.frontpage.uniqueSellingPointsTitle" :uniqueSellingPoints="$page.frontpage.uniqueSellingPoints" />
    <Elements :elements="$page.frontpage.elements" />
  </Layout>
</template>

<page-query>
query($id: ID!) {
  frontpage(id: $id) {
    name
    heroTitle
    heroSubtitle
    heroImage {
      _url
    }
    uniqueSellingPointsTitle
    uniqueSellingPoints {
      title
      text
      image {
        _url
      }
      link {
        url
        #target
        name
      }
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
import UniqueSellingPoints from '@/components/UniqueSellingPoints.vue'

export default {
  name: 'Frontpage',
  components: {
    Elements,
    Hero,
    UniqueSellingPoints
  },
  props: {
  }
}
</script>
