<template>
  <footer class="footer" :class="classes">
    <div class="footer__container">
      <div class="footer__row">
        <div class="footer__col footer__col--social">
          <SocialComponent
            :socialIcons="socialIcons"
            :classes="'footer__list footer__list--leftbar'"
          />
        </div>
        <div class="footer__col footer__col--menu">
          <MenuComponent :menu="menu" :classes="'footer__list'" />
        </div>
        <div class="footer__col footer__col--logo">
          <LogoComponent :pic="logo.pic" :link="logo.link" :classes="'footer--pic'" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconComponent from './IconComponent.vue';
import LogoComponent from './LogoComponent.vue';
import MenuComponent from './MenuComponent.vue';
import SocialComponent from './SocialComponent.vue';
export default {
  name: 'FooterComponent',
  components: { IconComponent, SocialComponent, MenuComponent, LogoComponent },
  props: {
    classes: {
      type: String,
    },
  },
  data() {
    return {
      socialIcons: [
        { id: 0, name: 'youtube', link: '#' },
        { id: 1, name: 'inst', link: '#' },
      ],
      logo: {
        pic: 'logo-footer.png',
        link: '/',
      },
    };
  },
  computed: {
    menu() {
      return this.$store.getters['getMenu'];
    },
  },
};
</script>

<style lang="scss">
.footer {
  background-color: $white;
  &--pic {
    width: rem(93.42px);
    height: rem(18px);

    @media #{$screen-desktop} {
      width: rem(135px);
      height: rem(26.1px);
    }
  }
  &__container {
    @include container;
  }
  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media #{$screen-tablet} {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--leftbar {
      &:last-child {
        @media #{$screen-tablet} {
          border-top: none;
          border-bottom: none;
        }
        @media #{$screen-desktop} {
          padding-right: rem(40px);
          border-right: rem(1px) solid $athens-gray;
        }
      }
    }
  }

  &__col {
    padding-top: rem(20px);
    padding-bottom: rem(20px);

    @media #{$screen-tablet} {
      padding-top: rem(31px);
      padding-bottom: rem(31px);
    }

    &--menu {
      width: 100%;

      border-top: rem(1px) solid $athens-gray;
      border-bottom: rem(1px) solid $athens-gray;
      @media #{$screen-tablet} {
        display: flex;
        justify-content: space-between;

        padding-left: rem(40px);

        border-top: none;
        border-bottom: none;
      }
      @media #{$screen-desktop} {
        padding-left: rem(40px);

        border-bottom: none;
      }
    }

    &--logo {
      display: flex;
      justify-content: center;
    }
  }
}
</style>

