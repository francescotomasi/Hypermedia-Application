<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {Person} from "~/model/Person";
import {assignPeople} from "~/utils";

const crumbs = breadcrumbs();
crumbs.value = ["/people"];

let {data: data_people} = await useFetch("/api/people");
const people: Person[] = assignPeople(JSON.parse(data_people.value!.people));
</script>

<template>
  <div class="container">
    <h1 class="header">THE TEAM</h1>
    <div class="title">
      Our dedicated team is here for you.
      Here you can see their work.
    </div>
    <div v-if="people.length === 0" class="person-card">No people found</div>
    <div v-else class="person-cards">
      <div v-for="person in people" class="person-card-container" >
        <NuxtLink class="person-card" :to="'/people/' + person.id" tabindex="0">
          <img
              class="person-thumb"
              :src="'/HYP/contents/people/' + person.id + '.jpg'"
              :alt="'Photo of ' + person.name"
          >
          <h2 class="person-name">{{ person.name }}</h2>
          <span class="person-description">{{ person.description.substring(0, 120) + "..." }}</span>
        </NuxtLink>
      </div>
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
  padding-block: 50px;
  font-family: 'Futura', sans-serif;
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

.person-cards {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.person-card-container {
  width: 23%;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  border-radius: 20px;
  text-decoration: none;
}

.person-card-container:hover, .person-card-container:focus {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
  transition: 0.2s;
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  aspect-ratio: 2/3;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  text-decoration: none;
  border-radius: 20px;
  color: transparent;
  background-color: transparent;
  font-family: "Futura", sans-serif;
  border: none;
  gap: 10px;
  padding-bottom: 20px;
}

.person-thumb {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
}

.person-name {
  color: black;
  font-size: 125%;
  font-weight: bold;
  text-decoration: none;
  padding-inline: 5%;
  text-overflow: ellipsis;
  margin: 0;
}

.person-description {
  display: block;
  color: black;
  font-weight: normal;
  text-decoration: none;
  padding-inline: 5%;
}

</style>

