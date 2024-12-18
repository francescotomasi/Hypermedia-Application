<script setup lang="ts">
import {breadcrumbs} from "~/composables/breadcrumbs";
import {assignProjects} from "~/utils";
import type {Project} from "~/model/Project";

const crumbs = breadcrumbs();
crumbs.value.length = 0;

let {data: data_projects} = await useFetch("/api/projects");

const latestProject: Project | undefined = data_projects.value!.projects.length > 0 ? assignProjects(JSON.parse(data_projects.value!.projects))[0] : undefined;
const bgImageStyle = !!latestProject ? `background-image: url('/HYP/contents/projects/${latestProject.id}.jpg')` : '';

const history = [
  {
    title: "Foundation",
    description: "Founded in 2010, our organization started with the goal of supporting women in need, offering resources and a safe space for growth and empowerment."
  },
  {
    title: "Expansion",
    description: "Over the years, we have expanded our services to include educational programs, career development workshops, and community outreach initiatives"
  },
  {
    title: "Recognition",
    description: "We have been recognized nationally for our impactful work, receiving numerous awards and grants to further our mission."
  },
  {
    title: "Future Vision",
    description: "Looking ahead, we aim to broaden our reach, touching the lives of more women and communities across the nation."
  },
]
const missions = [
  {"icon": "sentiment_satisfied", "number": "250+", "name": "Women Helped"},
  {"icon": "content_copy", "number": "20+", "name": "Completed Projects"},
  {"icon": "local_pizza", "number": "1.8K+", "name": "Available Resources"},
  {"icon": "group", "number": "11K+", "name": "Donors"},
]
</script>

<template>
  <div class="page-container">
    <div v-if="!!latestProject" id="latest-project" :style="bgImageStyle">
      <div id="latest-project-texts">
        <h2 style="color: rgba(221 160 221); margin: 0;">{{ latestProject.name }}</h2>
        <h3 style="font-size: 80%">{{ latestProject.description }}</h3>
        <NuxtLink id="latest-project-button" :to="'/projects/'+latestProject.id" tabindex="0">Learn more</NuxtLink>
      </div>
    </div>
    <div id="mission">
      <h2 tabindex="0">MISSION</h2>
      <p>
        Our mission is to empower women through comprehensive support, education, and advocacy. We strive to create a
        safe and inclusive environment where women can thrive and reach their full potential.
      </p>
      <div id="mission-list">
        <div v-for="mission in missions" class="mission-item">
          <i class="material-icons" style="font-size: 200%">{{ mission.icon }}</i>
          <h3>{{ mission.number }}</h3>
          <p>{{ mission.name }}</p>
        </div>
      </div>
    </div>
    <div class="separator"/>
    <div id="history">
      <h2 tabindex="0">OUR HISTORY</h2>
      <div id="history-grid">
        <div/>
        <div class="timeline">
          <div style="width: 5pt; height: 20pt; background-color: rgba(0,0,0,0)"/>
          <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
          <div style="width: 5pt; height: 250pt; background-color: var(--header-button-color)"/>
        </div>
        <div class="history-item-right">
          <h3>{{ history[0].title }}</h3>
          <p>{{ history[0].description }}</p>
        </div>
        <div class="history-item-left">
          <h3>{{ history[1].title }}</h3>
          <p>{{ history[1].description }}</p>
        </div>
        <div class="timeline">
          <div style="width: 5pt; height: 20pt; background-color: var(--header-button-color)"/>
          <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
          <div style="width: 5pt; height: 250pt; background-color: var(--header-button-color)"/>
        </div>
        <div/>
        <div/>
        <div class="timeline">
          <div style="width: 5pt; height: 20pt; background-color: var(--header-button-color)"/>
          <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
          <div style="width: 5pt; height: 250pt; background-color: var(--header-button-color)"/>
        </div>
        <div class="history-item-right">
          <h3>{{ history[2].title }}</h3>
          <p>{{ history[2].description }}</p>
        </div>
        <div class="history-item-left">
          <h3>{{ history[3].title }}</h3>
          <p>{{ history[3].description }}</p>
        </div>
        <div class="timeline">
          <div style="width: 5pt; height: 20pt; background-color: var(--header-button-color)"/>
          <div style="width: 20pt; height: 20pt; border-radius: 50%;background-color: var(--header-button-color)"/>
        </div>
        <div/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Futura", sans-serif;
  font-size: 25px;
}

#latest-project {
  width: 100%;
  color: white;
  aspect-ratio: 5/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-size: cover;
  padding-left: 10%;
  
}

#latest-project-texts {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 100%;
  font-weight: bold;
  color: white;
}

#latest-project-button {
  font-size: 70%;
  font-weight: bold;
  color: white;
  background-color: rgba(221 160 221);
  border: none;
  border-radius: 25px;
  text-decoration: none;
  padding-inline: 25px;
  padding-block: 15px;
  margin-bottom: 20px;
}

#mission {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-size: 80%;
}

#mission-list {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
}

.mission-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.separator {
  width: 100vw;
  height: 2px;
  border: indigo 1px solid;
  background-color: indigo;
}

#history {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
}

#history-grid {
  width: 80vw;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 0 10px;
  font-size: 80%;
}

.history-item-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
}

.history-item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}


</style>