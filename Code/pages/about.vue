<script setup lang="ts">
import { breadcrumbs } from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value.length = 0;

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
const successes = [
  { "icon": "sentiment_satisfied", "number": "250+", "name": "Women Helped" },
  { "icon": "content_copy", "number": "20+", "name": "Completed Projects" },
  { "icon": "local_pizza", "number": "1.8K+", "name": "Available Resources" },
  { "icon": "group", "number": "11K+", "name": "Donors" },
]
</script>
<template>
  <div class="about-container">
    <div id="about">
      <div id="about-text">
        <h1 tabindex="0">Empowering Women, Transforming Communities</h1>
        <p>Our organization is dedicated to empowering women through comprehensive support, advocacy, and educational
          programs. We believe in creating a world where every woman has the opportunity to reach her full potential and
          contribute to her community.</p>
      </div>
      <img
        id="about-image"
        :src="'/HYP/contents/logo.svg'"
        alt="Photo of the logo"
      >
    </div>
    <div class="separator" />
    <div id="history">
      <h2 tabindex="0">HISTORY</h2>
      <div id="history-grid">
        <div />
        <div class="timeline">
          <div style="width: 5pt; height: 10pt; background-color: rgba(0,0,0,0)" />
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)" />
          <div style="width: 5pt; height: 160pt; background-color: var(--header-button-color)" />
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
          <div style="width: 5pt; height: 10pt;background-color: var(--header-button-color)" />
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)" />
          <div style="width: 5pt; height: 160pt; background-color: var(--header-button-color)" />
        </div>
        <div />
        <div />
        <div class="timeline">
          <div style="width: 5pt; height: 10pt;background-color: var(--header-button-color)" />
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)" />
          <div style="width: 5pt; height: 160pt; background-color: var(--header-button-color)" />
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
          <div style="width: 5pt; height: 10pt;background-color: var(--header-button-color)" />
          <div style="width: 30pt; height: 30pt; border-radius: 50%;background-color: var(--header-button-color)" />
        </div>
        <div />
      </div>
    </div>
    <div class="separator" />
    <div id="successes">
      <h2 tabindex="0">SUCCESSES SO FAR</h2>
      <p>
        Since our inception, we have provided critical support to over 250 women, completed 20+ projects, and garnered
        the support of more than 11,000 donors. Our resources have been accessed by over 1.8K individuals, making a
        tangible impact in our community.
      </p>
      <div id="successes-list">
        <div v-for="success in successes" class="successes-item">
          <i class="material-icons" style="font-size: 200%">{{ success.icon }}</i>
          <h3>{{ success.number }}</h3>
          <p>{{ success.name }}</p>
        </div>
      </div>
    </div>
    <div class="separator" />
    <div id="opening-hours-location">
      <h2 class="large-font" tabindex="0">OPENING HOURS AND LOCATION</h2>
      <div id="opening-hours">
        <h3 class="medium-font">Opening Hours</h3>
        <ul class="large-list">
          <li><strong>Monday to Friday:</strong> 9:00 AM – 6:00 PM</li>
          <li><strong>Saturday:</strong> 10:00 AM – 4:00 PM</li>
          <li><strong>Sunday:</strong> Closed</li>
        </ul>
        <p class="small-font">
          Note: Some of our services, such as the Emergency Shelter and 24-hour hotline, are available 24/7 to provide immediate assistance.
        </p>
      </div>
      <div id="location">
        <h3 class="medium-font">Location</h3>
        <p class="small-font"><strong>Address:</strong> Via della Speranza, 123, 00184 Rome, Italy</p>
        <p class="small-font">We welcome you to visit us during our opening hours or contact us via phone or email for any inquiries or to schedule an appointment. Our dedicated team is here to support you.</p>
        <p class="small-font"><strong>Phone:</strong> +39 012 345 6789</p>
        <p class="small-font"><strong>Email:</strong> contact@centerhelpwomen.com</p>
      </div>
    </div>
    <div class="separator" />
    <div id="bottom">
      <img
        id="bottom-image"
        :src="'/HYP/contents/projects/6.JPG'"
        alt="image of project 1"
        tabindex="0"
      >
      <div id="bottom-text">
        <p>Our journey is fueled by the passion and commitment of individuals and organizations dedicated to gender
          equality. We continue to advocate for women's rights and provide essential services to those in need. </p>
        <p>Join us in our mission to create a supportive and inclusive environment for all women. Together, we can make
          a lasting impact and empower future generations. </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Futura", sans-serif;
  font-size: 25pt;
}

#about {
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  font-size: 50%;
}

#about-text {
  flex: 1 1 300px; /* Allow the text to flex and grow while maintaining a minimum width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

#about-image {
  flex: 1 1 250px; /* Allow the image to flex and grow while maintaining a minimum width */
  aspect-ratio: 1;
  overflow: hidden;
  object-fit: cover;
}

.separator {
  width: 100vw;
  height: 2px;
  border: indigo 1px solid;
  background-color: indigo;
}

#history {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-size: 50%;
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
  overflow-y: hidden;
}

#successes {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-size: 50%;
}

#successes-list {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.successes-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#opening-hours-location {
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  font-size: 50%;
}

#opening-hours, #location {
  width: 80vw;
  margin-bottom: 20px;
}

#bottom {
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  font-size: 50%;
}

#bottom-text {
  flex: 1 1 400px; /* Allow the text to flex and grow while maintaining a minimum width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 100%;
}

#bottom-image {
  flex: 1 1 250px; /* Allow the image to flex and grow while maintaining a minimum width */
  aspect-ratio: 1;
  overflow: hidden;
  object-fit: cover;
}

.large-font {
  font-size: 180%;
}

.medium-font {
  font-size: 150%;
}

.large-list li {
  font-size: 100%; /* Adjust size as needed */
}

.small-font {
  font-size: 100%;
}

h2 {
  font-size: 180%;
}

p {
  font-size: 125%;
}
</style>
