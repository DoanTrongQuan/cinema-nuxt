<template>
  <UCard class="w-full mt-7">
  <UForm :schema = "validation" :state="state" class="space-y-4" @submit="onSubmit">

  <UFormGroup size="xl" class="" label="Email" name="email">
    <UInput v-model="state.email"  />
  </UFormGroup>

  <UFormGroup size="xl" class="" label="Password" name="password">
    <UInput v-model="state.password" type="password" />
  </UFormGroup>

  <div class="row" style="margin:5px 5%; margin-top: 15px;">
    <a href="https://hocmai.vn/loginv2/forgot_password.php" style="text-decoration: none;font-size:12px">Quên mật khẩu?</a>
  </div>
  <div class="row" style="background:#03a9f4; width:100%;height:45px; border-radius:20px; margin-left:0.2px;">
      <UButton  @click ="login" type = "submit"  style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG NHẬP</UButton>
  </div>
  <div class="row" style="background-image: linear-gradient(to right, #fc3606 0%, #fda085 51%, #fc7704 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
    <button type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG NHẬP VỚI FACEBOOK</button>
  </div>
  </UForm>
</UCard>
</template>


<script setup>
  import {useLogin } from '~/composables/authentication/useLogin'


    const loginData = useLogin();


    const {
      state,
      validation,
      onSubmit
    } = loginData;
</script>