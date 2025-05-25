export interface Contact {
  id?: number;
  name: string;
  number: string;
}

export interface ContactFormValues {
  name: string;
  number: string;
}

export interface ContactFormInitialValues extends ContactFormValues {}

export interface EditContactFormValues extends ContactFormValues {
  id?: number;
}

export interface EditContactFormInitialValues extends ContactFormValues {}

export interface DeleteContact {
  id: number;
}
