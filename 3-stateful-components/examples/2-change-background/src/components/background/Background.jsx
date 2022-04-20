
import React , { useEffect, useState } from "react"

const colors = {
  Sea: '#a2ccb6',
  Sand: '#fceeb5',
  Peach: '#ee786e',
  AtomicTangerin:"#FFA474"
}
export const Background = () => {
  const [color, setColor] = useState(colors.Sea)//initial state
  useEffect(
    () => {
      document.body.style.background = color //side-effect
      console.log('component lifecycle');
      
    },
    [color]
  )
  return (
    <>
      <select value={color} onChange={e => setColor(e.target.value)}>
        {Object.entries(colors).map(([name, value]) => (
          <option key={`color--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>
      <h1>{color}</h1>
    </>
  )
}