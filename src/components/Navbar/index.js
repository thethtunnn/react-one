import React from 'react'
import './index.css'

export default function Navbar({SetShowModal}) {
 
  return (
    <nav className='navbar'>
      <div className="container">
        <h1>logo</h1>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li><butto onClick={()=> SetShowModal(true) }>CreatePost</butto></li>
          
        </ul>
      </div>
    </nav>
  )
}
