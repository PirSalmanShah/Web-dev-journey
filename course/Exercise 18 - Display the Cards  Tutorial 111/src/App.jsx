import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState([])
  async function genData() {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let b = await a.json()
    setdata(b)
  }

  return (
    <>
      <Navbar/>
      {/* I'm a stupid moron coulduse useeffect uhhhhh */}
      <button onClick={async()=>{const data =await genData();}}>Click to generate records</button>
      {
        data.map((item)=>{
        return (
          <div key={item.id}>
            <h6>userID:{item.id}</h6>
            <h1>Title:{item.title}</h1>
            <h3>Description:{item.body}</h3>
          </div>
        )
      })
      }
    </>
  )
}

export default App
