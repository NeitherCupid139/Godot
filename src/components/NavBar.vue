<template>
  <header>
    <div class="container d-flex align-items-center">
      <RouterLink to="/">
        <div class="nav_logo d-flex align-items-center">
          <img
            src="../assets/images/logo_dark.svg"
            alt="logo"
            width="136"
            height="48"
          />
        </div>
      </RouterLink>
      <div class="nav d-flex justify-content-between">
        <ul class="d-flex">
          <RouterLink to="/features"> <li class="">Features</li></RouterLink>

          <RouterLink to="/blog"><li>Blog</li></RouterLink>
          <li>Commnity</li>
          <li>About</li>
          <li>Assets</li>
        </ul>
        <ul class="d-flex align-items-center">
          <li>Download</li>
          <li>Learn</li>
          <li>Contribute</li>
          <li class="fund">❤︎ Donate</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgb(134 144 154 / 15%);
  width: 100%;

  .container {
    max-height: 64px;
    min-height: 60px;
    padding: 0;
    max-width: 1200px;
    .nav_logo {
      height: 64px;
      &:hover {
        background-color: rgb(255 255 255 / 10%);
      }
    }
    .nav {
      width: 100%;
      ul {
        height: 100%;
        list-style: none;
        margin-bottom: 0;
        li {
          height: 100%;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          font-family: "Montserrat", sans-serif;
          color: hsla(200, 00%, 100%, 0.85);
          padding: 1.3175rem 1rem;
          cursor: pointer;
        }
        .fund {
          color: #ef6767;
          background-color: #25282b;
          border-radius: 9px;
          box-shadow: inset 0 0 0 2px #ef6767;
          padding: 13px;
          &:hover {
            background-color: #25282b;
            filter: brightness(117.5%);
          }
        }
      }
    }
  }
}
</style>
