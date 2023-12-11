<template>
  <header class="header" :class="classes">
    <div class="header__container">
      <div class="header__row">
        <div class="header__col header__col--logo">
          <LogoComponent :pic="logo.pic" :link="logo.link" :classes="'logo__pic--header'" />
        </div>
        <div class="header__col header__col--search header__col--no-padding">
          <SearchComponent />
        </div>

        <div class="header__col header__col--profile">
          <ProfileComponent :name="profile.name" :pic="profile.pic" :link="profile.link" />
        </div>
        <div class="header--border"></div>
      </div>
    </div>
  </header>
</template>

<script>
import IconComponent from './IconComponent.vue';
import SearchComponent from './SearchComponent.vue';
import LogoComponent from './LogoComponent.vue';
import ProfileComponent from './ProfileComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    IconComponent,
    SearchComponent,
    LogoComponent,
    ProfileComponent,
  },
  props: {
    classes: {
      type: String,
    },
  },
  data() {
    return {
      logo: {
        pic: 'logo-main.png',
        link: '/',
      },
    };
  },
  computed: {
    profile() {
      return this.$store.getters['getProfile'];
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: $z-index-header;
  top: 0;
  right: 0;
  left: 0;
  flex-shrink: 0;
  height: $height-header-mobile;

  box-shadow: rem(0px) rem(3px) rem(10px) rgba(0, 0, 0, 0.05);

  background-color: $white;

  @media #{$screen-tablet} {
    height: rem($height-header-desktop);
  }

  &--border {
    position: absolute;
    left: 0;
    top: rem(63.5px);

    display: block;

    width: 100%;
    height: 0;

    content: '';

    border-bottom: rem(1px) solid $athens-gray;

    @media #{$screen-tablet} {
      border: none;
    }
  }
  &--pic {
    width: rem(135px);
    height: rem(30.32px);
  }
  &__container {
    @include container;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: rem(0px);

    @media #{$screen-tablet} {
      display: flex;
      column-gap: rem(60px);
      flex-wrap: nowrap;
    }
  }
  &__col {
    padding-top: rem(16px);
    padding-bottom: rem(12px);

    @media #{$screen-tablet} {
      padding-top: rem(20px);
      padding-bottom: rem(15px);
    }
    &--no-padding {
      padding-top: rem(0px);
      padding-bottom: rem(0px);
    }

    &--profile {
      order: 1;
      @media #{$screen-tablet} {
        padding-left: rem(20px);

        border-left: rem(1px) solid $athens-gray;
      }
    }

    &--logo {
      order: 1;
    }

    &--search {
      order: 2;

      width: 100%;
      @media #{$screen-tablet} {
        order: 1;
      }
    }
  }
}
</style>