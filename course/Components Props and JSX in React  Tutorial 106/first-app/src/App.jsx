import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {
 
  return (
    <>
     <Navbar/>  
     <div className="cards">
      <Card Title="This is first title" Desc="This the desc for first card"/>
      <Card Title="This is second title" Desc="This the desc for second card"/>
      <Card Title="This is third title" Desc="This the desc for third card"/>
      <Card Title="This is fourth title" Desc="This the desc for fourth card"/>
      <Card Title="This is fifth title" Desc="This the desc for fifth card"/>
     </div>
     <Footer/>
    </>
  )
}

export default App
