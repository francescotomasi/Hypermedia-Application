<script setup lang="ts">

</script>

<template>
  <div class="chatbox-container">
    <div class="chat-header">
      <div class="chat-header-left">
        <img class="avatar" :src="'/HYP/contents/chatbox/openai-logomark.svg'" alt="logomark of openai">
        <div class="chat-header-left-text">
          <span style="font-weight: bold">AI CHATBOT</span>
          <span>online</span>
        </div>
      </div>
    </div>
    <div class="dialog-container">

    </div>
    <div class="response-container">

    </div>
  </div>
</template>

<style scoped>
.chatbox-container {
  width: 300px;
  aspect-ratio: 1/2;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: black 2px solid;
  font-family: "Futura", sans-serif;
}

.chat-header {
  height: 10%;
  width: 100%;
  display: flex;
}

.chat-header-left {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
}

.avatar {
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  border: black 1px solid;
  object-fit: cover;
}

.chat-header-left-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.dialog-container {
  height: 80%;
  width: 100%;
  display: flex;

}

.response-container {
  height: 10%;
  width: 100%;
  display: flex;

}
</style>