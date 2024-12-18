<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {useRoute} from "nuxt/app";
import type {Service} from "~/model/Service";
import {Person} from "~/model/Person";
import {assignPeople, assignProjects, assignServices} from "~/utils";
import type {Project} from "~/model/Project";

const id = useRoute().params.id;
const crumbs = breadcrumbs();
const crumb0 = "/services/" + id;
if (crumb0 !== crumbs.value[crumbs.value.length - 1]) {
  crumbs.value.push(crumb0);
}

let {data: data_people} = await useFetch("/api/people");
let {data: data_projects} = await useFetch("/api/projects");
let {data: data_services} = await useFetch("/api/services");
let {data: data_testimonials} = await useFetch("/api/testimonials");

const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
const projects: Project[] = assignProjects(JSON.parse(data_projects.value!.projects));
const services: Service[] = assignServices(JSON.parse(data_services.value!.services));
const testimonials: { [key: number]: string } = JSON.parse(data_testimonials.value!.people);
let service: Service;
for (let s of services) {
  if (s.id.toString() === id) {
    service = s;
  }
}

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

function getPersonName(id: number) {
  if (id < 100) {
    for (let person of people) {
      if (person.id.toString() === id.toString()) {
        return person.name;
      }
    }
  } else {
    let name: string = "???";
    if (id in testimonials) {
      return testimonials[id];
    }
    return name;
  }
  return "----";
}

</script>

<template>
  <div class="service-container">
    <div class="breadcrumbs">
      <div class="breadcrumb" v-for="breadcrumb of crumbs.slice(0, -1)">
        <NuxtLink :to="breadcrumb" style="margin:0; text-decoration: underline;color: #999999;" tabindex="0">
          {{ crumb(breadcrumb.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}
        </NuxtLink>
        <p style="margin: 0;margin-inline: 5px"> > </p>
      </div>
      <p style="margin: 0">{{ crumb(crumbs.at(-1)!.replace(/^\/|\/$/g, '').replace(/\//g, ' ')) }}</p>
    </div>
    <img
        id="hero"
        :src="'/HYP/contents/services/' + useRoute().params.id + '.jpg'"
        :alt="'photo of the service ' + service.name"
    >
    <div id="title">
      <h1 style="color: plum;font-size: 250%;font-weight: bold;">
        {{ service.name.toUpperCase()}}</h1>
      <h2 tabindex="0">{{ service.description }}</h2>
    </div>
    <div id="parts">
      <div class="part" v-for="section of service.sections">
        <h3 style="font-weight: bold">{{ section.split(":")[0]}}</h3>
        <p style="margin: 0">{{ section.split(": ")[1] }}</p>
      </div>
    </div>
    <div id="words" style="text-align: center;">
      <p style="width: 80%; margin: 0 auto;">{{ service.words }}</p>
    </div>
    <div id="testimonials-container">
      <h2 style="color: indigo; font-size: 200%;font-weight: bold;font-variant: all-petite-caps" tabindex="0">
        TESTIMONIALS</h2>
      <div id="testimonials">
        <div class="testimonial" v-for="testimonial of service.testimonials">
          <p>{{ testimonial.words }}</p>
          <NuxtLink v-if="testimonial.id < 100" class="testimonial-person" :to="'/people/'+testimonial.id" tabindex="0">
            <img
                class="testimonial-person-img"
                :src="'/HYP/contents/people/' + testimonial.id + '.jpg'"
                :alt="'photo of ' + getPersonName(testimonial.id)"
            />
            <div class="testimonial-person-info">
              <p style="font-size: 120%">{{ getPersonName(testimonial.id) }}</p>
              <p>{{ testimonial.role }}</p>
            </div>
          </NuxtLink>
          <div v-if="testimonial.id >= 100" class="testimonial-person">
            <img
                class="testimonial-person-img"
                :src="'/HYP/contents/people/0.png'"
                :alt="'photo of ' + getPersonName(testimonial.id)"
            />
            <div class="testimonial-person-info">
              <p style="font-size: 120%">{{ getPersonName(testimonial.id) }}</p>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.service-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

#hero {
  width: 100%;
  aspect-ratio: 3;
  object-fit: cover;
}

#title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 50px;
}

#parts {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-block: 50px;
}

.part {
  min-width: 200px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-inline: 25px;
  margin-bottom: 25px;
}

#words {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 50px;
  margin-block: 50px;
}


#testimonials-container {
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 50px;
}

#testimonials {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  overflow-x: scroll;
  padding: 25px;
  margin: 25px;
}

.testimonial {
  min-width: 750px;
  aspect-ratio: 5;
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 30px;
  padding-block: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.testimonial-person {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: inherit;
  text-decoration: none;
  padding: 20px;
  border-radius: 20px;
}

.testimonial-person-img {
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

.testimonial-person-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>