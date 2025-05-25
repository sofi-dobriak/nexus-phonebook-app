export interface User {
  name: string | null;
  email: string | null;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormInitialValues extends LoginFormValues {}

export interface RegisterFormValues extends LoginFormValues {
  name: string;
}

export interface RegisterFormInitialValues extends RegisterFormValues {}
