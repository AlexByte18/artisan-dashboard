export interface User {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
}

export type LoginData  = Pick<User, 'email'> & {
  password: string;
}