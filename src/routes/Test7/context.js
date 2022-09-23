import { createContext, useState, useEffect } from "react";
import DATA from "./_data";

export const Test7Context = createContext();
export const Test7ContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      const newData = DATA.filter((item) => item.name === search)
      setData(newData)
    } 
    else setData(DATA)
  }, [search])

  return (
    <Test7Context.Provider value={{
      data,
      setData,
      search,
      setSearch
    }}>
      {props.children}
    </Test7Context.Provider>
  )
}