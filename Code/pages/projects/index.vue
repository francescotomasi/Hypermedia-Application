<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignProjects} from "~/utils";
import type {Project} from "~/model/Project";

const crumbs = breadcrumbs();
crumbs.value = ["/projects"];

let { data: data_projects } = await useFetch("/api/projects");
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
</script>
<template>
  <div class="container">
    <h1 class="header">PROJECTS</h1>
    <div class="title">
      This section outlines our various projects aimed at addressing gender-based violence, trafficking and empowering marginalized groups.
    </div>
    <div v-if="projects.length === 0" class="project-card">No project found</div>
    <div v-else class="project-cards">
      <NuxtLink v-for="project in projects" :key="project.id" class="project-card" :to="'/projects/' + project.id" tabindex="0">
        <h2 class="violet-text">{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <img
          class="project-thumb"
          :src="'/HYP/contents/projects/' + project.id + '.jpg'"
          :alt="'Photo of ' + project.name"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  font-family: 'Futura', sans-serif;
  background-color: #f9f9f9;
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

.project-cards {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.project-card {
  margin: 20px;
  padding: 20px;
  width: 30%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  cursor: pointer;
  gap: 10px;
  text-decoration: none;
  color: black;
}

.project-card:hover, .project-card:focus {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.project-thumb {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.violet-text {
  font-size: 200%;
  color: indigo;
  margin: 0 0 10px;
}


p {
  margin: 0;
  font-size: 100%;
}
</style>


