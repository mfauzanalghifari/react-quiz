import { useContext, useRef } from "react"
import { Test7Context } from "./context"

const Input = () => {
  const { setSearch } = useContext(Test7Context)
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
