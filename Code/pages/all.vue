<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignProjects, assignServices} from "~/utils";
import type {Project} from "~/model/Project";
import type {Service} from "~/model/Service";

const crumbs = breadcrumbs();
crumbs.value = ["/all"];

let {data: data_projects} = await useFetch("/api/projects");
let {data: data_services} = await useFetch("/api/services");

const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
</script>

<template>
    <!-- Section for Projects -->
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div v-if="projects.length === 0" class="project-card">No projects found</div>
      <div v-else class="project-cards">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h3 class="violet-text">
            {{ project.name }}
          </h3>
          <p>{{ project.description }}</p>
          <img
              class="project-thumb"
              :src="'/HYP/contents/projects/' + project.id + '.jpg'"
              :alt="'Photo of ' + project.name"
          />
          <NuxtLink :to="'/projects/' + project.id" class="read-more" tabindex="0">Read more</NuxtLink>
        </div>
      </div>
    </div>
    <!-- Section for Services -->
    <div class="container">
      <h2 class="section-title">Services</h2>
      <div v-if="services.length === 0" class="service-card">No services found</div>
      <div v-else class="service-cards">
        <div v-for="service in services" :key="service.id" class="service-card">
          <h3 class="violet-text">
            {{ service.name }}
          </h3>
          <p>{{ service.description }}</p>
          <img
              class="service-thumb"
              :src="'/HYP/contents/services/' + service.id + '.jpg'"
              :alt="'Photo of ' + service.name"
          />
          <NuxtLink :to="'/services/' + service.id" class="read-more" tabindex="0">Read more</NuxtLink>
        </div>
      </div>
    </div>
</template>


<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Futura', sans-serif;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2rem;
  color: black;
  margin-top: 50px;
  margin-bottom: 25px;
}

.project-cards, .service-cards {
  width: 80%;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 25px;
}

.project-card, .service-card {
  margin: 20px;
  padding: 20px;
  width: calc(40% - 40px);
  min-width: 400px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  gap: 10px;
}

.project-card:hover, .service-card:hover, .project-card:focus, .service-card:focus {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.project-thumb, .service-thumb {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.violet-text {
  font-size: 180%;
  color:rgba(218 112 214) ;
}

h2 {
  margin: 0 0 10px;
}

p {
  margin: 0;
  font-size: 0.875rem;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: var(--header-color);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  border: 2px solid var(--header-color);
}

.read-more:hover, .read-more:focus {
  background-color: rgba(218 112 214);
  border: 2px solid rgba(218 112 214);;
}

</style>