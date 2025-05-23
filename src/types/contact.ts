export interface Contact {
  id?: number;
  name: string;
  number: string;
}

export interface ContactFormValues {
  name: string;
  number: string;
}

export interface ContactFormInitialValues {
  name: string;
  number: string;
}

export interface EditContactFormValues {
  id?: number;
  name: string;
  number: string;
}

export interface EditContactFormInitialValues {
  name: string;
  number: string;
}
