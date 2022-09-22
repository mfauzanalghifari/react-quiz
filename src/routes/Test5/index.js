
import { cssWrapper } from './style';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { useState } from 'react';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

const Test5 = () => {
  const [number, setNumber] = useState('')
  const [latest, setLatest] = useState({})

  const handleOnChange = (e) => {
    const value = e.target.value
    setNumber(value)
    onLatestChange('Test5', value)
  }

  const onLatestChange = (source, value) => {
    setLatest({source, value})
  }

  const onAdd = () => {
    if (number) setNumber(parseInt(number) + 1)
    else setNumber(1)
  }

  const onSubstract = () => {
    if (number) setNumber(parseInt(number) - 1)
    else setNumber(-1)
  }

  return(
    <div>
      {question}
      <button onClick={onSubstract} id="numbermin" type="button">-</button>
      <input onChange={handleOnChange} value={number} id="mynumber" type="number" placeholder="input mynumber"/>
      <button onClick={onAdd} id="numberplus" type="button">+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is <code>{number % 2 !== 0 ? "ODD" : "EVEN"}</code> 
      </div>
      <Comp1 latest={latest} onLatestChange={onLatestChange}/>
      <Comp3 />
    </div>
  )
}

export default Test5;