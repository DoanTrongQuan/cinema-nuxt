<template>
<div id="main-content">
<div>
<form>
<div>
<label>What is your name?</label> 
<input type="text" id="name" placeholder="Your name here...">
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
import  { SockJS } from 'sockjs-client';
import {Stomp} from "@stomp/stompjs"

onMounted(() => {
    connect()
})
const stompClient = ref(null);
    const name = ref('');
    const receivedMessage = ref('');

    const connect = () => {
      const socket = new SockJS('http://localhost:8089/hello');
      stompClient.value = Stomp.over(socket);
      stompClient.value.connect({}, () => {
        console.log('Web Socket is connected');
        stompClient.value.subscribe('/topic/messages', (message) => {
          receivedMessage.value = message.body;
        });
      });
    };
    
    const sendMessage = () => {
  if (stompClient) {
    stompClient.send("/app/hello", {}, $("#name").val());
  } else {
    console.error("stompClient is not initialized.");
  }
};

</script>

<style>

</style>