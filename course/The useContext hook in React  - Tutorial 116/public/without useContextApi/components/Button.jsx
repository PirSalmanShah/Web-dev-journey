import React from 'react'
import Component1 from './Component1'
const Button = ({counter}) => {
  return (
    <div>
     <button><span><Component1 counter={counter}/></span>Button</button> 
    </div>
  )
}

export default Button
