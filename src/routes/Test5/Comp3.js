import { cssWrapper } from "./style";
import Comp4 from "./Comp4";
import { useContext } from "react";
import { Test5Context } from "./context";


const Comp3 = (/* NO PROPS ALLOWED */) => {
  const {handleShowModal, showModal} = useContext(Test5Context)
  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {document.getElementById('mynumber')?.value}</div>
      <button onClick={handleShowModal} type="button">Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;