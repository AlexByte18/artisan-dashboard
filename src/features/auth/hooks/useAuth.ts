import type { LoginData } from "@/core/auth/interfaces/user";
import { useAuthStore } from "@/core/auth/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { login } = useAuthStore();
   
  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const { email, password } = data;
      await login(email, password);

    }
  });
  
  return {
    loginMutation,
  };
}