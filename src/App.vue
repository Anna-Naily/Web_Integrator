<template>
  <div class="page">
    <HeaderComponent />
    <router-view />
    <FooterComponent :classes="'page__footer'" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainView from './views/MainView.vue';

export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent, MainView },
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;

  &__footer {
    flex-shrink: 0;
  }
}
</style>