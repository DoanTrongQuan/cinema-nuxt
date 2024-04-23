<template>
  <div>
    <input v-model="send_message" type="text" />
    <button @click="send">Send</button>
    <br/>
    <button @click="tickleConnection">
      {{ connected ? 'Disconnect' : 'Connect' }}
    </button>
    <ul>
      <li v-for="(message, index) in received_messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

const received_messages = ref([]);
const send_message = ref(null);
const connected = ref(false);

let stompClient = null;
let socket = null;

const send = () => {
  console.log('Send message:' + send_message.value);
  if (stompClient && stompClient.connected) {
    const msg = { name: send_message.value };
    stompClient.send('/app/hello', JSON.stringify(msg), {});
  }
};

const connect = () => {
  socket = new SockJS('http://localhost:8089/ws');
  stompClient = Stomp.over(socket);
  stompClient.connect(
    {},
    frame => {
      connected.value = true;
      console.log('Connected');
      console.log(frame);
      stompClient.subscribe('/topic/message', tick => {
        console.log(tick);
        received_messages.value.push(JSON.parse(tick.body).content);
      });
    },
    error => {
      console.log(error.message);

      connected.value = false;
    }
  );
};

const disconnect = () => {
  if (stompClient) {
    stompClient.disconnect();
  }
  connected.value = false;
};

const tickleConnection = () => {
  connected.value ? disconnect() : connect();
};
</script>
