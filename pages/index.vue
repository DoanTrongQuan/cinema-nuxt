
<script setup>
// import { useLogin } from '~/composables/authentication/useLogin'

// const {
//   isOpenForgotPassword
// } = useLogin()

definePageMeta({
  middleware: 'my-middleware',
  layout:'default',
})

// const check = () => {
  
//   isOpenForgotPassword.value = true;
//   console.log(isOpenForgotPassword.value)
// }
const router = useRouter();
router.replace('/home');
</script>



<template>
  <!-- <button @click="check">Check</button> -->
   
</template>