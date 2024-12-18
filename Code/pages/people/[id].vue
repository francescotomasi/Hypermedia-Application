<script setup lang="ts">
import {useRoute} from 'nuxt/app';
import {breadcrumbs} from "~/composables/breadcrumbs";
import {Person} from "~/model/Person"
import type {Project} from "~/model/Project";
import type {Service} from "~/model/Service";
import {assignPeople, assignProjects, assignServices} from "~/utils";

const id = useRoute().params.id;
const crumbs = breadcrumbs();
const crumb0 = "/people/" + id;
if (crumb0 !== crumbs.value[crumbs.value.length - 1]) {
  crumbs.value.push(crumb0);
}

let {data: data_people} = await useFetch("/api/people");
let {data: data_projects} = await useFetch("/api/projects");
let {data: data_services} = await useFetch("/api/services");

const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
let person: Person;
for (let p of people) {
  if (p.id.toString() === id) {
    person = p;
  }
}

const chefProjects: Project[] = projects.filter(project => person.projects.includes(project.id));
const chefServices: Service[] = services.filter(service => person.services.includes(service.id));

function crumb(bread: string): string {
  let breads: string [] = bread.split(' ');
  if (breads.length > 1) {
    switch (breads[0]) {
      case 'people':
        for (let person of people) {
          if (person.id.toString() === breads[1]) {
            return person.name;
          }
        }
        break;
      case 'projects':
        for (let project of projects) {
          if (project.id.toString() === breads[1]) {
            return project.name;
          }
        }
        break;
      case 'services':
        for (let service of services) {
          if (service.id.toString() === breads[1]) {
            return service.name;
          }
        }
    }
  }
  return bread;
}

</script>

<template>
  <div class="person-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;" tabindex="0">
          {{ crumb(breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumb(crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}</p>
    </div>
    <div id="person">
      <img
          id="person-photo"
          :src="'/HYP/contents/people/' + useRoute().params.id + '.jpg'"
          :alt="'photo of ' + person.name"
      >
      <div id="person-info">
        <h1>{{ person.name }}</h1>
        <div id="person-socials">
          <NuxtLink v-for="key in Object.keys(person.socials)" :to="person.socials.getSocial(key)" external
                    target="_blank" tabindex="0">
            <img
                class="person-socials-icon"
                :src="'/HYP/contents/socials/colored/' + key + '.svg'"
                :alt="'link to ' + key + ' of ' + person.name"
            >
          </NuxtLink>
        </div>
        <p>{{ person.description }}</p>
      </div>
    </div>
    <div id="experiences">
      <div v-for="experience in person.experiences" class="experience">
        <div class="experience-title">
          <h3 style="font-size: 150%; font-weight: bold; margin-right: 10px" tabindex="0">
            {{ experience.title }}
          </h3>
          <span style="font-style: italic; color: gray">
            {{ experience.time }}
          </span>
        </div>
        <span style="font-weight: bold">
          {{ experience.location }}
        </span>
        <span>
          {{ experience.description }}
        </span>
      </div>
    </div>
    <div v-if="chefProjects.length + chefServices.length > 0" class="more">
      <h2 style="margin: 0">MISSIONS/SERVICES IN CHARGE</h2>
      <div id="projects">
        <div v-for="project in chefProjects" class="project-container">
          <NuxtLink class="project-card" :to="'/projects/' + project.id" tabindex="0">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <img
                class="project-img"
                :src="'/HYP/contents/projects/' + project.id + '.jpg'"
                :alt="'photo of ' + project.name"
            >
          </NuxtLink>
        </div>
        <div v-for="service in chefServices" class="project-container">
          <NuxtLink class="project-card" :to="'/services/' + service.id" tabindex="0">
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
            <img
                class="project-img"
                :src="'/HYP/contents/services/' + service.id + '.jpg'"
                :alt="'photo of ' + service.name"
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.person-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Futura", sans-serif;
  font-size: 15pt;
}

.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  padding-block: 20px;
  font-size: 80%;
  color: #999999
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
}

#person {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
}

#person-photo {
  width: 40%;
  min-width: 400px;
  aspect-ratio: 1;
  object-fit: cover;
  margin-left: 70px;
  margin-top: 20px;
}

#person-info {
  width: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 50px;
}

#person-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

}

.person-socials-icon {
  width: 25px;
  height: 25px;
  fill: var(--header-button-color);
}

#experiences {
  font-size: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  margin-right: 30%;
  margin-block: 50px;
  gap: 25px;
}

.experience {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.experience-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.more {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  padding-top: 50px;
}

#projects {
  width: 80%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-block: 25px;
  padding-block: 25px;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.project-container {
  width: 30%;
  min-width: 400px;
  aspect-ratio: 4/5;
}

.project-card {
  margin: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  text-align: center;
  cursor: pointer;
  gap: 10px;
  text-decoration: none;
  color: black;
}

.project-card:hover, .project-card:focus {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
  transition: 0.2s;
}

.project-img {
  width: 100%;
  aspect-ratio: 5/3;
  object-fit: cover;
  border-radius: 10px;
}

</style>