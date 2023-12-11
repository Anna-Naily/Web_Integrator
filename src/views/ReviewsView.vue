<template>
  <div class="content">
    <section class="content__breadcrumbs">
      <BreadcrumbsComponent :breadcrumbs="breadcrumbs" />
    </section>
    <main class="content__reviews">
      <h3 class="content__h3 content__directions--h3">Отзывы</h3>
      <ul class="content__list">
        <li class="content__item" v-for="review in reviews" :key="review.id">
          <ReviewComponent
            :avatar="review.avatar"
            :name="review.name"
            :text="review.text"
            :date="review.date"
            :logo="review.logo"
            :link="review.link"
          />
        </li>
      </ul>
    </main>
  </div>
</template>
  
  <script>
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import ReviewComponent from '@/components/ReviewComponent.vue';

export default {
  name: 'ReviewsView',
  components: {
    ReviewComponent,
    BreadcrumbsComponent,
  },
  data() {
    return {
      breadcrumbs: [
        {
          link: '/',
          name: 'Главная',
        },
        {
          link: '/review',
          name: 'Отзывы',
        },
      ],
    };
  },
  computed: {
    reviews() {
      return this.$store.getters['getReviews'];
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.content {
  @include content-padding-margin;
  width: 100%;
  flex-grow: 1;

  background-color: $alabaster;

  &__breadcrumbs {
    @include container;
  }
  &__h3 {
    @include main-page-h3;
    margin-top: rem(15px);
    margin-bottom: rem(60px);

    @media #{$screen-tablet} {
      margin-top: rem(15px);
      margin-bottom: rem(60px);
    }
  }
  &__heading {
    margin-bottom: rem(20px);
    @media #{$screen-tablet} {
      margin-bottom: rem(30px);
    }
    @media #{$screen-desktop} {
      margin-bottom: rem(60px);
    }
  }
  &__reviews {
    @include container;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    padding-bottom: rem(60px);

    @media #{$screen-desktop} {
      padding-bottom: rem(100px);
    }
  }
  &__reviews & {
    &__heading {
      padding-top: rem(40px);

      @media #{$screen-tablet} {
        padding-top: rem(50px);
      }
      @media #{$screen-desktop} {
        padding-top: rem(100px);
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      column-gap: rem(20px);
      row-gap: rem(20px);
      align-items: center;

      width: 100%;

      @media #{$screen-tablet} {
        flex-direction: row;
        column-gap: rem(16px);
        justify-content: space-between;
      }
      @media #{$screen-desktop} {
        column-gap: rem(40px);
      }
    }
  }
}
</style>