const Input = ({userInput, setUserInput}) => {
  const handleChange = (e) => {
    const value = e.target.value
    setUserInput(value)
  }

  return <input onChange={handleChange} value={userInput} type="text" placeholder="input here" />
}

export default Input;
