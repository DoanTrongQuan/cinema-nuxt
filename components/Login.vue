<template>
    <div>

          <!-- <div class="center"  >
            <vs-dialog v-model="isShowVerifyAcc" not-close>
            <div style="width: 100%; height: 100%; display: flex; justify-content: center;flex-direction: column">
              <h3 class="text-h6 mb-4" style="text-align: center;">Xác minh tài khoản</h3>
    
              <div class="text-body-2" style="text-align: center;">
               Chúng tôi đã gửi mã xác nhận tới {{userRegister.email.value }}<br>
    
                Vui lòng kiểm tra email để xác thực tài khoản.
              </div>
    
              <v-sheet color="surface">
                <v-otp-input
                  
                  v-model="confirmCode"
                  type="password"
                  variant="solo"
                ></v-otp-input>
              </v-sheet>
    
              <v-btn
              style="margin-left: 14%;"
                @click="confirmRegister"
                class="my-4"
                color="purple"
                height="40"
                text="Xác thực"
                variant="flat"
                width="70%"
              ></v-btn>
    
              <div class="text-caption" style="text-align: center;">
                Không nhận được mã? <a href="#" @click.prevent="resendConfirmCode">Gửi lại</a>
              </div>
    
            </div>
    
            </vs-dialog>
          </div> -->
    
          <div class="container-fluid col-12 col-md-8 col-lg-6 col-xl-5 text-center form-signup">
            <UCard class="w-full mt-7">
              <UForm :schema = "validation" :state="userLogin" class="space-y-4" @submit="onSubmit">

              <UFormGroup size="xl" class="" label="Email" name="email">
                <UInput v-model="userLogin.email"  />
              </UFormGroup>

              <UFormGroup size="xl" class="" label="Password" name="password">
                <UInput v-model="userLogin.password" type="password" />
              </UFormGroup>

              <div class="row" style="margin:5px 5%; margin-top: 15px;">
                <a href="https://hocmai.vn/loginv2/forgot_password.php" style="text-decoration: none;font-size:12px">Quên mật khẩu?</a>
              </div>
                  <UButton   type = "submit"  style="color:white; font-size: 14px; font-weight:bold;
                  background:#03a9f4; width:100%;height:45px; border-radius:20px; margin-left:0.2px;">ĐĂNG NHẬP</UButton>

              <div class="row" style="background-image: linear-gradient(to right, #fc3606 0%, #fda085 51%, #fc7704 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
                <button type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG NHẬP VỚI FACEBOOK</button>
              </div>
              <div class="text-center">
                Have an acccount?
                <span class = " cursor-pointer ">Sign in</span>
              </div>
              </UForm>
            </UCard>
          </div>
      </div>
    </template>
    
<script setup>
import {useLogin } from '~/composables/authentication/useLogin'
    

   const loginData = useLogin();

    const {
      userLogin,
      validation,
      onSubmit
    } = loginData;
    

</script>
    
    
<style scoped >
    .form-signup{
      height: auto;
      margin-left: auto;
      margin-right: auto;
      z-index: 0;
      background: white;
      padding-bottom: 50px;
    }
    .header{
      position: sticky;
      top:0;
    }
    
    .col-sm-6 a{ 
      text-decoration: none;
      color:white;
       float:left; 
       padding:5px 5px;
       line-height: 30px;
    }
    
    
    .input-info-register {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    .verify-account p {
      margin: 20px 0px;
      position: relative;
      display: block;
      font-size: 0.9rem;
      width: 100%;
      z-index: 100000 !important;
    }
    </style>