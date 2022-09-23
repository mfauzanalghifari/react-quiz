import { useContext } from 'react';
import { Test5Context } from './context';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { handleHideModal, myNumber2, setMyNumber2 } = useContext(Test5Context)

  const handleOnChange = (e) => {
    const newValue = e.target.value
    setMyNumber2(newValue)
  }

  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button onClick={handleHideModal} style={{cursor: 'pointer'}} type="button">⊗</button>
        </div>
        <input onChange={handleOnChange} value={myNumber2} id="mynumber2" type="text" placeholder="input mynumber2"></input>
      </div>
    </>
  )
}

export default Comp4;