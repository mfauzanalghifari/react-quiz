
const Input = ({userInput, setUserInput, search}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    search(userInput)
  }

  const handleOnChange = (e) => {
    setUserInput(e.target.value)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleOnChange} value={userInput} type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
