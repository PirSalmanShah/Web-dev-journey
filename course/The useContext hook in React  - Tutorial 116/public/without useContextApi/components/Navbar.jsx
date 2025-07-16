import React from 'react'
import Button from './Button'
const Navbar = ({counter}) => {
  return (
    <div>
      Navbar
      <Button counter={counter}/>
    </div>
  )
}

export default Navbar
