<template>
  <div class="social" :class="classes">
    <ul class="social__list social__list--border">
      <li class="social__item" v-for="icon in socialIcons" :key="icon.id">
        <a :href="icon.link" class="social__icon">
          <IconComponent :name="icon.name" class="social__icon-pic" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconComponent from './IconComponent.vue';

export default {
  name: 'SocialComponent',
  components: { IconComponent },
  props: {
    classes: {
      type: String,
    },
    socialIcons: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.social {
  &__list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: rem(23px);

    @media #{$screen-tablet} {
      display: flex;
      justify-content: space-between;
    }
  }
  &__item {
    list-style-type: none;
  }
  &__icon-pic {
    width: rem(40px);
    height: rem(40px);

    transition: 0.3s;

    color: $heather;

    &:hover {
      color: $slate-gray;
    }
  }
}
</style>