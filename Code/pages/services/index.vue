<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignServices} from "~/utils";
import type {Service} from "~/model/Service";

const crumbs = breadcrumbs();
crumbs.value = ["/services"];

let {data: data_services} = await useFetch("/api/services");
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
</script>

<template>
  <div class="container">
    <h1 class="header">SERVICES</h1>
    <div class="title">
      This section outlines our various services aimed at addressing gender-based violence, trafficking and empowering
      marginalized groups.
    </div>
    <div v-if="services.length === 0" class="service-card">No service found</div>
    <div v-else class="service-cards">
      <NuxtLink v-for="(service, index) in services" class="service-card"
                :class="{ 'bg-lavender': index % 2 === 0, 'bg-white': index % 2 !== 0, 'reverse': index % 2 !== 0 }"
                :to="'/services/' + service.id"
                tabindex="0">
        <div class="service-content">
          <img
              class="service-thumb"
              :src="'/HYP/contents/services/' + service.id + '.jpg'"
              :alt="'Photo of ' + service.name"
          />
          <div class="service-info" :style="'text-align: ' + (index % 2 === 0 ? 'right' : 'left')">
            <h2 class="service-name">{{ service.name }}</h2>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-block: 50px;
  font-family: "Futura", sans-serif;
}

.header {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: indigo;
}

.title {
  font-size: 1.5rem;
  width: 80%;
  margin-bottom: 50px;
  color: black;
}

.service-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card {
  margin: 20px;
  padding: 20px;
  width: 80%;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

.service-card:hover, .service-card:focus {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.service-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px;
}

.service-thumb {
  width: 600px;
  max-width: 50%;
  aspect-ratio: 3/2;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 10px;
}

.reverse .service-content {
  flex-direction: row-reverse;
}

.reverse .service-thumb {
  margin-left: 20px;
  margin-right: 0;
}

.service-info {
  flex: 1;
}

.service-name {
  font-size: 180%;
  color: indigo;
  text-decoration: none;
}

.service-description {
  font-size: 100%;
  color: black;
  text-decoration: none;
}

.bg-lavender {
  background-color: #e6e6fa;
}

.bg-white {
  background-color: #ffffff;
}
</style>
