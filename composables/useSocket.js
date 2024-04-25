import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
// import   { Client  }   from '@stomp/stompjs';



export const useSocket = () => {

  const stompClient = ref(null);
  const message = ref({});
  const content = ref('')

  const connect = (url,sub) => {
    const socket = new SockJS(url);
    
      stompClient.value = Stomp.over(socket);
      stompClient.value.connect({}, () => {
        console.log('Web Socket is connected');
        stompClient.value.subscribe(sub, (newMessage) => {
          console.log('Received message from server:', JSON.parse(newMessage.body));
          message.value = JSON.parse(newMessage.body);
        });
      });
  }

  const disconnect = () => {  
  if(stompClient != null ) {
    stompClient.value.disconnect();
    stompClient.value = null
    console.log("Disconnected");
  }else {
    console.log("null");
  }
  }

  const sendMessage = (sub,data) =>{
  if(stompClient.value != null){
          stompClient.value.send(sub, JSON.stringify(data));
      // console.log(data)
  } else {
    alert('vui long kết nối lại')
    }
  }
  return{
    stompClient,
    message,
    content,
    connect,
    disconnect,
    sendMessage
  }
}




