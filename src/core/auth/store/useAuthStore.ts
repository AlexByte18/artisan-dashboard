import { atuhCheckStattus, authLogin } from "@/core/auth/actions/auth-actions";
import type { User } from "@/core/auth/interfaces/user";
import { create } from "zustand";

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

export interface AuthSate {
  status: AuthStatus;
  token?: string;
  user?: User;
  changeStatus: (token?: string, user?: User) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthSate>()((set, get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,
  changeStatus: async (token?: string, user?: User ) => {
    if (!token || !user) {
      set({status: 'not-authenticated', token: undefined, user: undefined});
      await localStorage.deleteItem('token');
      return false;
    }

    set({status: 'authenticated', token, user});

    await localStorage.setItem('token', token);

    return true;
  },
  login: async (email: string, password: string) => {
    const res = await authLogin(email, password);
    return get().changeStatus(res?.token, res?.user);
  },
  checkStatus: async() => {
    const res = await atuhCheckStattus();
    get().changeStatus(res?.token, res?.user);
  },
  logout: async() => {
    localStorage.deleteItem('token');
    set({status: 'not-authenticated', token: undefined, user: undefined});
  },
}));