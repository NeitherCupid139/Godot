<template>
  <div class="on">
    <div class="on1">
      <h1>
        <b>{{ title }}</b>
      </h1>
    </div>
    <div class="on2">
      <ul id="ul1">
        <li class="l1" style="background-color: white">
          <RouterLink to="/about1" class="a1 a2"><h3>Contact</h3></RouterLink>
        </li>
        <li class="l1">
          <RouterLink to="/about2" class="a1"
            ><h3>
              <span style="white-space: nowrap">Code of conduct</span>
            </h3></RouterLink
          >
        </li>
        <li class="l1">
          <RouterLink to="/about3" class="a1"><h3>Privary</h3></RouterLink>
        </li>
        <li class="l1">
          <RouterLink to="/about4" class="a1"><h3>Gonvernance</h3></RouterLink>
        </li>
        <li class="l1">
          <RouterLink to="/about5" class="a1"><h3>Teams</h3></RouterLink>
        </li>
        <li class="l1">
          <RouterLink to="/about6" class="a1"><h3>License</h3></RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import router from "../router/router";
let title = ref("");
watch(
  () => router.currentRoute.value.path,
  (val) => {
    if (val === "/about1") {
      title.value = "Contact us";
    } else if (val === "/about2") {
      title.value = "Code of conduct";
    } else if (val === "/about3") {
      title.value = "Privary";
    } else if (val === "/about4") {
      title.value = "Gonvernance";
    } else if (val === "/about5") {
      title.value = "Teams";
    } else if (val === "/about6") {
      title.value = "License";
    }
  }
);
</script>

<style lang="scss" scoped>
.on {
  background-color: hsl(206, 58%, 52%);
  width: 100%px;
  height: 220px;
}
@media (max-width: 960px) {
  #ul1 {
    top: 0px;
    left: 0px;
  }
  .on2 {
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
.on1 {
  margin-top: 70px;
  font-size: larger;
  font-weight: bold;
  width: 300px;
  height: 120px;
  line-height: 120px;
}
.on2 {
  width: 100%;
  height: 81px;
  line-height: 20px;
  position: relative;
  float: right;
  margin-top: 19.5px;
}
.on1 > h1 {
  margin-left: 20px;
  color: white;
}
#ul1 {
  height: 65px;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1000px;
  font-size: medium;
  font-weight: bold;
  list-style: none;
  line-height: 40px;
}
#ul1 > li {
  text-align: center;
  width: 16.5%;
  height: 65px;
  float: left;
}
.a1 {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.806);
}
.a2 {
  color: rgba(25, 25, 142, 0.829);
}
#ul1 > li:hover {
  background-color: rgba(225, 223, 223, 0.174);
}
</style>
