export interface User {
  name: string | null;
  email: string | null;
}

export interface Contact {
  id?: number;
  name: string | undefined;
  number: string | undefined;
}
