<template>
  <nav class="breadcrumbs" :class="classes">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.link" class="breadcrumbs__link">{{breadcrumb.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbsComponent',
  props: {
    classes: {
      type: String,
    },
    breadcrumbs: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.breadcrumbs {
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &__item {
    position: relative;

    display: flex;
    align-items: center;

    padding: 0 rem(23px);

    list-style-type: none;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
  &__item:last-child & {
    &__link {
      pointer-events: none;

      color: $slate-gray;
      &:hover {
        text-decoration: none;
      }
      &::after {
        display: none;
      }
    }
  }
  &__item:first-child & {
    &__link {
      &::before {
        display: none;
      }
    }
  }
  &__link {
    font-size: $font-size-tiny;
    line-height: rem(28px);

    display: block;

    text-decoration: none;

    color: $heather;

    @media #{$screen-tablet} {
      font-size: $font-size-small;
      line-height: rem(32px);
    }

    &:hover {
      transition: $transition-duration $transition-function;

      color: $slate-gray;
    }

    &::before,
    &::after {
      position: absolute;
      top: 50%;

      width: rem(6px);
      height: rem(10px);

      transform: translateY(-50%);
      content: '';

      background-image: url('~@/assets/images/icons/arrow-bread.svg');
      background-repeat: no-repeat;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: rem(-6px);
    }
  }
}
</style>