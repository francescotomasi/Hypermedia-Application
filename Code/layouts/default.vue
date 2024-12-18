<script setup lang="ts">
import Header from "~/components/header.vue"
import Footer from "~/components/footer.vue";
import HeaderMobile from "~/components/header-mobile.vue";
import FooterMobile from "~/components/footer-mobile.vue";

let width = 2000;
if (import.meta.browser) {
  console.log(window.innerWidth);
  width = window.innerWidth;
}
</script>

<template>
  <div v-if="width > 1210">
    <Header/>
    <div id="max-container">
      <slot/>
      <Footer style="max-height: 10vh; min-height: 100px"/>
    </div>
  </div>
  <div v-else-if="width > 1000">
    <Header/>
    <div id="max-container">
      <slot/>
      <FooterMobile/>
    </div>
  </div>
  <div v-else>
    <HeaderMobile/>
    <div id="max-container">
      <slot/>
      <FooterMobile/>
    </div>
  </div>
</template>

<style scoped>
#max-container {
  margin-top: 10vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>