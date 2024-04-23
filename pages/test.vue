<template>
  <div id="main-content">
    <div>
        <button @click="connect">Connect</button>
        <button style="margin-left: 20%;" @click.prevent="disconnect">Disconect</button>
        <div>
          <label>What is your name?</label> 
          <input type="text" v-model="content" placeholder="Your name here...">
        </div>
          <button id="send" @click.prevent="sendMessage">Send</button>
          
    </div>
  </div>
  <div>
    <label>Message from server: </label><span>{{ message }}</span>
  </div>
</template>

<script setup>
// import SockJS from 'sockjs-client';
// import Stomp from 'webstomp-client';
import  Stomp  from '@stomp/stompjs/bundles/stomp.umd.min.js';


// const stompClient = ref(null);
const message = ref('');
const content = ref('')


    // onMounted(() => {
    //   connect();
    // });

// const connect = () => {
//       const socket = new SockJS('http://localhost:8089/chat');
//         stompClient.value = Stomp.over(socket);
//         stompClient.value.connect({}, () => {
//           console.log('Web Socket is connected');
//           stompClient.value.subscribe('/topic/message', (newMessage) => {
//             console.log('Received message from server:', newMessage.body);
//             message.value = JSON.parse(newMessage.body);
//           });
//         });
//     }
// const disconect = () => {
//   if(stompClient != null ) {
//     stompClient.value.disconnect();
//     console.log("Disconnected");
//   }
// }
// const sendMessage = () =>{
//   if(stompClient.value != null){
//           stompClient.value.send("/app/chat", {}, content.value);
//       console.log(content.value)
//   } else {
//     alert('vui long kết nối lại')
//   }

//     }

const client = new Stomp.Client({
    brokerURL: 'http://localhost:8089/chat'
});

  client.onConnect = (frame) => {
    console.log('Connected: ' + frame);
    client.subscribe('/topic/message', (newMessage) => {
      message.value = (JSON.parse(newMessage.body).content);
    });
};


client.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

const connect = () => {
	client.activate();
	console.log('Connected');
}

const disconnect = () => {
    client.deactivate();
    console.log("Disconnected");
}

const sendMessage = () => {
    client.publish({
        destination: '/app/chat',
        body: JSON.stringify( content.value )
    });
}

</script>
