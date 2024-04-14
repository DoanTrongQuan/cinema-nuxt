<script setup>
  const userLogin = reactive({
    email:'',
    password:''
  })
  
  const emailRules = [
    value => {
      if (!value) return 'Email không được để trống.'
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return 'Email không đúng định dạng.'
      return true
    }
  ];
  
  const passwordRules = [
    value => {
      if (!value) return 'Mật khẩu không được để trống.'
      if (value.length < 3) return 'Mật khẩu phải chứa ít nhất 3 ký tự.'
      return true
    }
  ];





</script>

<template>
  <div>
    <form >
                    <v-text-field class="input" dense
                      
                      
                      required
                      density="compact" 
                      v-model="userLogin.email"
                      label="Email"
                      type="email"
                      :rules="emailRules"
                    ></v-text-field>
                    <v-text-field class="input" dense 
                      type = "password"
                      
                      required
                      density="compact"
                      
                      v-model="userLogin.password" 
                      label="Mật khẩu"
                      :rules="passwordRules"
                  ></v-text-field>
                  <div class="row" style="margin:5px 5%; margin-top: 15px;">
                    <a href="https://hocmai.vn/loginv2/forgot_password.php" style="text-decoration: none;font-size:12px">Quên mật khẩu?</a>
                  </div>
                  <div class="row" style="background:#03a9f4; width:100%;height:45px; border-radius:20px; margin-left:0.2px;">
                      <button  @click ="Login"  style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG NHẬP</button>
                  </div>
                  <div class="row" style="background-image: linear-gradient(to right, #fc3606 0%, #fda085 51%, #fc7704 100%) !important; width:100%;height:45px; border-radius:20px; margin-left:0.2px; margin-top: 10px;">
                    <button type = "submit" style="color:white; font-size: 14px;line-height: 50px; font-weight:bold">ĐĂNG NHẬP VỚI FACEBOOK</button>
                  </div>
                  </form>
  </div>

</template>

