import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = ({latest, onLatestChange}) => {
  const [value, setValue] = useState(0);
  const [number1, setNumber1] = useState('');

  const onValueChange = () => {
    setValue(!value)
  }

  const onHanldeChange = (e) => {
    const value = e.target.value
    setNumber1(value)
    onLatestChange('Comp1', value)
  }

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>{latest.source}</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={value} onChange={onValueChange}/>
        {/* only show when overwrite is checked */}
        <input 
          id="mynumber1" 
          type="number" 
          placeholder="input mynumber1"
          style={value ? {display: 'inline-block'} : {display: 'none'}} 
          value={number1}
          onChange={onHanldeChange}
        />
      </label>
      <Comp2 latest={latest}/>
    </div>
  )
}

export default Comp1;