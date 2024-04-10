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
            <v-card>
              <v-tabs
                v-model="tab"
                color="deep-purple-accent-4"
                align-tabs="center"
              >
                <v-tab :value="1" style="font-size: large;">ĐĂNG NHẬP</v-tab>
                <v-tab :value="2" style="font-size: large;">ĐĂNG KÝ</v-tab>
              </v-tabs>
              <v-window v-model="tab" style="">
                <v-window-item :value = "1"> 
                  <v-container fluid>
                    
                    <UCard class="w-full mt-7">
                      <UForm :schema = "validation" :state="state" class="space-y-4" @submit="onSubmit">

                      <UFormGroup size="xl" class="" label="Email" name="email">
                        <UInput v-model="useLogin.email"  />
                      </UFormGroup>

                      <UFormGroup size="xl" class="" label="Password" name="password">
                        <UInput v-model="useLogin.password" type="password" />
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

          
                  </v-container>
                </v-window-item>
                <v-window-item :value = "2">
                  <v-container fluid>
                    <h1>Đoàn trọng quân</h1>
                    <!-- <form @submit.prevent="submit">
                    <div class="row" style="margin-top: 13px;">
                      <div class="col-md-6 col-12 input-info-register">
                        <v-text-field class="input" dense
                        variant="outlined"
                        v-model="userRegister.fullName.value"
                        label="Họ và tên"
                        density="compact"
                        clearable
                        required
                        :error-messages="userRegister.fullName.errorMessage"
                        ></v-text-field>
                      </div>
                      <div class="col-md-6 col-12 input-info-register">
                        <v-text-field class="input" dense
                        variant="outlined"
                        v-model="userRegister.name.value"
                        label="Tên"
                        density="compact"
                        clearable
                        required
                        :error-messages="userRegister.name.errorMessage"
                        ></v-text-field>
                      </div>
                    </div>     
    
                  <div class="row" style="margin-top: 7px;">
                    <div class="col-12 col-md-6 input-info-register">
                      <v-text-field class="input" dense
                        variant="outlined"
                        clearable
                        required
                        density="compact" 
                        v-model="userRegister.email.value"
                        label="Email"
                        type="email"
                        :error-messages="userRegister.email.errorMessage"
                      ></v-text-field>
                    </div> 
                    <div class="col-12 col-md-6 input-info-register">
                      <v-text-field class="input" dense
                        variant="outlined"
                        clearable
                        required
                        density="compact" 
                        v-model="userRegister.phoneNumber.value"
                        label="Số điện thoại"
                        type="phoneNumber"
                        :error-messages="userRegister.phoneNumber.errorMessage"
                      ></v-text-field>
                    </div>               
                  </div>
                  <div class="row" style="margin-top: 7px;">
                    <v-text-field class="col-sm-6 input" dense 
                    type = "password"
                    clearable
                    required
                    density="compact"
                    variant="outlined"
                    v-model="userRegister.password.value" 
                    label="Mật khẩu"
                    :error-messages="userRegister.password.errorMessage"
                  ></v-text-field>
                  <v-text-field class="col-sm-6 input" dense 
                    type = "password"
                    clearable          
                    density="compact"
                    variant="outlined"
                    v-model="userRegister.confirmPassword.value"
                    label="Xác nhận mật khẩu"
                    :error-messages="userRegister.confirmPassword.errorMessage"
                  ></v-text-field>
                  </div>
                  <div class="row" style="margin-top: 7px;">
                    <p style="color:#000; font-size:11px; font-style:italic;">(*) Khi bấm vào đăng ký tài khoản, bạn chắc chắn đã đọc và đồng ý với 
                    <a style="color: blue;" href="" @click.prevent = "isShowPrivatePoli  = !isShowPrivatePoli">Chính sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn</a>
                    của khóa hoc.</p>
                  </div>
                  <div class="row" style="background-image: linear-gradient(to left, #03a8f473 0%, #03a9f4 51%, #606ac1 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
                    <button  type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG KÝ</button>
                  </div>
                  <div class="row" style="background-image: linear-gradient(to right, #fc3606 0%, #fda085 51%, #fc7704 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
                    <button type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG KÝ VỚI FACEBOOK</button>
                  </div>
                  </form> -->
                  </v-container>
                </v-window-item>
              </v-window>
            </v-card>
          </div>
      </div>
    </template>
    
<script setup>
import { useField, useForm } from 'vee-validate';
import {useLogin } from '~/composables/authentication/useLogin'
// import {useSignup } from '~/composables/authentication/useSignUp'

    const loginData = useLogin();
    // const signupData = useSignup();

    const {
      state,
      validation,
      onSubmit
    } = loginData;
    
    // const isShowProgressConfifmRegister = ref(false)
    const tab = ref(null);

  
    // const userRegister = reactive({
    //   fullName: useField('fullName', (value) => {
    //     if (!value) {
    //       return 'Họ và tên không được để trống.';
    //     } else if (value?.length < 3) {
    //       return 'Họ và tên phải lớn hơn 3 ký tự.';
    //     }
    //     return true;
    //   }),
    //   name:useField('name', (value) => {
    //     if (!value) {
    //       return 'Tên không được để trống.';
    //     } else if (value?.length < 3) {
    //       return 'Tên phải lớn hơn 3 ký tự.';
    //     }
    //     return true;
    //   }),
    //   email: useField('email', (value) => {
    //     if (!value) {
    //       return 'Email không được để trống.';
    //     } else if (/^[a-z.-.0-9]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
    //       return true;
    //     }
    //     return 'Định dạng email không hợp lệ.';
    //   }),
    
    //   phoneNumber: useField('phoneNumber', (value) => {
    //   if (!value) {
    //     return 'Số điện thoại không được để trống';
    //   } else if (/^[0-9]+$/.test(value)) {
    //     return true;
    //   }
    //   return 'Số điện thoại không hợp lệ.';
    //   }),
    //   password: useField('password', (value) => {
    //     if (!value) {
    //       return 'Mật khẩu không được để trống.';
    //     } else if (value?.length >= 3) {
    //       return true;
    //     }
    //     return 'Mật khẩu phải chứa ít nhất 3 ký tự.';
    //   }),
    //   confirmPassword: useField('confirmPassword', (value) => {
    //     if (!value) {
    //       return 'Xác nhận mật khẩu không được để trống.';
    //       } else if (value !== userRegister.password.value) {
    //       return 'Xác nhận mật khẩu không khớp';
    //       }
    //     return true;
    //     }),
    //   }); 
    
  
    //nhận giá trị biến nameOfCinema mới nhất sau khi thay đổi nameOfCinema ở Navbar
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