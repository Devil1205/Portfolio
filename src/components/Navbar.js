import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li onClick={()=>{document.documentElement.scrollIntoView({behavior: "smooth", block: "start"})}}>Home</li>
            <li>Profile</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar