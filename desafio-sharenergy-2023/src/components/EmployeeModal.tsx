import { IEmployee } from "./Employee.type";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <h3>Employee Data</h3>
        <div>
          <div>
            <label>First Name : {data.firstName}</label>
          </div>
          <div>
            <label>Last Name : {data.lastName}</label>
          </div>
          <div>
            <label>Email Add. : {data.email}</label>
          </div>
          <div>
            <label>Telefone Add. : {data.telefone}</label>
          </div>
          <div>
            <label>Cpf Add. : {data.cpf}</label>
          </div>
          <div>
            <label>Endereco Add. : {data.endereco}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
