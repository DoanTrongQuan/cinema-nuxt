<template>
  <div id="main-content">
    <div>
        <button @click="connect">Connect</button>
        <button style="margin-left: 20%;" @click.prevent="disconnect">Disconect</button>
        <button @click.prevent="logError">Log erro</button>
        <div>
          <label>What is your name?</label> 
          <input type="text" v-model="content" placeholder="Your name here...">
        </div>
          <button id="send" @click.prevent="sendMessage">Send</button>
    </div>
  </div>
  <div>
    <label>Message from server: </label><span>{{ message }}</span>
    <br>
    <button @click = "check">check</button>
  </div>
</template>

<script setup>
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client'; 


const stompClient = ref(null);
const message = ref({

});
const content = ref('')
const check  = () => {
  console.log(typeof message.value);
}

    // onMounted(() => {
    //   connect();
    // });

const connect = () => {
      const socket = new SockJS('http://localhost:8089/booking');
      
        stompClient.value = Stomp.over(socket);
        stompClient.value.connect({}, () => {
          console.log('Web Socket is connected');
          stompClient.value.subscribe('/topic/seatStatus', (newMessage) => {
            // console.log('Received message from server:', newMessage.body);
            message.value = JSON.parse(newMessage.body);
          });
        });
    }
const disconnect = () => {  
  if(stompClient != null ) {
    stompClient.value.disconnect();
    stompClient.value = null
    console.log("Disconnected");
  }
}
const sendMessage = () =>{
  if(stompClient.value != null){
    const data = {
      seatId: 3,
      userId:3,
      seatStatus:3,
      schedule:1
    }
          stompClient.value.send("/app/booking", JSON.stringify(data));
      // console.log(data)
  } else {
    alert('vui long kết nối lại')
  }

    }

// const client = new Client({
//     brokerURL: 'wss://localhost:8089/booking'
// });


// const logError = () => {
//   client.onWebSocketError = (error) => {
//     console.error('Error with websocket', error);
// };
// }


// const connect = () => {
// 	client.activate();
//   client.onConnect = (frame) => {
//     console.log('Connected: ' + frame);
//     client.subscribe('/topic/seatStatus', (newMessage) => {
//       message.value = (JSON.parse(newMessage.body).content);
//     });
// };
// 	console.log('Connected');
// }

// const disconnect = () => {
//     client.deactivate();
//     console.log("Disconnected");
// }

// const sendMessage = () => {
//     client.publish({
//         destination: '/app/booking',
//         body: JSON.stringify( content.value )
//     });
// }

</script>
