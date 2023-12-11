<template>
  <div class="tabs" :class="classes">
    <ButtonComponent
      @click.native="setArticles"
      :class="tab == 'article' ? 'button__tab' : 'button__tab--diactive'"
      :text="'Статьи'"
      :classes="'button__tab'"
    />
    <ButtonComponent
      @click.native="setNews"
      :class="tab == 'news' ? 'button__tab' : 'button__tab--diactive'"
      :text="'Новости'"
      :classes="'button__tab'"
    />
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'TabsComponent',
  components: {
    ButtonComponent,
  },
  props: {
    classes: {
      type: String,
    },
    tab: {
      type: String,
    },
  },
  methods: {
    setArticles() {
      this.$store.dispatch('setTabData', 'article');
    },
    setNews() {
      this.$store.dispatch('setTabData', 'news');
    },
  },
};
</script>

<style lang="scss">
.tabs {
  display: flex;
  justify-content: center;
  column-gap: rem(20px);
  @media #{$screen-tablet} {
    justify-content: flex-start;
    column-gap: rem(12px);
  }
  @media #{$screen-desktop} {
    column-gap: rem(13px);
  }
}
</style>