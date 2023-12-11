<template>
  <main class="content">
    <section class="content__section content__section--top">
      <div class="content__banner">
        <div class="content__banner--leftbar">
          <ArticleComponent
            :titleArticle="titleArticle"
            :textArticle="textArticle"
            :button="button"
          />
        </div>
        <div class="content__banner--rightbar">
          <BannerComponent :bannerImg="bannerImg" />
        </div>
      </div>
    </section>
    <section class="content__section content__notifications">
      <ul class="content__notifications-list">
        <li
          class="content__notifications-item"
          v-for="notificationCard in notificationCards"
          :key="notificationCard.id"
        >
          <NotificationComponent
            :title="notificationCard.title"
            :heading="notificationCard.heading"
            :pic="notificationCard.pic"
            :textOne="notificationCard.textOne"
            :textTwo="notificationCard.textTwo"
            :buttonOne="notificationCard.buttonOne"
            :buttonTwo="notificationCard.buttonTwo"
            :borderName="notificationCard.borderName"
            :small="notificationCard.small"
          />
        </li>
      </ul>
    </section>
    <section class="content__section">
      <div class="content__directions">
        <div class="content__directions-content">
          <div class="content__heading">
            <h3 class="content__h3 content__directions--h3">Направления</h3>
            <IconComponent :name="'border-bottom'" :class="'content__border content__border--red'" />
          </div>
          <ul class="content__list">
            <li class="content__item" v-for="direction in directions" :key="direction.id">
              <DirectionComponent :direction="direction" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="content__section content__section--reviews">
      <div class="content__reviews">
        <div class="content__heading">
          <h3 class="content__h3 content__directions--h3">Отзывы</h3>
          <IconComponent :name="'border-bottom'" :class="'content__border'" />
        </div>

        <ButtonComponent :text="button.textSeeAll" :class="'button--only-text content--order'">
          <template v-slot:iconRight>
            <router-link :class="'content__link'" to="/review"></router-link>
            <IconComponent :name="'watch-more'" :class="'button__icon'" />
          </template>
        </ButtonComponent>

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
      </div>
    </section>
    <section class="content__section content__section--articles">
      <div class="content__articles">
        <div class="content__heading">
          <h3 class="content__h3 content__directions--h3">Статьи и новости</h3>
          <IconComponent :name="'border-bottom'" :class="'content__border'" />
        </div>

        <ButtonComponent :text="button.textSeeAll" :class="'button--only-text content--order'">
          <template v-slot:iconRight>
            <router-link :class="'content__link'" to="/article"></router-link>
            <IconComponent :name="'watch-more'" :class="'button__icon'" />
          </template>
        </ButtonComponent>

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
      </div>
    </section>
  </main>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';
import IconComponent from '@/components/IconComponent.vue';
import DirectionComponent from '@/components/DirectionComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ReviewComponent from '@/components/ReviewComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';

