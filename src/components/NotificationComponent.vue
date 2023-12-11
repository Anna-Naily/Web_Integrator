<template>
  <div class="notification" :class="small ? 'notification--invert' : ''">
    <div class="notification__img" :class="small ? 'notification__img--right' : ''">
      <img
        class="notification__img-pic"
        :class="small ? 'notification__img-pic--digital' : 'notification__img-pic--tg'"
        :src="require(`../assets/images/${pic}`)"
        alt
      />
    </div>
    <div class="notification__content" :class="small ? 'notification__content--left' : ''">
      <div class="notification__header">
        <h3 class="notification__header-h3">{{ title }}</h3>
        <IconComponent
          :name="borderName"
          :class="small ? 'notification__border notification__border--margin notification__border--red' : 'notification__border'"
        />
      </div>
      <span
        class="notification__heading"
        :class="small ? '' : 'notification__heading--invisible'"
      >{{ heading }}</span>
      <div class="notification__information">
        <p class="notification__information-text">{{ textOne }}</p>
        <p
          class="notification__information-text notification__information-text--second"
          v-if="textTwo.length > 0"
        >{{ textTwo }}</p>
      </div>
      <div class="notification__buttons">
        <ButtonComponent :classes="'button--in-color'">{{ buttonOne }}</ButtonComponent>
        <ButtonComponent :background="false" v-if="small" :classes="'button--button-only-border'">
          <template v-slot:without-background>{{ buttonTwo }}</template>
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';
export default {
  components: { IconComponent, ButtonComponent },
  name: 'NotificationComponent',
  props: {
    classes: {
      type: String,
    },
    title: {
      type: String,
    },
    heading: {
      type: String,
    },
    pic: {
      type: String,
    },
    textOne: {
      type: String,
    },
    textTwo: {
      type: String,
    },
    buttonOne: {
      type: String,
    },
    buttonTwo: {
      type: String,
    },
    borderName: {
      type: String,
    },
    small: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.notification {
  display: flex;
  flex-direction: column;
  @media #{$screen-tablet} {
    flex-direction: row;
  }
  &--invert {
    @media #{$screen-tablet} {
      justify-content: space-between;
    }
  }

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: rem(197px);

    order: 1;

    border-radius: rem(24px) rem(24px) 0 0;
    background-color: $link-water;

    @media #{$screen-tablet} {
      width: rem(280px);
      height: auto;

      border-radius: rem(24px) 0 0 rem(24px);
    }

    @media #{$screen-desktop} {
      width: rem(480px);
    }

    &--right {
      @media #{$screen-tablet} {
        order: 2;

        border-radius: 0 rem(24px) rem(24px) 0;
      }
    }
    &-pic {
      &--tg {
        width: rem(156.27px);
        height: rem(153px);
        @media #{$screen-tablet} {
          width: rem(242.32px);
          height: rem(233px);
        }

        @media #{$screen-desktop} {
          width: rem(400px);
          height: rem(402px);
        }
      }
      &--digital {
        width: rem(153.34px);
        height: rem(123.93px);
        @media #{$screen-tablet} {
          width: rem(215.04px);
          height: rem(192px);
        }

        @media #{$screen-desktop} {
          width: rem(348px);
          height: rem(348px);
        }
      }
    }
  }
  &__border {
    @include border-h3;

    margin-bottom: rem(9px);

    color: $curious-blue;

    @media #{$screen-tablet} {
      width: rem(148.72px);
      height: rem(6px);

      margin-bottom: rem(20px);
    }

    @media #{$screen-desktop} {
      width: rem(262px);
      height: rem(11px);

      margin-bottom: rem(30px);
    }

    &--margin {
      @media #{$screen-tablet} {
        margin-bottom: rem(15px);
      }
    }
    &--red {
      color: $cerise-red;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;

    padding: rem(16px) rem(9.77px) rem(22px) rem(9.77px);

    @media #{$screen-tablet} {
      align-items: baseline;

      padding: rem(30px) rem(20.8px) rem(31px) rem(31.2px);
    }

    @media #{$screen-desktop} {
      padding: rem(60px) rem(80px) rem(73px) rem(80px);
    }
    &--left {
      @media #{$screen-tablet} {
        padding-left: rem(30px);
        padding-right: rem(40px);
      }

      @media #{$screen-desktop} {
        padding-left: rem(60px);
        padding-right: rem(100px);
      }
    }
  }
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-h3 {
      @include main-page-h3;

      text-align: center;
    }
    @media #{$screen-tablet} {
      align-items: baseline;
    }
  }
  &__heading {
    font-size: rem($font-size-tiny);
    line-height: rem($line-height-miniature);
    font-weight: $font-weight-medium;

    margin-top: rem(4px);
    margin-bottom: rem(9px);

    color: $tiber;

    @media #{$screen-tablet} {
      font-size: rem($font-size-normal);
      line-height: rem($line-height-tiny);

      margin-top: 0;
      margin-bottom: rem(15px);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-medium);
      line-height: rem(33.12px);

      margin-bottom: rem(21px);
    }

    &--invisible {
      display: none;
      @media #{$screen-tablet} {
        display: block;
      }
    }
  }
  &__information {
    display: flex;
    flex-direction: column;

    margin-bottom: rem(20px);

    @media #{$screen-desktop} {
      margin-bottom: rem(40px);
    }

    &-text {
      @include resize-text;
      font-size: rem($font-size-mini);
      line-height: rem(15.18px);
      font-weight: $font-weight-regular;

      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;

      color: $tiber;
      @media #{$screen-tablet} {
        font-size: rem($font-size-miniature);
        line-height: rem($line-height-mini);

        width: rem(395.2px);

        -webkit-line-clamp: 5;
      }

      @media #{$screen-desktop} {
        font-size: rem($font-size-small);
        line-height: rem($line-height-tiny);

        width: rem(600px);

        -webkit-line-clamp: 4;
      }
      &--second {
        margin-top: rem(9px);
      }
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-around;
    column-gap: rem(27px);
    @media #{$screen-tablet} {
      justify-content: flex-start;
      column-gap: rem(30px);
    }
  }
}
</style>