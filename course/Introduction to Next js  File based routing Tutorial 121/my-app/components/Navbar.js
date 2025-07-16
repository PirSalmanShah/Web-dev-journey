import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='p-2 bg-neutral-900 w-10/12 mx-auto rounded-3xl my-1.5'>
        <ul className='flex gap-2.5 mr-2 justify-end'>
            <li className='list-none'>Home</li>
            <li className='list-none' >About</li>
            <li className='list-none' >Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
