export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
}

export enum PageEnum {
  list,
  add,
  edit,
}
