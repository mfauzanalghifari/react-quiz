import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [planets, setPlanets] = useState([
    {
      color: 'red',
      distance: 70,
      duration: 1,
    }
  ])

  const getRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  }

  const createNewPlanet = (lastPlanet = {distance: 40, duration: 0}) => {
    const newPlanet = {
      color: getRandomColor(),
      distance: lastPlanet.distance + 30,
      duration: lastPlanet.duration + 1
    }
    return newPlanet
  }

  const handleChange = (e) => {
    const newLength = parseInt(e.target.value)

    if (newLength) {
      const tempPlanets = [...planets]
      if (tempPlanets.length === 0) {
        tempPlanets.push(createNewPlanet())
      }
  
      while (parseInt(newLength) !== tempPlanets.length) {
        if (newLength < tempPlanets.length) {
          tempPlanets.pop()
        }
        else {
          tempPlanets.push(createNewPlanet(tempPlanets[tempPlanets.length-1]))
        }
      }
      setPlanets(tempPlanets)
    }
    else {
      setPlanets([])
    }
  }

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input min={0} value={(planets.length).toString()} onChange={handleChange} type="number" placeholder="number of planet"/>
      <div>min: 0</div>
      <Solar planets={planets} setPlanets={setPlanets}/>
    </>
  )
}

export default Test9;