<template>
  <div>
    <form class="search" :class="classes">
      <div class="search__wrapper">
        <div class="search__field">
          <div class="search__input">
            <button class="search__button" type="submit">
              <IconComponent :name="'search'" class="search__icon" />
            </button>
            <input type="search" class="search__control" name="search" placeholder="Найти..." />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import IconComponent from './IconComponent.vue';

export default {
  name: 'SearchComponent',
  components: { IconComponent },
  props: {
    classes: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.search {
  $height-input-small: 40px;

  display: flex;
  flex-direction: column;

  @media #{$screen-tablet} {
    border: none;
  }

  &__input {
    position: relative;

    display: flex;
    align-items: center;
    column-gap: rem(5px);
    flex-direction: row;

    background-color: $white;

    @media #{$screen-tablet} {
      border: rem(1px) solid $athens-gray;
      border-radius: rem($border-radius-medium);
    }
  }
  &__button {
    margin-left: 0;
    padding: 0;

    cursor: pointer;

    border: none;
    background: none;
    color: $slate-gray;

    @media #{$screen-tablet} {
      margin-left: rem(10px);
    }
  }
  &__icon {
    width: rem(24px);
    height: rem(24px);
  }
  &__control {
    font-size: rem($font-size-tiny);
    line-height: rem($line-height-mini);
    font-weight: $font-weight-regular;

    display: block;

    width: 100%;
    height: $height-input-small;
    padding: 0;
    margin: 0;

    color: $color-text;
    background-color: $white;
    box-shadow: none;
    border: none;

    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: rem($font-size-tiny);
      line-height: rem($line-height-mini);
      font-weight: $font-weight-regular;

      color: $heather;
    }
  }
}
</style>