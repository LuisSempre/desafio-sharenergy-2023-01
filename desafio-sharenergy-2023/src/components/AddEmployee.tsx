import { useState } from "react";
import { IEmployee } from "./Employee.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onTelefoneChangeHnd = (e: any) => {
    setTelefone(e.target.value);
  };
  const onCpfChangeHnd = (e: any) => {
    setCpf(e.target.value);
  };
  const onEnderecoChangeHnd = (e: any) => {
    setEndereco(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      telefone: telefone,
      cpf: cpf,
      endereco: endereco,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className='text-center'>
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type='text'
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type='text' value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Email Add. : </label>
          <input type='text' value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <label>Telefone Add. : </label>
          <input type='text' value={telefone} onChange={onTelefoneChangeHnd} />
        </div>
        <div>
          <label>Cpf Add. : </label>
          <input type='text' value={cpf} onChange={onCpfChangeHnd} />
        </div>
        <div>
          <label>Endereco Add. : </label>
          <input type='text' value={endereco} onChange={onEnderecoChangeHnd} />
        </div>
        <div>
          <input
            type='button'
            value='Back'
            onClick={onBackBtnClickHnd}
            className='bg-red-900 text-white rounded-md'
          />
          <input
            type='submit'
            value='Add Employee'
            className='bg-red-900 text-white rounded-md'
          />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
