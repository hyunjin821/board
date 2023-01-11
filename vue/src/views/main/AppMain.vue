<template>
  <div class="appMain">
    <MainHeader class="mainHeader"></MainHeader>
    <MainMenu class="mainMenu"></MainMenu>
    <MainContent class="mainContent"></MainContent>
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader.vue'
import MainMenu from '@/components/main/MainMenu.vue'
import MainContent from '@/components/main/MainContent.vue'

export default {
  name: 'VueMain',
  components: {
    MainHeader,
    MainMenu,
    MainContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .appMain {
    height: 100%;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 75px 1fr;
  }
  .mainHeader {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  .mainMenu {
    grid-column: 1;
    grid-row: 2;
  }
  .mainContent {
    grid-column: 2;
    grid-row: 2;
  }
</style>
