import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)
const [todo, settodo] = useState([
  {
    title:"Hey i am title 1",
    desc:"Hey i am description 1"
  },
  {
    title:"Hey i am title 2",
    desc:"Hey i am description 2"
  },
  {
    title:"Hey i am title 3",
    desc:"Hey i am description 3"
  },
])
  // const Todo = (props)=>{
  //   return(<>
  //   <div>{props.title}</div>
  //   <div>{props.desc}</div>
  //   </>
  //   )
  // }
  const Todo = ({todoArugment})=>{
    return(<>
    <div>{todoArugment.title}</div>
    <div>{todoArugment.desc}</div>
    </>
    )
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* if true will show h1 or thenga */}
      {/* {showBtn?<h1>Vite + React</h1>:"thenga"} */}
      {/* if true will show h1 */}
      {showBtn && <h1>Vite + React</h1>}
      <Todo todoArugment={{title:"Salman is the best" ,desc:"I will inshallah become good Believe in Allah"}}/>
      {todo.map((item)=>{
        return <Todo key={item.title} todoArugment={item}/>
        // <Todo key={item.title} title={item.title} desc={item.desc}/>
      })}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => { setshowBtn(!showBtn) }}>togoogle</button>
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
