import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [telefone, setTelefone] = useState(data.telefone);
  const [cpf, setCpf] = useState(data.cpf);
  const [endereco, setEndereco] = useState(data.endereco);

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
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      telefone: telefone,
      cpf: cpf,
      endereco: endereco,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className='form-container'>
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
          <input type='button' value='Back' onClick={onBackBtnClickHnd} />
          <input type='submit' value='Update Employee' />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
