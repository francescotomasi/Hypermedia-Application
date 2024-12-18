<template>
  <div class="donation-container">
    <h1>Donation</h1>
    <form @submit.prevent="submitForm" class="form">
      <div class="columns">
        <div class="column">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" v-model="name" type="text" required />
            <span class="error-message" v-if="nameError">{{ nameError }}</span>
          </div>
          <div class="form-group">
            <label for="surname">Surname</label>
            <input id="surname" v-model="surname" type="text" required />
            <span class="error-message" v-if="surnameError">{{ surnameError }}</span>
          </div>
          <div class="form-group">
            <label for="labelName">Label Name</label>
            <input id="labelName" v-model="labelName" type="text" required />
            <span class="error-message" v-if="labelNameError">{{ labelNameError }}</span>
          </div>
        </div>
        <div class="column">
          <div class="form-group">
            <label for="cardNumber">Card Number</label>
            <input id="cardNumber" v-model="cardNumber" type="text" required />
            <span class="error-message" v-if="cardNumberError">{{ cardNumberError }}</span>
          </div>
          <div class="form-group">
            <label for="expiryDate">Expiry Date</label>
            <input id="expiryDate" v-model="expiryDate" type="month" required />
            <span class="error-message" v-if="expiryDateError">{{ expiryDateError }}</span>
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input id="cvv" v-model="cvv" type="text" required />
            <span class="error-message" v-if="cvvError">{{ cvvError }}</span>
          </div>
        </div>
      </div>
      <div class="terms-group">
        <input id="acceptTerms" v-model="acceptTerms" type="checkbox" />
        <label for="acceptTerms">I accept the informativity</label>
      </div>
      <button type="submit">Donate</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { breadcrumbs } from '~/composables/breadcrumbs';

const crumbs = breadcrumbs();
crumbs.value.length = 0;

// Form data
const name = ref('');
const surname = ref('');
const labelName = ref('');
const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const acceptTerms = ref(false);

// Error messages
const nameError = ref('');
const surnameError = ref('');
const labelNameError = ref('');
const cardNumberError = ref('');
const cvvError = ref('');
const expiryDateError = ref('');

// Watch for changes and validate inputs
watch(name, validateName);
watch(surname, validateSurname);
watch(labelName, validateLabelName);
watch(cardNumber, validateCardNumber);
watch(expiryDate, validateExpiryDate);

// Function to validate CVV input
watch(cvv, (newValue) => {
  // Remove non-digit characters
  const cleanedValue = newValue.replace(/\D/g, '');
  // Limit to 3 characters
  cvv.value = cleanedValue.slice(0, 3);
  // Set error message if CVV is not exactly 3 digits
  cvvError.value = cleanedValue.length !== 3 ? "CVV must be exactly 3 digits" : '';
});

// Handle form submission
const submitForm = () => {
  if (nameError.value || surnameError.value || labelNameError.value || cardNumberError.value || cvvError.value) {
    alert('Please fix the errors before submitting.');
    return;
  }
  if (acceptTerms.value) {
    console.log('Form Submitted:', {
      name: name.value,
      surname: surname.value,
      labelName: labelName.value,
      cardNumber: cardNumber.value,
      expiryDate: expiryDate.value,
      cvv: cvv.value,
    });
  } else {
    alert('You must accept the terms and conditions to proceed.');
  }
};

// Function to validate Name input
function validateName(newValue: string) {
  nameError.value = /\d/.test(newValue) ? "You can't write numbers here" : '';
}

// Function to validate Surname input
function validateSurname(newValue: string) {
  surnameError.value = /\d/.test(newValue) ? "You can't write numbers here" : '';
}

// Function to validate Label Name input
function validateLabelName(newValue: string) {
  labelNameError.value = /\d/.test(newValue) ? "You can't write numbers here" : '';
}

// Function to validate Card Number input
function validateCardNumber(newValue: string) {
  cardNumberError.value = /[a-zA-Z]/.test(newValue) ? "You can't write letters here" : '';
}

// Function to validate Expiry Date input
function validateExpiryDate(newValue: string) {
  expiryDateError.value = !/^\d{2}\/\d{4}$/.test(newValue) ? "Expiry date must be in the format MM/YYYY" : '';
}
</script>

<style scoped>
.donation-container {
  padding: 50px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  font-family: "Futura", sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-family: "Futura", sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.columns {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.column {
  flex: 1;
  padding: 0 10px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="month"],
input[type="number"] {
  width: 100%;
  padding: 12px; /* Increase padding for larger input fields */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #E6E6FA; /* Light violet color */
}

.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
  display: block;
}

.terms-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0; /* Adjust margin to better center the terms */
}

.terms-group label {
  margin-left: 8px;
}

button {
  display: block;
  width: 100%;
  padding: 12px; /* Increase padding for larger button */
  background-color: #8A2BE2; /* Violet color */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover, button:focus {
  background-color: #7A1DC2;
}
</style>