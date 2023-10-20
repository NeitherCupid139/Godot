<template>
  <div class="d-flex btn-dl">
    <div
      :style="{
        background: defaultColor ? '#fff' : '#333639',
        color: defaultColor ? '#263256' : '#fff',
      }"
      class="download-title d-flex"
    >
      <slot></slot>
    </div>
    <div
      :style="{
        background: defaultColor ? '#4d9fdc' : '#1f3c5e',
      }"
      class="download-hint d-flex"
    >
      {{ hint }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  hint: {
    type: String,
    default: "1.0.0",
  },
  defaultColor: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  font-weight: bold;
}

.btn-dl:hover {
  filter: brightness(117.5%);
}
.download-title {
  display: inline-block;
  padding: 16px 32px 16px 32px;
  font-weight: bold;
  font-size: 18px;
  flex-grow: 1;
}
.download-hint {
  display: inline-block;
  padding: 16px 16px 16px 16px;
  min-width: 48px;
  color: #fff;
  font-weight: bold;
}
</style>
