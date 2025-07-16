import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { increment,incrementByAmount,decrement,square } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'
function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar/>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(square())} >**</button>
        <button onClick={() => dispatch(decrement())} >-</button>
        <button onClick={() => dispatch(incrementByAmount(12))} >increaseby</button>
        {count}

      </div>
      
    </>
  )
}

export default App
