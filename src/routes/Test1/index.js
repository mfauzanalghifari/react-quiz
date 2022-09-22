import { useState } from "react";

const Test1 = () => {
  const [userInput, setUserInput] = useState('');
  const handleOnChange = (e) => {
    const value = e.target.value
    setUserInput(value)
  }

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b>
        <b>
          {userInput}
        </b>
      </p>
      <input onChange={handleOnChange} type="text" placeholder="input here"/>
    </div>
  )
}

export default Test1;