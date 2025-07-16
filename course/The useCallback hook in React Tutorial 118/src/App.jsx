import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
const [adjective, setAdjective] = useState("hello")
// in js if we make 2 function suppose getAdjective and getAdjective2 with exact same code and compare it (getAdjective == getAdjective2)=>False, js will show false,therefore when app components re render the js see the getadjective function as different function and react thinks that the function is change and re render the Navbar even though is was never change,therefore we use callback hook to freeze the function

// will run on everyrender
// const getAdjective= ()=>{
//   return "another"+count
// }

// empty dependency array will not render again and freez the function even though count change
// const getAdjective= useCallback(
//   ()=>{
//   return "another"+count
// },[])

// count in dependency array will render again and when the count change
const getAdjective= useCallback(
  ()=>{
  return "another"+count
},[count])

  return (
    <>
      <div>
        <Navbar adjective={adjective} getAdjective={getAdjective}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
