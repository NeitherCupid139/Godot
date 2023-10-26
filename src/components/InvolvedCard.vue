<template>
  <div>
    <img :src="img" alt="" />
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>

    <DefaultButton class="m-auto w-50" text-color="hsl(206, 58%, 50%)"
      >Learn More</DefaultButton
    >
  </div>
</template>

<script setup>
import DefaultButton from "./DefaultButton.vue";
defineProps({
  img: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
div {
  flex: 1;
  padding: 16px;
  text-align: center;
  img {
    width: 250px;
    aspect-ratio: auto 250 / 250;
    height: 250px;
  }
  h4 {
    color: #546b99;
    font-size: 22px;
  }
  p {
    color: #4a5365;
  }
  m-auto {
    margin: 0 auto;
  }
}
</style>
