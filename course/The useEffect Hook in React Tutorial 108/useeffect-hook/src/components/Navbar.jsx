import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    // Case 1:
     useEffect(() => {
      alert("Hello i will run on every render")
    })
    // Case 2:
    useEffect(() => {
      alert("Hello I will on first time")
    }, [])
    useEffect(() => {
      alert(" color was change")
    }, [color])
// case 3 cleanup function
useEffect(() => {
  alert("i will be shown on every render of navbaar")

  return () => {
    alert("Navbar was unmounted")
  }
})

    return (
        <div>
            Im a navbar of color {color}
        </div>
    )
}

export default Navbar
