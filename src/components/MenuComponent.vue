<template>
  <div class="menu">
    <ul class="menu__list" :class="classes">
      <li class="menu__item" v-for="menuItem in menu" :key="menuItem.id">
        <a :href="menuItem.link" class="menu--blue">{{ menuItem.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    classes: {
      type: String,
    },
    menu: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  justify-content: center;
  &--blue {
    color: $curious-blue;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: rem(20px);

    @media #{$screen-tablet} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      column-gap: rem(30px);

      border-top: none;
      border-bottom: none;
    }
  }
  &__item {
    font-size: $font-size-tiny;
    line-height: rem(18.2px);
    font-weight: $font-weight-regular;

    list-style-type: none;

    &:hover {
      text-decoration: underline;

      color: $curious-blue;
    }
  }
  &--blue {
    color: $curious-blue;
  }
}
</style>