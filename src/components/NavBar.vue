<template>
  <!-- 导航栏 -->
  <nav
    :class="[
      'navbar',
      'navbar-expand-xl',
      bgCol ? 'bg-body-tertiary' : 'bg-body-white',
    ]"
  >
    <div
      class="container-fluid"
      :style="
        logoDisplay ? 'background-color: transparent' : 'white !important'
      "
    >
      <!-- logo图标 -->
      <RouterLink to="/" class="navbar-brand">
        <img
          v-show="!logoDisplay"
          :src="bgCol ? '/home/logo_dark.svg' : '/home/logo.svg'"
          width="136"
          height="48"
          alt="" />
        <img
          v-show="logoDisplay"
          src="/home/logo.svg"
          width="136"
          height="48"
          alt=""
      /></RouterLink>
      <!-- 导航栏按钮 -->
      <button
        @click="
          logoDisplay = !logoDisplay;
          changeIcon();
        "
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          :style="{ filter: logoDisplay ? 'invert(0)' : 'invert(1)' }"
          class="navbar-toggler-icon"
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/features" class="nav-link" aria-current="page"
              >Features</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/community" class="nav-link">Community</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link">Assets</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Download</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Learn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contribute</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fund">❤︎ Donate</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/router";
let logoDisplay = ref(false);
let bgCol = ref(true);

// 监听路由变化
watch(
  () => router.currentRoute.value.path,
  (val) => {
    if (val === "/" || val === "/features") {
      bgCol.value = true;
    } else {
      bgCol.value = false;
    }
  }
);
</script>

<style lang="scss" scoped>
.bg-body-tertiary {
  background-color: transparent !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.bg-body-white {
  background-color: white !important;
}
.navbar-toggler {
  border: none !important;
  height: 58px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    filter: brightness(117.5%);
    background-color: hsla(0, 0%, 50%, 0.1);
  }
}

.navbar-toggler-icon {
  background-image: url(/hamburger.svg);
}

.navbar {
  padding: 0;
  margin-bottom: -70px;
  z-index: 2;
  .container-fluid {
    padding: 0;
    .navbar-brand {
      margin-left: 20px;
      &:hover {
        filter: brightness(117.5%);
        background-color: hsla(0, 0%, 50%, 0.1);
      }
    }
    .nav-item {
      padding: 10px 16px;
      &:hover {
        filter: brightness(117.5%);
        background-color: hsla(0, 0%, 50%, 0.1);
      }
      .nav-link {
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 1200px) {
  #navbarNav {
    background-color: white;
  }
  .nav-link {
    color: #333f67;
  }

  .navbar-nav:last-child .nav-item:last-child {
    &:hover {
      background-color: white;
    }
  }
}

@media (min-width: 1200px) {
  //背景色

  .navbar {
    padding: 0;
    margin-bottom: -70px;
    z-index: 2;
    .container-fluid {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      max-width: 1200px;
      //导航栏左右两边的空白
      .brand {
        margin-right: 36px;
      }
      //logo
      #navbarNav {
        display: flex;
        justify-content: space-between;
        .navbar-nav:last-child .nav-item:last-child {
          background-color: transparent !important;
        }
        .nav-item {
          display: flex;
          align-items: center;
          height: 60px;

          box-sizing: border-box;
          padding: 0 10px;
          //a标签
          .nav-link {
            color: v-bind("(bgCol) ? " #fff " : " #333f67 "");
          }
          //捐赠按钮
          .fund {
            color: #ef6767;
            background-color: #eff1f5;
            border-radius: 9px;
            box-shadow: inset 0 0 0 2px #ef6767;
            padding: 13px;
          }
        }
      }
    }
  }
}
</style>
