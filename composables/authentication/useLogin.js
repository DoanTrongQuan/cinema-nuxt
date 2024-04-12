import { useAuth } from '~/composables/authentication/useAuth';
import * as Yup from 'yup';

export const useLogin = () => {
  const router = useRouter()
  
  const authAsync = useAuth();


  const userLogin = reactive({
    email:'',
    password:''
  })
  
  const validation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),

    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),
  });


  async function onSubmit(userLogin){
    try {
      const response = await authAsync.login(userLogin);

        
      router.replace('/home')
    } catch (error) {
      
    }
  }

  return {
    userLogin,
    validation,
    onSubmit,
  }
}