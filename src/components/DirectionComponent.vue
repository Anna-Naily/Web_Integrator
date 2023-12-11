<template>
  <div class="direction" :class="classes">
    <div class="direction__combination">
      <img
        :src="require(`../assets/images/${direction.icon}`)"
        :alt="direction.icon"
        class="direction__pic"
      />
    </div>
    <div class="direction__content">
      <span class="direction__heading">{{direction.title}}</span>
      <span class="direction__text">{{direction.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectionComponent',
  props: {
    classes: {
      type: String,
    },
    direction: {
      type: Object,
      id: {
        type: Number,
      },
      title: {
        type: [String, Number],
      },
      text: {
        type: [String, Number],
      },
      icon: {
        type: String,
      },
    },
  },
};
</script>

<style lang="scss">
.direction {
  display: flex;
  column-gap: rem(61px);
  background-color: $athens-gray;
  border-radius: rem($border-radius-big);
  box-shadow: $box-shadow-final-item;
  overflow: hidden;
  width: 100%;

  position: relative;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: rem(6px);

    padding: rem(20px) rem(46px) rem(21px) rem(117px);

    @media #{$screen-tablet} {
      row-gap: rem(7px);

      padding: rem(30px) rem(27px) rem(32px) rem(113px);
    }
    @media #{$screen-desktop} {
      row-gap: rem(10px);

      padding: rem(40px) rem(30px) rem(43px) rem(130px);
    }
  }
  &__content & {
    &__heading {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-miniature);
      font-weight: $font-weight-medium;

      color: $tiber;

      @media #{$screen-tablet} {
        font-size: rem($font-size-normal);
        line-height: rem($line-height-tiny);
      }
    }
    &__text {
      @include resize-text;

      font-size: rem($font-size-mini);
      line-height: rem($line-height-mini);
      font-weight: $font-weight-regular;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      width: rem(172px);

      color: rgba($tiber, 0.8);

      @media #{$screen-tablet} {
        font-size: rem($font-size-miniature);

        width: rem(200px);
      }
      @media #{$screen-desktop} {
        font-size: rem($font-size-tiny);
        line-height: rem($line-height-tiny-little);

        width: rem(220px);
      }
    }
  }
  &__combination {
    position: absolute;

    display: block;

    width: rem(138px);
    height: rem(136px);

    background: url('../assets/images/circle-mobile.png') no-repeat;

    @media #{$screen-tablet} {
      width: rem(136px);
      height: rem(136px);

      background: url('../assets/images/circle-desktop.png') no-repeat;
      background-position-x: -10px;
      background-position-y: -17px;
    }
    @media #{$screen-desktop} {
      width: rem(138px);
      height: rem(136px);

      background-position: inherit;
    }
  }
  &__combination & {
    &__pic {
      width: rem(44px);
      height: rem(44px);
      margin-top: rem(6px);
      margin-left: rem(7px);

      @media #{$screen-tablet} {
        margin-top: rem(11px);
        margin-left: rem(8px);
      }
      @media #{$screen-desktop} {
        width: rem(54px);
        height: rem(54px);
        margin-top: rem(19px);
        margin-left: rem(15px);
      }
    }
  }
}
</style>