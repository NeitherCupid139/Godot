<template>
  <div
    :style="{
      color: textColor,
      backgroundColor: bgColor,
    }"
    class="d-flex justify-content-center align-items-center"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  textColor: {
    type: String,
    default: "hsla(0, 0%, 100%, 0.95)",
  },
  bgColor: {
    type: String,
    default: "rgb(111 111 111 / 27%)",
  },
});
</script>

<style lang="scss" scoped>
div {
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  display: inline-block;
  padding: 16px 28px;
  font-weight: 800;
  font-size: 18px;
  border-radius: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
div:hover {
  filter: brightness(117.5%);
}
</style>
