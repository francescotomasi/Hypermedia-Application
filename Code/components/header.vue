<script setup lang="ts">
import {useRoute} from 'vue-router';

const landmarks = ["About us", "People", "Projects", "Services", "All activities", "Contact us"];

const generateUrl = (name: string) => {
  return '/' + name.toLowerCase().split(" ")[0];
};

const route = useRoute();
const currentPath = route.path.split("/")[1];

const isLandmarkActive = (name: string) => {
  return generateUrl(name) === currentPath;
};
</script>

<template>
  <div class="container-header">
    <NuxtLink to="/" id="logo-link" class="landmark" tabindex="0">
      <img
          id="logo"
          :src="'/HYP/contents/logo.svg'"
          alt="Logo"
      />
    </NuxtLink>
    <div id="landmarks">
      <NuxtLink
          v-for="l in landmarks"
          :key="l"
          :to="generateUrl(l)"
          class="landmark"
          :class="{ 'active': isLandmarkActive(l) }"
          tabindex="0"
      >
        {{ l }}
      </NuxtLink>
      <NuxtLink id="donation" to="/donate" class="donate-button" tabindex="0">
        DONATE
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container-header {
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  background-color: var(--header-color);
  font-family: "Futura", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

#logo {
  height: 40px;
  margin: 10px;
  transition: filter 0.2s;
}

#logo-link:hover #logo,
#logo-link:focus #logo,
#logo-link.active #logo {
  filter: brightness(0) invert(1);
  transition: 0.2s;
}

#landmarks {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  gap: 20px;
  font-size: 15pt;
  font-weight: bold;
}

.landmark {
  font-size: 100%;
  color: black;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.landmark:hover, .landmark:focus {
  color: white;
}

.active {
  color: white;
}

.donate-button {
  font-size: 100%;
  color: white;
  background-color: var(--header-button-color);
  border-radius: 10px;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
}

.donate-button:hover, .donate-button:focus {
  background-color: white;
  color: var(--header-button-color);
   
}
</style>
