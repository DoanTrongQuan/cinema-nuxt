
<script setup>

// import { useResetCookies } from '~/composables/useResetCookies'

definePageMeta({
  middleware: 'my-middleware',
  layout:'default',
})
const router = useRouter();
router.replace('/home');

// onMounted(() => {
//       window.addEventListener('beforeunload', useResetCookies(nameOfCinema));
//     });

// onUnmounted(() => {
//       window.removeEventListener('beforeunload', useResetCookies(nameOfCinema));
//     });

</script>



<template>
  <!-- <button @click="check">Check</button> -->

</template>