<template>
  <article class="review" :class="classes">
    <router-link :to="link" class="review__link"></router-link>
    <div class="review__header">
      <div class="review__profile">
        <img :src="require(`../assets/images/${avatar}`)" :alt="avatar" class="review__profile-pic" />
        <span class="review__profile-name">{{name}}</span>
      </div>
      <time class="review__date">{{date}}</time>
    </div>
    <div class="review__content">
      <span class="review__text">{{text}}</span>
      <div class="review__bottom">
        <img :src="require(`../assets/images/${logo}`)" :alt="logo" class="review__bottom-logo" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ReviewComponent',
  props: {
    classes: {
      type: String,
    },
    avatar: {
      type: String,
      default: 'review-default.png',
    },
    name: {
      type: String,
      reqired: true,
    },

    text: {
      type: [String, Number],
    },
    date: {
      type: [String, Number],
      required: true,
    },
    logo: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.review {
  padding: rem(20px);

  position: relative;

  background-color: $white;
  border-radius: rem($border-radius-big);
  width: rem(335px);
  height: rem(250px);

  flex-direction: column;

  box-shadow: $box-shadow-final-item;

  transition: $transition-duration $transition-function;

  @media #{$screen-tablet} {
    width: rem(356px);
    padding-left: rem(20.94px);
    padding-right: rem(20.94px);
  }
  @media #{$screen-desktop} {
    width: rem(600px);
    padding: rem(30px);

    height: rem(320px);
  }
  &:hover {
    cursor: pointer;
    @media #{$screen-desktop} {
      transform: translateY(-10px);
      box-shadow: $box-shadow-review-card;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: rem(11px);

    @media #{$screen-tablet} {
      margin-bottom: rem(15px);
    }
    @media #{$screen-desktop} {
      margin-bottom: rem(20px);
    }
  }

  &__profile {
    display: flex;
    align-items: center;
    column-gap: rem(10px);

    @media #{$screen-tablet} {
      column-gap: rem(15px);
    }
    @media #{$screen-desktop} {
      column-gap: rem(20px);
    }

    &-pic {
      width: rem(36px);
      height: rem(36px);

      border-radius: 50%;

      @media #{$screen-tablet} {
        width: rem(48px);
        height: rem(48px);
      }
      @media #{$screen-desktop} {
        width: rem(64px);
        height: rem(64px);
      }
    }
    &-name {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-miniature);
      font-weight: $font-weight-medium;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      max-width: rem(90px);

      text-align: left;
      white-space: normal;
      text-overflow: ellipsis;
      word-wrap: break-word;

      color: $tiber;

      @media #{$screen-tablet} {
        font-size: rem($font-size-small);
        line-height: rem(22px);

        max-width: rem(180px);
      }
      @media #{$screen-desktop} {
        font-size: rem($font-size-medium);
        line-height: rem(33px);
        max-width: rem(300px);
      }
    }
  }
  &__date {
    font-size: rem(10px);
    line-height: rem(15px);
    font-weight: $font-weight-medium;

    color: rgba($tiber, 0.35);

    @media #{$screen-tablet} {
      font-size: rem($font-size-mini);
      line-height: rem($line-height-mini);
    }
    @media #{$screen-desktop} {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-tiny-little);
    }
  }

  &__text {
    @include resize-text;
    font-size: rem($font-size-mini);
    line-height: rem(15.18px);
    font-weight: $font-weight-regular;

    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;

    text-align: left;

    color: rgba($tiber, 0.8);

    @media #{$screen-tablet} {
      font-size: rem(12px);
      line-height: rem(16px);
      font-weight: $font-weight-medium;
    }
    @media #{$screen-desktop} {
      font-size: rem($font-size-tiny);
      line-height: rem(22px);

      padding-left: rem(10px);
    }
  }
  &__bottom {
    display: flex;
    justify-content: flex-end;

    &-logo {
      max-width: rem(70px);
      height: rem(20px);

      @media #{$screen-tablet} {
        max-width: rem(100px);
        height: rem(24px);
      }
      @media #{$screen-desktop} {
        max-width: rem(300px);
        height: rem(30px);
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: rem(42px);
    @media #{$screen-desktop} {
      row-gap: rem(47px);
    }
  }
  &__link {
    @include link-fullscreen;
  }
}
</style>
