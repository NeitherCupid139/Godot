<template>
  <div class="feature">
    <!-- <img src="../assets/home/innovative.webp" alt="" /> -->
    <img :src="img" alt="" />
    <div class="body">
      <h4>{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Title",
  },
  desc: {
    type: String,
    default: "Description",
  },
  img: {
    type: String,
    default: "/public/language.webp",
  },
});
</script>

<style lang="scss" scoped>
.feature {
  position: relative;
  overflow: hidden;
  transition: transform 200ms ease-in-out;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(51, 63, 103, 0.9);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(117.5%);
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    background-color: #607080;
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: top center;
  }
  .body {
    padding: 24px;
  }
  h4 {
    margin-bottom: 10px;
    color: white;
  }
  p {
    color: lightsteelblue;
  }
}
</style>
