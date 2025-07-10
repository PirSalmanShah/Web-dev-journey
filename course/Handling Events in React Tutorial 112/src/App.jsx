import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgcolor, setbgcolor] = useState("blue")
  // const [name, setName] = useState("salman")
  const [form, setform] = useState({email:"",phone:""})
  const handleClick =()=>{
    console.log("im clicked")
  }
  const handleDclick =()=>{
    console.log("im double clicked")
  }
  const handleOver =()=>{
    setbgcolor("red")
  }
   const handleChange = (e)=>{
    // setName(e.target.value)
    setform({...form, [e.target.name]:e.target.value})
    // in this console.log last letter is not showing because setForm is asynchrounous and will take some time 
    console.log(form)
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Click</button>
        <br />
        <button onDoubleClick={handleDclick}>Click</button>
      </div>
      <div className='red' onMouseOver={handleOver} style={{backgroundColor:bgcolor}}>
        I am a div
      </div>
      <input type="text" name='email' value={form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