export default {
  components: {
    ArticleComponent,
    BannerComponent,
    NotificationComponent,
    IconComponent,
    DirectionComponent,
    ButtonComponent,
    ReviewComponent,
    CardComponent,
    TabsComponent,
  },
  name: 'MainView',
  data() {
    return {
      titleArticle: 'Web-интегратор  Зачем он мне?',
      textArticle:
        'Веб-интеграция является ключевым элементом для любого бизнеса, стремящегося к успеху в современном мире. Веб-интеграторы могут помочь предприятиям улучшить свои операционные процессы и повысить эффективность работы.',
      bannerImg: 'banner.png',
      button: {
        text: 'Перейти',
        textSeeAll: 'Посмотреть все',
      },
      notificationCards: [
        {
          id: 0,
          title: 'Читайте нас в Telegram',
          heading: 'Уважаемые клиенты и партнеры!',
          pic: 'notification-circle.png',
          textOne:
            'Рады сообщить вам о нашем новом решении для веб-интеграции, которое позволит значительно улучшить работу вашего бизнеса. Наше инновационное решение основано на передовых технологиях и обеспечивает высокую скорость работы, надежность и безопасность данных.',
          textTwo:
            'Мы постоянно работаем над улучшением наших решений, чтобы обеспечить максимальную эффективность и удобство для наших клиентов. Благодарим вас за доверие и выбор нашей компании в качестве партнера для вашего бизнеса!',
          buttonOne: 'Подробнее',
          buttonTwo: '',
          borderName: 'border-bottom',
          small: false,
        },
        {
          id: 1,
          title: 'Digital Workplace',
          heading: 'Важное уведомление',
          pic: 'notification-people.png',
          textOne:
            'Установите веб-приложения: Установите необходимые веб-приложения на корпоративном сервере или в облаке. Это могут быть приложения для работы с документами, календарями, почтой и другими задачами.',
          textTwo: '',
          buttonOne: 'Начать',
          buttonTwo: 'Инструкция',
          borderName: 'border-bottom',
          small: true,
        },
      ],
    };
  },
  computed: {
    directions() {
      return this.$store.getters['getDirections'];
    },
    cards() {
      return this.$store.getters['getCards'];
    },
    reviews() {
      return this.$store.getters['getReviews'];
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

<style lang="scss">
.content {
  @include content-padding-margin;
  flex-grow: 1;

  width: 100%;

  background-color: $polar;
  &--order {
    position: relative;

    order: 2;

    margin-top: rem(20px);

    @media #{$screen-tablet} {
      order: 0;

      margin-top: 0;
    }
  }

  &__section {
    &--top {
      margin-top: rem(-50px);

      background-color: $white;
    }
    &--reviews {
      margin-top: rem(60px);

      background-color: $link-water;
      @media #{$screen-tablet} {
        margin-top: 0;
      }
      @media #{$screen-desktop} {
        margin-top: rem(87px);
      }
    }
  }
  &__h3 {
    @include main-page-h3;
  }
  &__border {
    @include border-h3;
    color: $curious-blue;
    &--red {
      color: $cerise-red;
    }
  }
  &__heading {
    padding-top: rem(40px);
    margin-bottom: rem(20px);
    @media #{$screen-tablet} {
      padding-top: rem(50px);
      margin-bottom: rem(30px);
    }
    @media #{$screen-desktop} {
      padding-top: rem(100px);
      margin-bottom: rem(60px);
    }
  }
  &__banner {
    display: flex;
    flex-direction: column-reverse;

    max-width: rem(1440px);
    margin-right: auto;
    margin-left: auto;

    box-shadow: rem(0px) rem(4px) rem(12px) rem(0px) rgba(0, 0, 0, 0.1);

    @media #{$screen-tablet} {
      flex-direction: row;

      height: rem(358px);

      box-shadow: none;
    }
    @media #{$screen-desktop} {
      height: rem(604px);
    }
    &--leftbar {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-top: rem(18px);
      padding-bottom: rem(36px);
      padding-right: rem($gap-container);
      padding-left: rem($gap-container);

      @media #{$screen-tablet} {
        padding-left: rem(34px);
        padding-top: rem(30px);
        padding-bottom: rem(71px);

        box-shadow: none;
      }
      @media #{$screen-desktop} {
        padding-left: rem(100px);
        padding-top: rem(90px);
        padding-bottom: rem(146px);
      }
      padding-top: rem(18px);
      padding-bottom: rem(36px);
    }
    &--rightbar {
      display: flex;
      justify-content: center;

      @media #{$screen-tablet} {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  &__notifications {
    width: 100%;
    padding: rem(40px) 0 rem(60px) 0;
    @media #{$screen-tablet} {
      padding-top: rem(50px);
    }
    @media #{$screen-desktop} {
      padding: rem(90px) 0 rem(100px) 0;
    }
    &-list {
      @include container;
      display: flex;
      flex-direction: column;
      row-gap: rem(20px);

      @media #{$screen-tablet} {
        row-gap: rem(30px);
      }
      @media #{$screen-desktop} {
        row-gap: rem(50px);
      }
    }
    &-item {
      border-radius: rem($border-radius-big);
      box-shadow: $box-shadow-final-item;
      background-color: $white;
    }
  }
  &__directions {
    background-color: $white;
    &-content {
      @include container;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media #{$screen-tablet} {
        align-items: baseline;

        padding-bottom: rem(60px);
      }
      @media #{$screen-desktop} {
        padding-bottom: rem(99px);
      }
    }
  }
  &__directions & {
    &__list {
      display: flex;
      flex-wrap: wrap;
      row-gap: rem(20px);
      justify-content: center;

      width: 100%;

      @media #{$screen-tablet} {
        justify-content: space-between;
        row-gap: rem(30px);
      }
      @media #{$screen-desktop} {
        row-gap: rem(32px);
      }
    }
    &__item {
      @media #{$screen-tablet} {
        height: rem(128px);
      }
      @media #{$screen-desktop} {
        height: rem(160px);
      }
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
      display: flex;
      flex-direction: column;

      align-items: center;

      margin-left: auto;
      margin-right: auto;

      @media #{$screen-tablet} {
        align-items: baseline;

        margin-left: 0;
        margin-right: 0;
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
  &__articles {
    @include container;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    &-wrapper {
      display: flex;
      flex-direction: column;

      width: 100%;
    }
  }
  &__articles & {
    &__heading {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-left: auto;
      margin-right: auto;

      @media #{$screen-tablet} {
        align-items: baseline;

        margin-left: 0;
        margin-right: 0;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      row-gap: rem(13px);
      column-gap: rem(13px);
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
  &__link {
    @include link-fullscreen;
  }
}
</style>