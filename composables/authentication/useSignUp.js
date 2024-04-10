import { useField, useForm } from 'vee-validate';

export const useSignup = () => {
  const emailRegistered = reactive({})

  const confirmCode = ref('')
  const { handleSubmit, handleReset } = useForm();
  
  const userRegister = reactive({
    fullName: useField('fullName', (value) => {
      if (!value) {
        return 'Họ và tên không được để trống.';
      } else if (value?.length < 3) {
        return 'Họ và tên phải lớn hơn 3 ký tự.';
      }
      return true;
    }),
    name:useField('name', (value) => {
      if (!value) {
        return 'Tên không được để trống.';
      } else if (value?.length < 3) {
        return 'Tên phải lớn hơn 3 ký tự.';
      }
      return true;
    }),
    email: useField('email', (value) => {
      if (!value) {
        return 'Email không được để trống.';
      } else if (/^[a-z.-.0-9]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
        return true;
      }
      return 'Định dạng email không hợp lệ.';
    }),
  
    phoneNumber: useField('phoneNumber', (value) => {
    if (!value) {
      return 'Số điện thoại không được để trống';
    } else if (/^[0-9]+$/.test(value)) {
      return true;
    }
    return 'Số điện thoại không hợp lệ.';
    }),
    password: useField('password', (value) => {
      if (!value) {
        return 'Mật khẩu không được để trống.';
      } else if (value?.length >= 3) {
        return true;
      }
      return 'Mật khẩu phải chứa ít nhất 3 ký tự.';
    }),
    confirmPassword: useField('confirmPassword', (value) => {
      if (!value) {
        return 'Xác nhận mật khẩu không được để trống.';
        } else if (value !== userRegister.password.value) {
        return 'Xác nhận mật khẩu không khớp';
        }
      return true;
      }),
    }); 


    const submit = handleSubmit(async(userRegister) => {
      isShowProgressConfifmRegister.value = true
      try {
        const res = await store.dispatch("auth/register", userRegister);
        isShowProgressConfifmRegister.value = false
        isShowVerifyAcc.value = true;
      } catch (error) {
       if(error.response.status === 400){
        isShowProgressConfifmRegister.value = false
        alert("Email này đã tồn tại")
       } else{
        isShowProgressConfifmRegister.value = false
        alert("Error serve")
       }
      }
  });
  
  const confirmRegister = async() => {
      try {
        // console.log(userRegister.fullName.value)
        // console.log(confirmCode)
        const res = await AuthService.confirmRegister(userRegister, confirmCode.value)
        isShowVerifyAcc.value = false;
        alert("Đăng kí thành công")
      } catch (error) {
        if(error.response.status === 404){
          alert("Mã không tồn tại")
        }
        else if(error.response.status === 406){
          alert("Mã hết hạn")
        }else{
          alert("error serve")
        }
      }   
  }
  
  const resendConfirmCode = async() => {
    console.log(userRegister)
    isShowProgressConfifmRegister.value = true
      try {
        const userInfo = {
        fullName: userRegister.fullName.value,
        email: userRegister.email.value,
        phoneNumber: userRegister.phoneNumber.value,
        password: userRegister.password.value,
        confirmPassword: userRegister.confirmPassword.value
      };
        const res = await AuthService.sendConfifmCodeRegister(userInfo);
        isShowProgressConfifmRegister.value = false
        isShowVerifyAcc.value = true;
      } catch (error) {
       if(error.response.status === 400){
        isShowProgressConfifmRegister.value = false
        alert("Email này đã tồn tại")
       } else{
        isShowProgressConfifmRegister.value = false
        alert("Error serve")
       }
      }
  }
}