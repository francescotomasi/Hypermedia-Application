<script setup lang="ts">
import {useRoute} from 'vue-router';

const landmarks = ["About us", "People", "Projects", "Services", "All activities", "Contact us"];

const generateUrl = (name: string) => {
  return '/' + name.toLowerCase().split(" ")[0];
};

const route = useRoute();
const currentPath = route.path;

const isLandmarkActive = (name: string) => {
  return currentPath.includes(generateUrl(name));
};

let displayMenu: boolean = false;

const toggleDisplay = () => {
  displayMenu = !displayMenu;
  console.log(displayMenu);
}

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
}

#landmarks {
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
}

.landmark:hover, .landmark:focus {
  color: white;
  transition: 0.2s;
}

.donate-button {
  font-size: 100%;
  color: white;
  background-color: var(--header-button-color);
  border-radius: 10px;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
}

.donate-button:hover, .donate-button:focus {
  background-color: white;
  color: var(--header-button-color);
  transition: 0.2s;
}
</style>