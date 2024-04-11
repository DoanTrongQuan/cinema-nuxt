<template>
  <div>
    <div>
         <vs-dialog scroll v-model="isShowPrivatePoli" lock-scroll not-close auto-width>
            <template #header>
              <h3>Chính sách bảo mật</h3>
            </template>
            <div class="con-content-scroll">
              <h5>Mục đích và phạm vi truy cập</h5>
              <p>
                Việc thu thập dữ liệu chủ yếu trên website Betacinemas.vn bao gồm: email, điện thoại, 
                số chứng minh thư nhân dân/căn cước công dân, mật khẩu đăng nhập, địa chỉ khách hàng (thành viên).
                 Đây là các thông tin mà website Betacinemas.vn cần thành viên cung cấp bắt buộc khi đăng ký sử dụng 
                 dịch vụ và để website Betacinemas.vn liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên website 
                 Betacinemas.vn nhằm đảm bảo quyền lợi cho người tiêu dùng.
              </p>
  
              <h5>Phạm vi sử dụng thông tin</h5>
  
              <p>
                Vuesax is a relatively new framework with a refreshing design and in
                the latest trends, vuesax based on vuejs which means that we go hand
                in hand with one of the most popular javascript frameworks in the
                world and with a huge community with which you will have all the help
                and documentation to create and make your project
                <br />
                <br />
                - Vuesax, unlike many frameworks, is designed from scratch and we are
                not anchored to any design line, this is something great since your
                project is going to be unique and very different from the others
  
                <br />
                <br />
                - We are focused on the quick and easy creation of projects giving a
                beautiful visual line but without forgetting the personalization and
                independence of the developer
  
                <br />
                <br />
                - Vuesax uses native css variables for better customization and
                production changes such as changing to dark theme or changing the main
                color of the entire application with few javascript lines
                <br />
                <br />
  
                - Vuesax is a frame designed to have a great visual impact and that is
                always in trend with respect to design.
                <br />
                <br />
  
                - An open-source community to create, improve and correct any
                component or function.
                <br />
                <br />
  
                - Independent components to avoid importing unnecessary code.
                <br />
                <br />
  
                - Markdown documents for better sustainability.
                <br />
                <br />
  
                - and much more.
              </p>
            </div>
          </vs-dialog> 
      </div>
      <div class="container-fluid col-12 col-md-9 col-lg-7 col-xl-5 text-center form-signup mt-2">
            <UCard class="w-full mt-7">
              
              <UForm :schema = "schema" :state="userRegister" class="space-y-4" @submit="onSubmit">
                <div class ="row">
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Tên đầy đủ" name="fullName">
                      <UInput v-model="userRegister.fullName"  />
                    </UFormGroup>
                  </div>
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Tên" name="name">
                      <UInput v-model="userRegister.name"  />
                    </UFormGroup>
                  </div>
                </div>

                <div class ="row">
                  <div class = "col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Email" name="email">
                      <UInput v-model="userRegister.email"  />
                    </UFormGroup>
                  </div>
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Mật khẩu" name="password">
                      <UInput type ="password" v-model="userRegister.password"  />
                    </UFormGroup>
                  </div>
                </div>

                <div class ="row">
                  <div class = "col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Xác nhận mật khẩu" name="retypePassword">
                      <UInput type = "password" v-model="userRegister.retypePassword"  />
                    </UFormGroup>
                  </div>
                  <div class="col-md-6 col-12 input-info-register">
                    <UFormGroup size="xl" class="" label="Số điện thoại" name="phoneNumber">
                      <UInput v-model="userRegister.phoneNumber"  />
                    </UFormGroup>
                  </div>
                </div>

                <div class = "row">
                  <div class = "col-9 input-info-register">
                    <UFormGroup size="xl" class="" label="Mã xác thực" name="confirmCode">
                      <UInput v-model="confirmCode"
                      type = "number"
                      :maxLength = "6"
                      :disabled="isDisableEmailCode"

                        />
                    </UFormGroup>
                  </div>
                  <div class="col-3 input-info-register flex items-center">
                    <UButton :disabled="isDisableGetCode" style="background:#fda085;color:#000">Get Code</UButton>
                  </div>
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
              </UForm>
            </UCard>
        </div>
  </div>

</template>

<script setup>
import { useSignup } from '~/composables/authentication/useSignup';
    

const signupData = useSignup();
 
const {
      confirmCode,
      userRegister,
      schema,
      isDisableGetCode,
      isDisableEmailCode,
      onSubmit

     } = signupData;

const isShowPrivatePoli = ref(false);

</script>