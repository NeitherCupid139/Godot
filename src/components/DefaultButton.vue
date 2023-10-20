<template>
  <div class="d-flex"><slot></slot></div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  background-color: rgb(111 111 111 / 27%);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  color: hsla(0, 0%, 100%, 0.95);
  display: inline-block;
  padding: 16px 16px 16px 16px;
  font-weight: 800;
  font-size: 18px;
  border-radius: 0;
}
div:hover {
  filter: brightness(117.5%);
}
</style>
