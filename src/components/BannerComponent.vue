<template>
  <div class="banner" :class="classes">
    <img class="banner__img" :src="require(`../assets/images/${bannerImg}`)" :alt="bannerImg" />
  </div>
</template>
  
  <script>
export default {
  name: 'BannerComponent',
  props: {
    classes: {
      type: String,
    },
    bannerImg: {
      type: String,
    },
  },
};
</script>
  
  <style lang="scss">
.banner {
  &__img {
    width: rem(375px);
    height: rem(287px);
    @media #{$screen-tablet} {
      width: rem(400px);
      height: rem(358px);
    }
    @media #{$screen-desktop} {
      width: rem(667px);
      height: rem(604px);
    }
  }
}
</style>