
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'

function App() {
  const router = new createBrowserRouter([
    // {
    //   // ideally we do this routing in index.jsx do that whole file will get routing but right now we are using a fragement to route
    //   path:"/",
    //   element:<><Navbar/><Home/></>
    // },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    },
  ])

  return (
    <>
     
      <RouterProvider router={router}/>
    </>
  )
}

export default App
