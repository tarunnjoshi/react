// useState, and many more these are called hooks
import { useState } from 'react'   
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)
  // let counter = 5;   This will not reflecting on UI thats why we use the hook Usestate.

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };


  const removeValue = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
