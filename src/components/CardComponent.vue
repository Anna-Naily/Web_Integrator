<template>
  <div class="card" :class="classes">
    <a :href="link" class="card__link"></a>
    <img class="card__img" :src="require(`../assets/images/${pic}`)" :alt="pic" />
    <div class="card__content">
      <span class="card__text">{{text}}</span>
      <div class="card__bottom">
        <span class="card__date">{{date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    classes: {
      type: String,
    },
    pic: {
      type: String,
      default: 'card-experience.png',
    },
    text: {
      type: [String, Number],
    },
    date: {
      type: [String, Number],
    },
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.card {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  transition: $transition-duration $transition-function;

  background-color: $white;
  box-shadow: $box-shadow-final-item;
  border-radius: rem($border-radius-big);

  &:hover {
    cursor: pointer;
    @media #{$screen-desktop} {
      transform: translateY(-10px);

      box-shadow: $box-shadow-review-card;
    }
  }
  &__img {
    width: 100%;
    height: rem(146px);

    overflow: hidden;
    object-fit: cover;

    border-radius: rem(24px) rem(24px) 0 0;
    @media #{$screen-tablet} {
    }
    @media #{$screen-desktop} {
      height: rem(255px);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: rem(37px);

    padding: rem(10px) rem(12px);

    @media #{$screen-tablet} {
      row-gap: rem(29px);

      padding: rem(10px);
    }
    @media #{$screen-desktop} {
      row-gap: rem(20px);

      padding: rem(25px) rem(20px) rem(20px) rem(20px);
    }
  }
  &__text {
    @include resize-text;
    font-size: rem($font-size-miniature);
    line-height: rem($line-height-mini);
    font-weight: $font-weight-medium;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    height: rem(68px);

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-miniature);

      height: rem(76px);
    }
    @media #{$screen-desktop} {
      font-size: rem($font-size-normal);
      line-height: rem(23px);

      height: rem(92px);
    }
  }
  &__bottom {
    display: flex;
    justify-content: flex-end;

    @media #{$screen-desktop} {
      justify-content: flex-start;
    }
  }
  &__date {
    font-size: rem($font-size-mini);
    line-height: rem($line-height-mini);
    font-weight: $font-weight-medium;

    color: rgba($tiber, 0.35);

    @media #{$screen-desktop} {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-tiny-little);
    }
  }
  &__link {
    @include link-fullscreen;
  }
}
</style>