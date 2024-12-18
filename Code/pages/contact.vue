<template>
  <div class="container">
    <div class="left-column">
      <h1>GET IN TOUCH!</h1>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group row">
          <div class="column">
            <label for="name" class="purple-text">Name</label>
            <div class="input-box">
              <input id="name" v-model="formData.firstName" type="text" required>
            </div>
          </div>
          <div class="column">
            <label for="surname" class="purple-text">Surname</label>
            <div class="input-box">
              <input id="surname" v-model="formData.lastName" type="text" required>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="purple-text">Email</label>
          <div class="input-box">
            <input id="email" v-model="formData.email" type="email" required>
          </div>
        </div>
        <div class="form-group">
          <label for="phone" class="purple-text">Phone</label>
          <div class="input-box">
            <input id="phone" v-model="formData.phone" type="tel" required>
          </div>
        </div>
        <div class="form-group">
          <label for="company" class="purple-text">Company</label>
          <div class="input-box">
            <input id="company" v-model="formData.company" type="text" required>
          </div>
        </div>
        <div class="form-group">
          <label for="message" class="purple-text">Message</label>
          <div class="input-box">
            <textarea id="message" v-model="formData.message" rows="6" required></textarea>
          </div>
        </div>
        <button type="submit" class="send-button">Send Message</button>
      </form>
    </div>
    <div class="right-column">
      <div class="contact-details">
        <h2>Contact Details</h2>
        <p><strong class="lilla-text">OUR LOCATION:</strong><br> Via della Speranza, 123 <br>00184 Rome, Italy</p>
        <p><strong class="lilla-text">CALL US:</strong><br>+39 012 345 6789</p>
        <p><strong class="lilla-text">EMAIL US:</strong><br>contact@centerhelpwomen.com </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {breadcrumbs} from "~/composables/breadcrumbs";

const crumbs = breadcrumbs();
crumbs.value.length = 0;

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
};
</script>

<style scoped>
.container {
  display: flex;
}

.left-column {
  flex: 3;
  padding: 20px;
}

.right-column {
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  font-family: 'Futura', sans-serif;
}

.purple-text {
  color: #8A2BE2; /* Viola */
  font-family: 'Futura', sans-serif;
}

.input-box {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #e0e0e0; /* Sfondo grigio chiaro */
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

button {
  padding: 15px 30px;
  background-color: #8A2BE2; /* Viola */
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Futura', sans-serif;
}

button:hover, button:focus {
  background-color: #7A1DC2; /* Viola più scuro al passaggio del mouse */
}

.contact-details {
  color: #333;
  font-family: 'Futura', sans-serif;
}

.contact-details h2 {
  font-size: 24px;
  font-weight: bold;
  color: #000; /* Nero */
}

.lilla-text {
  color: #8A2BE2; /* Viola */
  font-weight: bold;
  font-size: 16px;
}

.contact-details p {
  margin-bottom: 10px;
}

.contact-details strong {
  display: block;
  margin-bottom: 5px;
}

.contact-details p:not(:last-child) {
  margin-bottom: 20px;
}

.form-group.row {
  display: flex;
  justify-content: space-between;
}

.form-group.row .column {
  flex: 1;
  margin-right: 10px;
}

.form-group.row .column:last-child {
  margin-right: 0;
}

.contact-form {
  background-color: #e0e0e0; /* Sfondo grigio chiaro */
  padding: 20px;
  border-radius: 20px;
}
</style>
