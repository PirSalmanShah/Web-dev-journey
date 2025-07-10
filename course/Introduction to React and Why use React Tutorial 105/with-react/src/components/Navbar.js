import React from 'react'
// you can do it like this or use props
// const Navbar = ({logoText}) => {
//   return (
//     <div>
//       <div className="logotext">{logoText}</div>


const Navbar = (props) => {
  return (
    <div>
      <div className="logotext">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Navbar

