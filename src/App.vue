<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <FooterBar></FooterBar>
</template>
<script setup>
import NavBar from "./components/NavBar.vue";

import FooterBar from "./components/FooterBar.vue";
</script>
<style scoped></style>
