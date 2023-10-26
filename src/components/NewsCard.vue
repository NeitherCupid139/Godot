<template>
  <article
    :style="{
      gridTemplateColumns: responsive ? '160px 1fr ' : '',
    }"
  >
    <div class="left"></div>
    <div class="right">
      <h3>{{ title }}</h3>
      <p>
        {{ desc }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  responsive: {
    type: Boolean,
    default: true,
  },
  img: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "title",
  },
  desc: {
    type: String,
    default: "desc",
  },
});
</script>

<style lang="scss">
article {
  display: grid;
  gap: 20px;
  .left {
    background-image: url("../assets/images/release-candidate-godot-4-1-2-rc-1.webp");
    aspect-ratio: 16 / 9;
    border-radius: 7px;
    background-position: center;
    background-size: cover;
    background-color: #333639;
    box-shadow: 0 5px 10px -3px #00000078;
    &:hover {
      filter: brightness(117.5%);
    }
  }
  .right {
    h3 {
      margin-bottom: 10px;
      font: {
        weight: 800;
        size: 22px;
        // family: "Roboto";
      }
      color: #546b99;
      margin-top: 0px;
    }
    p {
      color: #4a5365;
      font-size: 16px;
      opacity: 0.8;
      margin-top: 0;
      text-rendering: optimizeLegibility;
      line-height: 1.5;
    }
  }
}
</style>
