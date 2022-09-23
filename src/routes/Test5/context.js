import { createContext, useState } from "react";

export const Test5Context = createContext();
export const Test5ContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [myNumber2, setMyNumber2] = useState('');
  const [myNumber, setMyNumber] = useState('');

  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleHideModal = () => {
    setShowModal(false)
  }

  return (
    <Test5Context.Provider value={{
      showModal,
      setShowModal,
      handleHideModal,
      handleShowModal,
      myNumber2,
      setMyNumber2,
      myNumber,
      setMyNumber
    }}>
      {props.children}
    </Test5Context.Provider>
  )
}