<template>
    <div id="main-content">
    <div>
      <form>
      <div>
      <label>What is your name?</label> 
      <input type="text" v-model="inputText" id="name" placeholder="Your name here...">
      </div>
          <button id="send" @click.prevent="sendMessage">Send</button>
      </form>
    </div>
    </div>
    <div>
      <label>Message from server: </label><span id="message"></span>
    </div>
</template>

<script setup>
import { io } from "socket.io-client";

const socket = io("http://localhost:8080/hello")


onMounted(() => {})

const inputText = ref('');
socket.on("connect", () => {
  console.log("Connect")
});
socket.on("connect_error", (error) => {
  console.log("Connect",error)
});

const sendMessage = () => {
    socket.emit('message', {
        author: 'client',
        msg: inputText.value
    });
}
</script>

<style>

</style>