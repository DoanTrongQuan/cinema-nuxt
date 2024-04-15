import { useCinemaStore } from "~/stores/user/useCinemaStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const store = useCinemaStore();

  try {
    await store.getAllCinemas(); 
  } catch (error) {
    console.error('Error fetching cinema data:', error);
    router.replace('/error'); 
  }
});