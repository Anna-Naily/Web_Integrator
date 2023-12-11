<template>
  <div>
    <div class="profile" :class="classes">
      <router-link :to="link" class="profile__link">
        <div class="profile__icon profile__icon--hidden">
          <IconComponent :name="'profile'" class="profile__icon-pic button--button-without-color" />
        </div>
      </router-link>
    </div>
    <div class="profile">
      <router-link :to="link" class="profile__link">
        <div class="profile__combo profile__combo--hidden">
          <span class="profile__name">{{name}}</span>
          <div class="profile__avatar">
            <img class="profile__avatar-pic" :src="require(`../assets/images/${pic}`)" :alt="pic" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import IconComponent from './IconComponent.vue';

export default {
  name: 'ProfileComponent',
  components: { IconComponent },
  props: {
    classes: {
      type: String,
    },
    pic: {
      type: String,
      default: 'default-avatar-pic.png',
    },
    name: {
      type: String,
      default: 'Пользователь',
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.profile {
  @media #{$screen-tablet} {
    width: rem(129px);
  }
  &__avatar {
    &-pic {
      width: rem(40px);
      height: rem(40px);

      border-radius: 50%;
    }
  }
  &__combo {
    &--hidden {
      display: none;
      @media #{$screen-tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  &__name {
    font-size: rem($font-size-tiny);
    line-height: rem(16.8px);
    font-weight: $font-weight-regular;

    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;

    color: $slate-gray;
  }
  &__icon {
    display: inline-block;
    &--hidden {
      @media #{$screen-tablet} {
        display: none;
      }
    }
  }
  &__icon-pic {
    width: rem(24px);
    height: rem(24px);

    color: $curious-blue;
  }
  &__link {
    color: $slate-gray;
  }
}
</style>