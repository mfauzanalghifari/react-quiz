import { cssModal } from "./style"

const Modal = ({person, setPerson, setIsShowModal}) => {
  const handleReset = () => {
    setPerson({
      name: '',
      age: '',
      address: '',
    })
    setIsShowModal(false)
  }

  return (
    <div className={cssModal}>
      Name: {person.name}
      <br/>
      Age: {person.age}
      <br/>
      Address: {person.address}
      <br/>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Modal;
