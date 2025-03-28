import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  function handleClick() {
    alert('i am clicked')
  }

  const handleClick3 = () => {
    alert('new click')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => handleAdd5(7)}>Click add 5</button>
    </>
  )
}

export default App
