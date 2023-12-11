<template>
  <div class="article" :class="classes">
    <div class="article__wrapper">
      <h2 class="article__heading">{{ titleArticle }}</h2>
      <IconComponent :name="'border-bottom'" :class="'article__border'" />
      <p class="article__text">{{ textArticle }}</p>
      <div class="article__button">
        <ButtonComponent
          :classes="'article__button--leftbar button--in-color'"
          :text="button.text"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';
export default {
  name: 'ArticleComponent',
  components: {
    ButtonComponent,
    IconComponent,
  },
  props: {
    classes: {
      type: String,
    },
    titleArticle: {
      type: String,
    },
    textArticle: {
      type: [String, Number],
    },
    button: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>
  
<style lang="scss">
.article {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media #{$screen-tablet} {
      display: flex;
      align-items: baseline;
    }
  }
  &__heading {
    @include resize-text;
    font-size: rem($font-size-middle);
    line-height: rem($line-height-tiny);
    font-weight: $font-weight-large;

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem(28px);
      line-height: rem(33px);

      width: rem(300px);

      text-align: left;
    }

    @media #{$screen-desktop} {
      font-size: rem(40px);
      line-height: rem(48px);

      width: rem(420px);
    }
  }
  &__border {
    width: rem(150px);
    height: rem(5px);

    margin-top: rem(17px);
    margin-bottom: rem(10px);

    color: $curious-blue;

    @media #{$screen-tablet} {
      width: rem(204px);
      height: rem(8px);

      margin-top: rem(8px);
      margin-bottom: rem(15px);
    }

    @media #{$screen-desktop} {
      width: rem(339.17px);
      height: rem(13px);

      margin-top: rem(18px);
      margin-bottom: rem(36px);
    }
  }
  &__text {
    @include resize-text;
    font-size: rem($font-size-miniature);
    line-height: rem($line-height-mini);
    font-weight: $font-weight-regular;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    margin-bottom: rem(10px);

    text-align: center;

    color: rgba($tiber, 0.8);

    @media #{$screen-tablet} {
      font-size: rem(13px);
      line-height: rem(18px);

      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;

      width: rem(260px);

      margin-bottom: rem(20px);

      text-align: left;
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-small);
      line-height: rem(22px);

      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;

      width: rem(420px);

      margin-bottom: rem(50px);
    }
  }
  &__button {
    &--leftbar {
      padding: rem(8px) rem(32px);
      @media #{$screen-tablet} {
        font-size: rem($font-size-miniature);
        line-height: rem(14px);

        padding: rem(8px) rem(24px);
      }
      @media #{$screen-desktop} {
        font-size: rem($font-size-normal);
        line-height: rem($line-height-tiny-little);

        padding: rem(12px) rem(36px);
      }
    }
  }
}
</style>