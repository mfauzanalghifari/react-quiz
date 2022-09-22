import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [userInput, setUserInput] = useState('')

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label userInput={userInput} setUserInput={setUserInput} />
      </p>
      <Input userInput={userInput} setUserInput={setUserInput} />
    </div>
  )
}

export default Test2;