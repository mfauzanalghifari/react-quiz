import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";
import { useState } from "react";

const Test4 = () => {
  const [currentData, setCurrentData] = useState(DATA)
  const [userInput, setUserInput] = useState('')

  const search = (name) => {
    if (name) {
      const temp = DATA.filter(data => data.name === name)
      setCurrentData(temp)
    } else {
      setCurrentData(DATA)
    }
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input userInput={userInput} setUserInput={setUserInput} search={search}/>
      <div>
        <Table currentData={currentData}/>
      </div>
    </div>
  )
}

export default Test4;