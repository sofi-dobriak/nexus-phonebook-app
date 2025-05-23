export interface User {
  name: string | null;
  email: string | null;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormInitialValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface RegisterFormInitialValues {
  name: string;
  email: string;
  password: string;
}
