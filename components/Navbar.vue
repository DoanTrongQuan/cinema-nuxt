<template>
  <div class = "header">
      <div  style="background: black;">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-8" style="margin-left: auto !important; margin-right: auto !important; text-align: right;padding: 0;">
            <NuxtLink to="/home"><a href="" style="color: white;font-size: 15px;">Đăng nhập</a></NuxtLink>
            <NuxtLink to="/home"><a href="" style="color: white;margin-left: 10px;" >Đăng ký</a></NuxtLink>
        </div>  
      </div>
      <div>
        <div class="mx-auto max-w-7xl">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden" >
            <!-- Mobile menu button-->      
            
          </div>

        </div>
      </div>
      <div>

      </div>
    <div>

    </div>
  </div>

</template>
  
<script setup>

const nameOfCinema = ref('dfdsfgdg')


const menusUser = ref([
        { text: 'Thông tin cá nhân', icon: 'mdi-account'},
        { text: 'Đổi mật khẩu', icon: 'mdi-key' },
        { text: 'Đăng xuất', icon: 'mdi-logout' },
])


  </script>

<style scoped>
.header-content{
  background: rgb(255, 255, 255);
}
.dropdown-item{
  padding: 0 !important;
  
}
.dropdown-item:hover {
  color: black;
}
.dropdown:hover > .dropdown-menu, .dropend:hover > .dropdown-menu{
  display: block;
}
/* .dropend .dropdown-menu li {
  padding-left: 10px;
} */
.dropdown button {
  width: 100% ;
  display: flex;
  justify-content: space-between;
}
@media screen and (min-width: 577px) {
  .dropend:hover > .dropdown-menu{
  position: absolute;
  top: 0;
  left: 100%;

}
}
  </style>