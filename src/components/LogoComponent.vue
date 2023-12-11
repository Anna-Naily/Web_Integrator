<template>
  <div class="logo">
    <router-link to="/" class="logo__link">
      <img class="logo__pic" :class="classes" :src="require(`../assets/images/${pic}`)" :alt="pic" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent',
  props: {
    classes: {
      type: String,
    },
    pic: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.logo {
  &__pic {
    &--header {
      width: rem(135px);
      height: rem(30.32px);
    }

    &--footer {
      width: rem(93.42px);
      height: rem(18px);

      @media #{$screen-desktop} {
        width: rem(135px);
        height: rem(26.1px);
      }
    }
  }
}
</style>