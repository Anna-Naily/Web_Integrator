<template>
  <button class="button" type="button" :class="classes">
    <slot name="iconLeft"></slot>
    {{ text }}
    <slot></slot>
    <slot name="iconRight"></slot>
    <slot name="without-background"></slot>
  </button>
</template>

<script>
import IconComponent from './IconComponent.vue';

export default {
  name: 'ButtonComponent',
  components: { IconComponent },
  props: {
    classes: {
      type: String,
    },
    background: {
      type: Boolean,
      default: true,
    },
    textClasses: {
      type: String,
    },
    iconClasses: {
      type: String,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
      default: '#',
    },
  },
  components: { IconComponent },
};
</script>

<style lang="scss">
.button {
  font-family: $font-family-default;
  font-size: rem($font-size-mini);
  line-height: rem(12px);
  font-weight: $font-weight-large;

  display: flex;
  align-items: center;

  padding: rem(8px) rem(24px);

  text-align: center;
  text-transform: none;
  cursor: pointer;
  transition: $transition-duration $transition-function;

  border: rem(1px) solid $curious-blue;
  border-radius: rem($border-radius-medium);
  background-color: $curious-blue;
  color: $white;

  @media #{$screen-tablet} {
    font-size: rem($font-size-tiny);
    line-height: rem($line-height-mini);
  }
  @media #{$screen-desktop} {
    font-size: rem($font-size-normal);
    line-height: rem($line-height-tiny-little);
    padding: rem(12px) rem(36px);
  }

  &--rotate {
    transform: rotate(180deg);
  }

  &--button-without-color {
    font-size: rem($font-size-tiny);
    line-height: rem($line-height-mini);
    font-weight: $font-weight-medium;

    padding: 0;

    cursor: pointer;
    text-align: center;

    border: none;
    background: none;
    color: $curious-blue;

    &:hover {
      color: $wild-blue-yonder;
      background: none;
    }

    &:focus {
      opacity: 0.5;
    }
  }

  &--button-wide-padding {
    padding: rem(17.5px) rem(30px);
  }

  &--circle {
    border-radius: 50%;
  }

  &--mini {
    width: rem(24px);
    height: rem(24px);
    padding: rem(4px);
  }

  &--red {
    background-color: $white;
    color: $bunker;

    &:hover,
    &:focus {
      color: $cerise-red;
      border-color: $white;
      background-color: $white;
    }
  }
  &--button-only-border {
    padding: rem(7px) rem(23px);

    border: rem(2px) solid $curious-blue;
    border-radius: rem(4px);

    background-color: transparent;

    color: $curious-blue;

    @media #{$screen-desktop} {
      padding: rem(11px) rem(35px);
    }
    &:hover {
      color: $wild-blue-yonder;
      border-color: $wild-blue-yonder;
      background-color: none;
    }

    &:focus {
      opacity: 0.5;
    }
  }
  &--only-text {
    font-size: rem($font-size-miniature);
    line-height: rem($line-height-mini);
    font-weight: $font-weight-large;

    padding: 0;

    cursor: pointer;

    border: none;
    background: none;
    color: rgba($tiber, 0.8);
    @media #{$screen-tablet} {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-miniature);
    }
    @media #{$screen-desktop} {
      font-size: rem($font-size-normal);
      line-height: rem($line-height-tiny);
    }
    &:hover {
      color: rgba($tiber, 0.8);
      border-color: none;
      background-color: transparent;
    }

    &:focus {
      opacity: none;
    }
  }
  &--in-color {
    &:hover {
      background-color: $wild-blue-yonder;
      border-color: $wild-blue-yonder;
    }

    &:active {
      background-color: $wild-blue-yonder;
      border-color: $wild-blue-yonder;
      opacity: 0.5;
    }
    &:disabled {
      cursor: not-allowed;
      pointer-events: none;

      background-color: $athens-gray;
      border-color: $athens-gray;
      color: $heather;
    }
  }

  &__icon {
    width: rem(24px);
    height: rem(24px);
    margin-left: rem(12px);

    color: rgba($tiber, 0.8);
    @media #{$screen-desktop} {
      width: rem(30px);
      height: rem(30px);
      margin-left: rem(10px);
    }
    @media #{$screen-desktop} {
      width: rem(36px);
      height: rem(36px);
      margin-left: rem(7px);
    }
  }

  &__tab {
    font-size: rem($font-size-miniature);
    line-height: rem($line-height-mini);

    padding: rem(10px) rem(20px);

    border: none;

    @media #{$screen-tablet} {
      font-family: $font-family-custom;
      font-size: rem($font-size-small);
      line-height: rem(22px);
      font-weight: $font-weight-medium;
    }
    @media #{$screen-desktop} {
      font-family: $font-family-custom;
      font-size: rem($font-size-normal);
      line-height: rem(23px);

      padding-left: rem(22.5px);
      padding-right: rem(22.5px);
    }
    &:hover {
      background-color: $wild-blue-yonder;
    }

    &--diactive {
      background-color: $athens-gray;
      color: $curious-blue;

      &:hover {
        color: $wild-blue-yonder;
        background-color: $athens-gray;
      }
    }
  }

  &__text {
    display: flex;

    background-color: transparent;
    border: none;
  }
}
</style>