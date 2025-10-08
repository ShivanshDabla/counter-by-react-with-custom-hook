import React, { useState } from 'react'
import useTOggle from './useTOggle'
import useToggle from './usetoggle2'

const App = () => {
  const [count,increment,decrement] = useTOggle()
  const [counter,inc,dec] = useToggle()
  return (
    <div>
      <h1>Counter score :{count} </h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <hr></hr>
      <hr></hr>
      <h1>Counter score :{counter} </h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>


    </div>
  )
}

export default App