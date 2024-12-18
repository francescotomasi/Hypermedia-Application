<script setup lang="ts">
import Header from "~/components/header.vue"
import {breadcrumbs} from "~/composables/breadcrumbs";
import {useRoute} from "nuxt/app";
import {Person} from "~/model/Person";
import {assignPeople, assignProjects, assignServices} from "~/utils";
import type {Project} from "~/model/Project";
import type {Service} from "~/model/Service";

const id = useRoute().params.id;
const crumbs = breadcrumbs();
const crumb0 = "/projects/" + id;
if (crumb0 !== crumbs.value[crumbs.value.length - 1]) {
  crumbs.value.push(crumb0);
}

let {data: data_people} = await useFetch("/api/people");
let {data: data_projects} = await useFetch("/api/projects");
let {data: data_services} = await useFetch("/api/services");

const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
let project: Project;
for (let p of projects) {
  if (p.id.toString() === id) {
    project = p;
  }
}
let leader: Person;
for (let p of people) {
  if (p.id === project!.leader) {
    leader = p;
  }
}

const bgImageStyle = `background-image: url('/HYP/contents/projects/${id}.jpg');')`;

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

function shuffle(): any[] {
  let project3;
  if (projects.length < 4) {
    project3 = projects;
  } else {
    let index = Array.from({length: projects.length}, (_, index) => index);
    for (let i = index.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [index[i], index[j]] = [index[j], index[i]];
    }
    project3 = [projects[index[0]], projects[index[1]], projects[index[2]], projects[index[3]]];
  }
  for (let index in project3) {
    if (project3[index].id.toString() === project.id.toString()) {
      project3.splice(parseInt(index, 10), 1);
    }
  }
  return project3.slice(0, 3);
}
</script>

<template>
  <Header/>
  <div class="project-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;" tabindex="0">
          {{ crumb(breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumb(crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}</p>
    </div>
    <div id="project" :style="bgImageStyle">
      <div id="project-texts">
        <h1 style="color: var(--header-button-color)">{{ project.name }}</h1>
        <h2 style="font-size: 80%; text-align: right">{{ project.description }}</h2>
      </div>
    </div>
    <div id="leader">
      <div id="leader-left">
        <img
            id="leader-image"
            :src="'/HYP/contents/people/' + project.leader + '.jpg'"
            :alt="'photo of the leader of project ' + project.name + ', ' + leader.name"
        >
        <h2 style="text-align: center">{{ leader.name }}</h2>
        <NuxtLink :to="'/people/' + project.leader" class="read-more" tabindex="0">Read more</NuxtLink>
      </div>
      <p style="width: 70%; min-width: 400px">{{ project.longDes }}</p>
    </div>
    <div id="more">
      <h2 style="color: var(--header-button-color); text-decoration: none">MORE PROJECTS</h2>
      <div id="projects">
        <NuxtLink v-for="project in shuffle()" :key="project.id" class="project-card" :to="'/projects/' + project.id"
                  tabindex="0">
          <h3 class="violet-text">
            {{ project.name }}
          </h3>
          <p>{{ project.description }}</p>
          <img
              class="project-thumb"
              :src="'/HYP/contents/projects/' + project.id + '.jpg'"
              :alt="'Photo of ' + project.name"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Futura", sans-serif;
  font-size: 15pt;
  overflow-x: hidden;
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

#project {
  width: 100%;
  aspect-ratio: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-size: cover;
  padding-right: 5%;
}

#project-texts {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 25pt;
  font-weight: bold;
  color: white;
}

#leader {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-block: 50px;
}

#leader-left {
  width: 20%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#leader-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #8e44ad;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  border: 2px solid #8e44ad;
}

#more {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  padding-top: 40px;
}

#projects {
  width: 80vw;
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 25px;
  padding: 25px;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.project-card {
  width: 30%;
  min-width: 400px;
  aspect-ratio: 1;
  margin: 20px;
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
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}

.violet-text {
  font-size: 180%;
  color: var(--header-color);
  margin: 0 0 10px;
  text-decoration: none;
}

.project-thumb {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
</style>