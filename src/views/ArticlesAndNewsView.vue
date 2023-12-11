<template>
  <div class="content">
    <section class="content__breadcrumbs">
      <BreadcrumbsComponent :breadcrumbs="breadcrumbs" />
    </section>
    <main class="content__articles">
      <h3 class="content__h3 content__directions--h3">Статьи и новости</h3>

      <div class="content__articles-wrapper">
        <div class="content__tabs">
          <TabsComponent :tab="tabs" />
        </div>
        <ul class="content__list" v-if="tabs == 'article'">
          <li class="content__item" v-for="card in cards" :key="card.id">
            <CardComponent :pic="card.pic" :text="card.text" :date="card.date" :link="card.link" />
          </li>
        </ul>
        <ul class="content__list" v-else-if="tabs == 'news'">
          <li class="content__item" v-for="newsItem in news" :key="newsItem.id">
            <CardComponent
              :pic="newsItem.pic"
              :text="newsItem.text"
              :date="newsItem.date"
              :link="newsItem.link"
            />
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';

export default {
  name: 'ArticlesAndNewsView',
  components: {
    CardComponent,
    TabsComponent,
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
          link: '/article',
          name: 'Статьи и новости',
        },
      ],
    };
  },
  computed: {
    cards() {
      return this.$store.getters['getCards'];
    },

    news() {
      return this.$store.getters['getNews'];
    },
    tabs() {
      return this.$store.getters['getTab'];
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
  &__articles {
    @include container;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    @media #{$screen-tablet} {
    }
    @media #{$screen-desktop} {
    }
    &-wrapper {
      display: flex;
      flex-direction: column;

      width: 100%;
    }
  }
  &__articles & {
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
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      row-gap: rem(13px);

      width: 100%;

      @media #{$screen-tablet} {
        column-gap: rem(20px);
      }
      @media #{$screen-desktop} {
        column-gap: rem(35px);
      }
    }
    &__item {
      width: rem(161px);
      height: rem(288px);

      @media #{$screen-tablet} {
        width: rem(160px);
      }
      @media #{$screen-desktop} {
        width: rem(280px);
        height: rem(434px);
      }
    }
  }
  &__tabs {
    width: 100%;
    margin-bottom: rem(20px);

    @media #{$screen-desktop} {
      margin-bottom: rem(30px);
    }
  }
}
</style>