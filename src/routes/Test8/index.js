import { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const defaultPerson = {
  name: '',
  age: '',
  address: '',
}

const Test8 = () => {
  const [person, setPerson] = useState({...defaultPerson});
  const [isShowModal, setIsShowModal] = useState(false)

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    //...
    const title = e.target.id
    const temp = {...person}
    temp[title] = e.target.value
    setPerson(temp)
  };

  const submit = (e) => {
    setIsShowModal(true)
  }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm}>
        <input type="text" id='name' value={person.name} placeholder="name" onChange={handleInput}/>
        <input type="number" id='age' value={person.age} placeholder="age" onChange={handleInput}/>
        <textarea type="text" id='address' value={person.address} placeholder="address" onChange={handleInput}/>
        <button type='button' onClick={submit}>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {isShowModal && <Modal person={person} setPerson={setPerson} setIsShowModal={setIsShowModal}/>}
    </div>
  )
}

export default Test8;